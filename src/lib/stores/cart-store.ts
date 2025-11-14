import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/lib/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedOptions?: Record<string, string>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getSubtotal: () => number;
  isInCart: (product: Product) => boolean;
  getItemQuantity: (productId: string) => number;
}

// A helper function to clean up corrupted data from localStorage
const sanitizeItems = (items: any[]): CartItem[] => {
  if (!Array.isArray(items)) {
    return []; // If items is not an array, return an empty cart
  }
  return items.filter(item => {
    // Keep the item only if it exists, has a product object, and that product has a price
    return item && item.product && typeof item.product.price !== 'undefined';
  });
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, quantity = 1, selectedOptions = {}) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                id: `${product.id}-${Date.now()}`,
                product,
                quantity,
                selectedOptions,
              },
            ],
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // ✅ FIXED: Added safety check to prevent crash
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          // Safety check: if item or product is invalid, skip it
          if (!item || !item.product || typeof item.product.price === 'undefined') {
            console.warn("Found an invalid item in cart during total price calculation:", item);
            return total;
          }
          const price = item.product.originalPrice
            ? Math.min(item.product.price, item.product.originalPrice)
            : item.product.price;
          return total + price * item.quantity;
        }, 0);
      },

      // ✅ FIXED: Added safety check to prevent crash
      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          // Safety check: if item or product is invalid, skip it
          if (!item || !item.product || typeof item.product.price === 'undefined') {
            console.warn("Found an invalid item in cart during subtotal calculation:", item);
            return total;
          }
          return total + item.product.price * item.quantity;
        }, 0);
      },

      isInCart: (product: Product) => {
        if (!product?.id) return false;
        return get().items.some(
          (item) => item?.product?.id === product.id
        );
      },

      getItemQuantity: (productId: string) => {
        const item = get().items.find(
          (item) => item.product.id === productId
        );
        return item?.quantity || 0;
      },
    }),
    {
      name: 'cart-storage', // localStorage key
      
      // ✅ NEW: This function runs after the store is rehydrated from localStorage
      onRehydrateStorage: () => (state) => {
        console.log("Cart store rehydrated, checking for invalid items...");
        if (state) {
          const sanitizedItems = sanitizeItems(state.items);
          if (sanitizedItems.length !== state.items.length) {
            console.warn("Removed invalid items from cart during rehydration.");
            // Update the state with the clean data
            state.items = sanitizedItems;
          }
        }
      },
    }
  )
);