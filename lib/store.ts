import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'customer' | 'provider' | 'admin';
  wallet_balance: number;
  wallet_tier: 'Silver' | 'Gold' | 'Platinum';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  signOut: () => void;
}

interface BookingState {
  currentBooking: any | null;
  setCurrentBooking: (booking: any) => void;
  clearBooking: () => void;
}

interface LocationState {
  currentLocation: {
    latitude: number;
    longitude: number;
    address: string;
    city: string;
    state: string;
  } | null;
  setLocation: (location: any) => void;
}

// Auth Store
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      signOut: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'seva-auth',
    }
  )
);

// Booking Store
export const useBookingStore = create<BookingState>((set) => ({
  currentBooking: null,
  setCurrentBooking: (booking) => set({ currentBooking: booking }),
  clearBooking: () => set({ currentBooking: null }),
}));

// Location Store
export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      currentLocation: null,
      setLocation: (location) => set({ currentLocation: location }),
    }),
    {
      name: 'seva-location',
    }
  )
);

// Demo data for development
export const demoUser: User = {
  id: '1',
  email: 'rajesh@example.com',
  full_name: 'Rajesh Kumar',
  avatar_url: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200',
  role: 'customer',
  wallet_balance: 12450,
  wallet_tier: 'Gold',
};

// Initialize demo user for development
if (typeof window !== 'undefined') {
  const authStore = useAuthStore.getState();
  if (!authStore.isAuthenticated) {
    authStore.setUser(demoUser);
  }
}