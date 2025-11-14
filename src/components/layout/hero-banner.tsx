'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  ctaText: string;
  ctaLink: string;
  bgPosition?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Summer Sale',
    subtitle: 'Up to 50% Off',
    description: 'Discover amazing deals on electronics, fashion, and home essentials. Limited time offer!',
    image: '/images/hero/banner 1.jpg',
    badge: 'Limited Time',
    ctaText: 'Shop Now',
    ctaLink: '/deals',
    bgPosition: 'center'
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Latest Tech',
    description: 'Get your hands on the newest smartphones, laptops, and gadgets. Free shipping on orders over $50.',
    image: '/images/hero/banner 2.jpg',
    badge: 'New',
    ctaText: 'Explore',
    ctaLink: '/products?sort=newest',
    bgPosition: 'center'
  },
  {
    id: '3',
    title: 'Premium Quality',
    subtitle: 'Trusted Brands',
    description: 'Shop from top brands with confidence. Quality guaranteed and excellent customer service.',
    image: '/images/hero/banner 3.jpg',
    badge: 'Featured',
    ctaText: 'Learn More',
    ctaLink: '/about',
    bgPosition: 'center'
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative w-full h-full bg-gradient-to-r from-black/60 to-black/40"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: heroSlides[currentSlide].bgPosition || 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <motion.div
                className="max-w-2xl text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {heroSlides[currentSlide].badge && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    {heroSlides[currentSlide].badge}
                  </Badge>
                )}
                
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold mb-4 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p
                  className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                    asChild
                  >
                    <a href={heroSlides[currentSlide].ctaLink}>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      {heroSlides[currentSlide].ctaText}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'bg-background/60 hover:bg-background/80'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}