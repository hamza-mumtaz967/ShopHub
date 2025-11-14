import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem, Product } from '@/lib/types';

interface WishlistStore {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  getItemCount: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.product.id === product.id);
          
          if (existingItem) {
            return state;
          }
          
          return {
            items: [...state.items, {
              id: `${product.id}-${Date.now()}`,
              product,
              addedAt: new Date().toISOString()
            }]
          };
        });
      },
      
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }));
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
      
      isInWishlist: (productId: string) => {
        return get().items.some(item => item.product.id === productId);
      },
      
      getItemCount: () => {
        return get().items.length;
      }
    }),
    {
      name: 'wishlist-storage'
    }
  )
);