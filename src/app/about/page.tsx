'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Award, 
  Globe,
  Target,
  Lightbulb,
  Shield,
  Truck,
  Star,
  ArrowRight,
  Package
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Passionate about creating the best shopping experience',
      avatar: '/avatars/sarah.jpg',
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      description: 'Tech enthusiast focused on innovation',
      avatar: '/avatars/mike.jpg',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      description: 'Creating beautiful and intuitive user experiences',
      avatar: '/avatars/emily.jpg',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Head of Marketing',
      description: 'Building strong connections with our customers',
      avatar: '/avatars/alex.jpg',
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '1M+', label: 'Happy Customers' },
    { icon: <Package className="h-6 w-6" />, value: '50K+', label: 'Products' },
    { icon: <Globe className="h-6 w-6" />, value: '120+', label: 'Countries' },
    { icon: <Award className="h-6 w-6" />, value: '99%', label: 'Satisfaction' },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do.',
      color: 'text-red-500',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly improving and bringing new ideas to life.',
      color: 'text-yellow-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Safety',
      description: 'Ensuring secure and reliable shopping for everyone.',
      color: 'text-blue-500',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Quality',
      description: 'Only the best products make it to our platform.',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">About ShopHub</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We're on a mission to make online shopping simple, enjoyable, and accessible to everyone. 
          Founded in 2020, we've grown from a small startup to a trusted platform for millions of shoppers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button size="lg">
              Start Shopping
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ShopHub began with a simple idea: to create a shopping platform that puts customers first. 
                Our founder, Sarah Johnson, experienced firsthand the frustrations of online shopping and 
                decided to build something better.
              </p>
              <p>
                What started in a small garage with just three people has grown into a team of over 200 
                dedicated professionals serving millions of customers worldwide. We've partnered with thousands 
                of brands to bring you the best products at competitive prices.
              </p>
              <p>
                Today, we're proud to be one of the fastest-growing e-commerce platforms, known for our 
                exceptional customer service, curated product selection, and commitment to making shopping 
                enjoyable for everyone.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-primary/20 rounded-2xl flex items-center justify-center">
              <Heart className="h-24 w-24 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`flex justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            The passionate people behind ShopHub
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShopHub?</h2>
            <p className="text-xl text-white/90">
              We're committed to providing you with the best shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-white/80">Free shipping on orders over $50, delivered within 5-7 business days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-white/80">Your payment information is encrypted and secure with industry-standard SSL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
              <p className="text-white/80">Carefully curated selection of high-quality products from trusted brands</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join millions of happy customers and discover amazing products
        </p>
        <Link href="/products">
          <Button size="lg">
            Explore Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}