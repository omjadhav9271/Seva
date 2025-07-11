'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, MapPin, Wallet, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Demo state
  const [walletBalance, setWalletBalance] = useState(12450); // Demo balance
  const [userTier, setUserTier] = useState('Gold'); // Demo tier
  const [notificationCount, setNotificationCount] = useState(3); // Demo notifications

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Gold': return 'bg-amber-100 text-amber-800';
      case 'Platinum': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="text-2xl">🙏</span>
              <span className="text-xl font-bold bg-gradient-to-r from-saffron-400 via-green-800 to-navy-800 bg-clip-text text-transparent">
                Seva
              </span>
              <span className="text-2xl">🙏</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/providers" className="text-sm font-medium hover:text-primary transition-colors">
              Providers
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/become-provider" className="text-sm font-medium hover:text-primary transition-colors">
              Become a Provider
            </Link>
          </nav>

          {/* Right Side - Wallet, Notifications, Profile */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* Location */}
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Mumbai, MH</span>
                </Button>

                {/* Wallet */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="relative">
                      <Wallet className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{formatCurrency(walletBalance)}</span>
                      <Badge className={`ml-2 text-xs ${getTierColor(userTier)}`}>
                        {userTier}
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64">
                    <DropdownMenuLabel>Wallet & Rewards</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="p-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Balance:</span>
                        <span className="font-semibold">{formatCurrency(walletBalance)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Monthly Rewards:</span>
                        <span className="text-green-600 font-semibold">+{formatCurrency(walletBalance * 0.08 / 12)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Tier:</span>
                        <Badge className={getTierColor(userTier)}>{userTier}</Badge>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/wallet/topup" className="w-full">Top Up Wallet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/wallet/withdraw" className="w-full">Withdraw Funds</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/wallet" className="w-full">Transaction History</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      {notificationCount > 0 && (
                        <Badge 
                          variant="destructive" 
                          className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                        >
                          {notificationCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-64 overflow-y-auto">
                      <DropdownMenuItem className="flex flex-col items-start p-3">
                        <span className="font-medium">Booking Confirmed</span>
                        <span className="text-sm text-muted-foreground">Your electrician will arrive at 2 PM today</span>
                        <span className="text-xs text-muted-foreground">5 minutes ago</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex flex-col items-start p-3">
                        <span className="font-medium">Rewards Credited</span>
                        <span className="text-sm text-muted-foreground">₹82 rewards added to your wallet</span>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex flex-col items-start p-3">
                        <span className="font-medium">New Provider Available</span>
                        <span className="text-sm text-muted-foreground">A top-rated plumber is now in your area</span>
                        <span className="text-xs text-muted-foreground">1 day ago</span>
                      </DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/notifications" className="w-full">View All Notifications</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Profile" />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Rajesh Kumar</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          rajesh@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bookings">My Bookings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/favorites">Favorites</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/help">Help & Support</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t"
            >
              <nav className="py-4 space-y-2">
                <Link
                  href="/services"
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/providers"
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Providers
                </Link>
                <Link
                  href="/how-it-works"
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/become-provider"
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Provider
                </Link>
                <div className="pt-2 border-t">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Mumbai, MH
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}