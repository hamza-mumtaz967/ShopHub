'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/stores/cart-store';
import { useWishlistStore } from '@/lib/stores/wishlist-store';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  
  const { addItem, isInCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-muted">
            <Link href={`/product/${product.id}`}>
              <div className="relative h-64 w-full">
                <Image
                  src={product.images[imageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Image Gallery on Hover */}
                {product.images.length > 1 && isHovered && (
                  <div className="absolute bottom-2 left-2 right-2 flex justify-center space-x-1">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === imageIndex ? 'bg-primary' : 'bg-muted-foreground/50'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setImageIndex(index);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {product.featured && (
                <Badge variant="secondary" className="bg-yellow-400 text-yellow-900">
                  Featured
                </Badge>
              )}
              {product.trending && (
                <Badge variant="secondary" className="bg-red-500 text-white">
                  Trending
                </Badge>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive">
                  -{discountPercentage}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="outline" className="bg-background">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Quick Actions */}
            <motion.div
              className="absolute top-2 right-2 flex flex-col space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="sm"
                variant="secondary"
                className="h-8 w-8 rounded-full p-0"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`h-4 w-4 ${
                    isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''
                  }`}
                />
              </Button>
              
              <Link href={`/product/${product.id}`}>
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 rounded-full p-0"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="space-y-2">
              {/* Brand */}
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {product.brand}
              </p>

              {/* Product Name */}
              <Link href={`/product/${product.id}`}>
                <h3 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="w-full mt-3"
                onClick={handleAddToCart}
                disabled={!product.inStock || isInCart(product.id)}
              >
                {isInCart(product.id) ? (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    In Cart
                  </>
                ) : !product.inStock ? (
                  'Out of Stock'
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}