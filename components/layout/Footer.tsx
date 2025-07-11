import Link from 'next/link';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🙏</span>
              <span className="text-xl font-bold text-white">Seva</span>
              <span className="text-2xl">🙏</span>
            </Link>
            <p className="text-sm text-gray-300">
              Connecting you with verified service providers across India. From home services to professional help, we've got you covered.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/electrician" className="text-gray-300 hover:text-white transition-colors">
                  Electrician Services
                </Link>
              </li>
              <li>
                <Link href="/services/plumber" className="text-gray-300 hover:text-white transition-colors">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/cook" className="text-gray-300 hover:text-white transition-colors">
                  Home Cook / Tiffin
                </Link>
              </li>
              <li>
                <Link href="/services/tutor" className="text-gray-300 hover:text-white transition-colors">
                  Tutoring Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/become-provider" className="text-gray-300 hover:text-white transition-colors">
                  Become a Provider
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white transition-colors">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@seva.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span>© 2025 Seva Marketplace. All rights reserved.</span>
            <span>•</span>
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>in India</span>
          </div>
          
          {/* Built with Bolt.new Badge */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-3 py-1 rounded-md text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              <span>⚡</span>
              <span>Built with Bolt.new</span>
            </a>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.478 4.267C3.849 4.048 3.612 3.906 3.612 3.906s.496-.496 1.414-.496c.918 0 1.414.496 1.414.496s-.264.142-.892.361c-.628.22-1.127.715-1.127 1.343v9.78c0 .628.499 1.123 1.127 1.343.628.22.892.361.892.361s-.496.496-1.414.496c-.918 0-1.414-.496-1.414-.496s.264-.142.892-.361c.628-.22 1.127-.715 1.127-1.343V5.61c0-.628-.499-1.123-1.127-1.343z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}