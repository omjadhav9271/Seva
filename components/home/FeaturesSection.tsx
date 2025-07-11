'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, CreditCard, Star, MapPin, MessageCircle, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'All service providers undergo thorough background checks and KYC verification for your safety.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Clock,
    title: 'Quick Booking',
    description: 'Book services instantly or schedule for later. Get confirmed appointments within minutes.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay safely through our wallet system with 8% APR rewards. Multiple payment options available.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: 'Read real reviews from verified customers. Money-back guarantee on unsatisfactory services.',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: MapPin,
    title: 'Location-Based',
    description: 'Find service providers in your exact area. Filter by distance and availability.',
    color: 'from-red-400 to-red-600',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Chat',
    description: 'Communicate directly with service providers through our in-app messaging system.',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: Award,
    title: 'Tier Benefits',
    description: 'Unlock exclusive benefits with Silver, Gold, and Platinum wallet tiers.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: '24/7 support team ready to help. Dedicated dispute resolution for peace of mind.',
    color: 'from-pink-400 to-pink-600',
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-saffron-400 via-green-800 to-navy-800 bg-clip-text text-transparent mb-4">
            Why Choose Seva?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built a platform that prioritizes safety, convenience, and quality to ensure you get the best service experience every time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-saffron-400 via-green-600 to-navy-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Premium Service?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust Seva for their daily needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-saffron-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Service Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-saffron-600 transition-all duration-300"
              >
                Become a Provider
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}