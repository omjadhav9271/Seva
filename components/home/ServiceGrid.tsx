'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Wrench, 
  ChefHat, 
  Sparkles, 
  Heart, 
  Car, 
  Stethoscope, 
  GraduationCap, 
  Settings, 
  Hammer, 
  Leaf, 
  Scissors 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'electrician',
    title: 'Electrician',
    icon: Zap,
    description: 'Wiring, repairs, installations',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50 hover:bg-yellow-100',
    borderColor: 'border-yellow-200 hover:border-yellow-300',
  },
  {
    id: 'plumber',
    title: 'Plumber',
    icon: Wrench,
    description: 'Pipes, leaks, bathroom fixes',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    borderColor: 'border-blue-200 hover:border-blue-300',
  },
  {
    id: 'cook',
    title: 'Home Cook / Tiffin',
    icon: ChefHat,
    description: 'Fresh meals, tiffin service',
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50 hover:bg-red-100',
    borderColor: 'border-red-200 hover:border-red-300',
  },
  {
    id: 'cleaning',
    title: 'House Cleaning',
    icon: Sparkles,
    description: 'Deep cleaning, maintenance',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
    borderColor: 'border-green-200 hover:border-green-300',
  },
  {
    id: 'caretaker',
    title: 'Caretaker / Elderly Care',
    icon: Heart,
    description: 'Elderly care, companionship',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100',
    borderColor: 'border-pink-200 hover:border-pink-300',
  },
  {
    id: 'driver',
    title: 'Driver / Car Rental',
    icon: Car,
    description: 'Personal driver, car rental',
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50 hover:bg-gray-100',
    borderColor: 'border-gray-200 hover:border-gray-300',
  },
  {
    id: 'doctor',
    title: 'Home-Visit Doctor',
    icon: Stethoscope,
    description: 'Medical consultation at home',
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50 hover:bg-teal-100',
    borderColor: 'border-teal-200 hover:border-teal-300',
  },
  {
    id: 'tutor',
    title: 'Tutor / Coaching',
    icon: GraduationCap,
    description: 'Academic tutoring, skills',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
    borderColor: 'border-purple-200 hover:border-purple-300',
  },
  {
    id: 'appliance',
    title: 'Appliance Repair',
    icon: Settings,
    description: 'Washing machine, laptop, WiFi',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100',
    borderColor: 'border-indigo-200 hover:border-indigo-300',
  },
  {
    id: 'carpenter',
    title: 'Carpenter & Handyman',
    icon: Hammer,
    description: 'Furniture, repairs, installation',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50 hover:bg-amber-100',
    borderColor: 'border-amber-200 hover:border-amber-300',
  },
  {
    id: 'gardening',
    title: 'Gardening & Pest Control',
    icon: Leaf,
    description: 'Garden care, pest solutions',
    color: 'from-lime-400 to-lime-600',
    bgColor: 'bg-lime-50 hover:bg-lime-100',
    borderColor: 'border-lime-200 hover:border-lime-300',
  },
  {
    id: 'beauty',
    title: 'Beauty & Wellness',
    icon: Scissors,
    description: 'Salon at home, spa services',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50 hover:bg-rose-100',
    borderColor: 'border-rose-200 hover:border-rose-300',
  },
];

export function ServiceGrid() {
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
      y: 20,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-saffron-400 via-green-800 to-navy-800 bg-clip-text text-transparent mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with verified professionals for all your home and personal service needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className={`service-card cursor-pointer border-2 ${service.borderColor} ${service.bgColor} transition-all duration-300 h-full`}>
                  <CardContent className="p-4 md:p-6 text-center h-full flex flex-col justify-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-saffron-400 to-saffron-500 hover:from-saffron-500 hover:to-saffron-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            View All Services
          </motion.button>
        </div>
      </div>
    </div>
  );
}