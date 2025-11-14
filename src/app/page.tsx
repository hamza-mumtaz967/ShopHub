'use client';

import { motion } from 'framer-motion';
import { HeroBanner } from '@/components/layout/hero-banner';
import { ProductCarousel } from '@/components/product/product-carousel';
import { CategoryGrid } from '@/components/product/category-grid';
import { products, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  const trendingProducts = products.filter(product => product.trending);

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across different categories. Find exactly what you're looking for.
          </p>
        </motion.div>
        
        <CategoryGrid categories={categories} />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <ProductCarousel 
          products={featuredProducts} 
          title="Featured Products"
        />
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4">
        <ProductCarousel 
          products={trendingProducts} 
          title="Trending Now"
        />
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Offer: Free Shipping on Orders Over $50
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Shop now and enjoy free shipping on all orders over $50. Limited time offer - don't miss out!
          </p>
          <motion.button
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/products'}
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </section>

      {/* All Products Preview */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">All Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our complete collection of high-quality products at competitive prices.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/products'}
          >
            View All Products
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}