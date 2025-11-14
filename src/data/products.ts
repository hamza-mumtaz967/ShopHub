import { Product, Category, Review } from '@/lib/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Armor',
    slug: 'armor',
    image: '/images/categories/Armor1.jpg',
    subcategories: [
      { id: '1-1', name: 'Smartphones', slug: 'smartphones', categoryId: '1' },
      { id: '1-2', name: 'Laptops', slug: 'laptops', categoryId: '1' },
      { id: '1-3', name: 'Tablets', slug: 'tablets', categoryId: '1' },
      { id: '1-4', name: 'Accessories', slug: 'accessories', categoryId: '1' }
    ]
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: '/images/categories/fashion.jpg',
    subcategories: [
      { id: '2-1', name: "Men's Clothing", slug: 'mens-clothing', categoryId: '2' },
      { id: '2-2', name: "Women's Clothing", slug: 'womens-clothing', categoryId: '2' },
      { id: '2-3', name: 'Shoes', slug: 'shoes', categoryId: '2' },
      { id: '2-4', name: 'Accessories', slug: 'fashion-accessories', categoryId: '2' }
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: '/images/categories/home.jpg',
    subcategories: [
      { id: '3-1', name: 'Furniture', slug: 'furniture', categoryId: '3' },
      { id: '3-2', name: 'Decor', slug: 'decor', categoryId: '3' },
      { id: '3-3', name: 'Kitchen', slug: 'kitchen', categoryId: '3' },
      { id: '3-4', name: 'Garden', slug: 'garden', categoryId: '3' }
    ]
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    image: '/images/categories/sports.jpg',
    subcategories: [
      { id: '4-1', name: 'Fitness', slug: 'fitness', categoryId: '4' },
      { id: '4-2', name: 'Outdoor Gear', slug: 'outdoor-gear', categoryId: '4' },
      { id: '4-3', name: 'Team Sports', slug: 'team-sports', categoryId: '4' },
      { id: '4-4', name: 'Water Sports', slug: 'water-sports', categoryId: '4' }
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    price: 1199,
    originalPrice: 1299,
    images: [
      '/images/products/iphone-15-pro-max-1.jpg',
      '/images/products/iphone-15-pro-max-2.jpg',
      '/images/products/iphone-15-pro-max-3.jpg'
    ],
    category: 'Electronics',
    subcategory: 'Smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviews: 2453,
    inStock: true,
    featured: true,
    trending: true,
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Color': 'Natural Titanium'
    },
    tags: ['smartphone', 'apple', '5g', 'pro'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    description: 'Powerful laptop with M3 Max chip, stunning Liquid Retina XDR display, and all-day battery life.',
    price: 2499,
    originalPrice: 2799,
    images: [
      '/images/products/macbook-pro-16-1.jpg',
      '/images/products/macbook-pro-16-2.jpg'
    ],
    category: 'Electronics',
    subcategory: 'Laptops',
    brand: 'Apple',
    rating: 4.9,
    reviews: 1823,
    inStock: true,
    featured: true,
    specifications: {
      'Display': '16.2" Liquid Retina XDR',
      'Processor': 'M3 Max chip',
      'Memory': '36GB Unified Memory',
      'Storage': '1TB SSD',
      'Graphics': '40-core GPU',
      'Battery': 'Up to 22 hours'
    },
    tags: ['laptop', 'apple', 'm3', 'professional'],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling with Auto NC Optimizer, exceptional sound quality, and up to 30-hour battery life.',
    price: 349,
    originalPrice: 399,
    images: [
      '/images/products/sony-wh1000xm5-1.jpg',
      '/images/products/sony-wh1000xm5-2.jpg'
    ],
    category: 'Electronics',
    subcategory: 'Accessories',
    brand: 'Sony',
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    trending: true,
    specifications: {
      'Type': 'Over-ear, wireless',
      'Driver Size': '30mm',
      'Frequency Response': '4Hz - 40,000Hz',
      'Battery Life': 'Up to 30 hours',
      'Charging': 'USB-C Quick Charge',
      'Weight': '250g'
    },
    tags: ['headphones', 'wireless', 'noise-canceling', 'sony'],
    createdAt: '2024-01-08T10:00:00Z',
    updatedAt: '2024-01-08T10:00:00Z'
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air unit for cushioning and stylish design.',
    price: 150,
    images: [
      '/images/products/nike-air-max-270-1.jpg',
      '/images/products/nike-air-max-270-2.jpg'
    ],
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Nike',
    rating: 4.5,
    reviews: 892,
    inStock: true,
    specifications: {
      'Material': 'Mesh upper',
      'Sole': 'Rubber',
      'Technology': 'Max Air unit',
      'Weight': '12.6 oz',
      'Available Sizes': '7-13'
    },
    tags: ['shoes', 'nike', 'running', 'comfortable'],
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '5',
    name: 'Samsung 65" QLED 4K Smart TV',
    description: 'Stunning 4K QLED display with Quantum HDR, Object Tracking Sound, and Smart TV features.',
    price: 1299,
    originalPrice: 1599,
    images: [
      '/images/products/samsung-qled-tv-1.jpg',
      '/images/products/samsung-qled-tv-2.jpg'
    ],
    category: 'Electronics',
    subcategory: 'Accessories',
    brand: 'Samsung',
    rating: 4.6,
    reviews: 1243,
    inStock: true,
    featured: true,
    specifications: {
      'Display': '65" QLED 4K',
      'Resolution': '3840 x 2160',
      'HDR': 'Quantum HDR 24X',
      'Sound': 'Object Tracking Sound',
      'Smart TV': 'Tizen OS',
      'Ports': '4 HDMI, 2 USB'
    },
    tags: ['tv', '4k', 'smart-tv', 'samsung'],
    createdAt: '2024-01-03T10:00:00Z',
    updatedAt: '2024-01-03T10:00:00Z'
  },
  {
    id: '6',
    name: 'Adidas Ultraboost 22',
    description: 'Responsive running shoes with Boost midsole for maximum energy return and comfort.',
    price: 190,
    images: [
      '/images/products/adidas-ultraboost-22-1.jpg',
      '/images/products/adidas-ultraboost-22-2.jpg'
    ],
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Adidas',
    rating: 4.4,
    reviews: 567,
    inStock: true,
    trending: true,
    specifications: {
      'Material': 'Primeknit upper',
      'Midsole': 'Boost',
      'Outsole': 'Continental Rubber',
      'Weight': '11.3 oz',
      'Drop': '10mm'
    },
    tags: ['shoes', 'adidas', 'running', 'boost'],
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '7',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Powerful cordless vacuum with laser detection and intelligent suction.',
    price: 749,
    originalPrice: 849,
    images: [
      '/images/products/dyson-v15-1.jpg',
      '/images/products/dyson-v15-2.jpg'
    ],
    category: 'Home & Garden',
    subcategory: 'Kitchen',
    brand: 'Dyson',
    rating: 4.8,
    reviews: 934,
    inStock: true,
    specifications: {
      'Type': 'Cordless stick vacuum',
      'Suction Power': '230AW',
      'Battery Life': 'Up to 60 minutes',
      'Filtration': 'Whole-machine HEPA',
      'Weight': '5.9 lbs',
      'Dust Capacity': '0.76L'
    },
    tags: ['vacuum', 'cordless', 'dyson', 'cleaning'],
    createdAt: '2023-12-28T10:00:00Z',
    updatedAt: '2023-12-28T10:00:00Z'
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    description: 'Non-slip, eco-friendly yoga mat with extra cushioning for comfort.',
    price: 45,
    images: [
      '/images/products/yoga-mat-1.jpg',
      '/images/products/yoga-mat-2.jpg'
    ],
    category: 'Sports & Outdoors',
    subcategory: 'Fitness',
    brand: 'FitnessPro',
    rating: 4.3,
    reviews: 234,
    inStock: true,
    specifications: {
      'Material': 'TPE eco-friendly',
      'Thickness': '6mm',
      'Dimensions': '183cm x 61cm',
      'Weight': '1.2kg',
      'Features': 'Non-slip, waterproof'
    },
    tags: ['yoga', 'fitness', 'mat', 'exercise'],
    createdAt: '2023-12-25T10:00:00Z',
    updatedAt: '2023-12-25T10:00:00Z'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: 'user1',
    userName: 'John Doe',
    rating: 5,
    title: 'Amazing phone!',
    content: 'The iPhone 15 Pro Max is incredible. The camera quality is outstanding and the performance is blazing fast.',
    verified: true,
    helpful: 23,
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    productId: '1',
    userId: 'user2',
    userName: 'Jane Smith',
    rating: 4,
    title: 'Great but expensive',
    content: 'Love the phone but the price is quite high. The titanium design feels premium though.',
    verified: true,
    helpful: 15,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: '3',
    productId: '2',
    userId: 'user3',
    userName: 'Mike Johnson',
    rating: 5,
    title: 'Perfect for work',
    content: 'As a developer, this MacBook Pro is exactly what I needed. The M3 Max chip handles everything I throw at it.',
    verified: true,
    helpful: 31,
    createdAt: '2024-01-15T10:00:00Z'
  }
];