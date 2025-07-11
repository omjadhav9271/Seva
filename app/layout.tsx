import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🙏 Seva 🙏 - Premium Service Marketplace',
  description: 'Connect with verified service providers in your area. From home cleaning to tutoring, find trusted professionals for all your needs.',
  keywords: 'services, home services, electrician, plumber, cleaning, tutor, cook, India',
  authors: [{ name: 'Seva Team' }],
  creator: 'Seva Marketplace',
  publisher: 'Seva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '🙏 Seva 🙏 - Premium Service Marketplace',
    description: 'Connect with verified service providers in your area',
    url: 'https://seva-marketplace.netlify.app',
    siteName: 'Seva',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seva - Service Marketplace',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🙏 Seva 🙏 - Premium Service Marketplace',
    description: 'Connect with verified service providers in your area',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#ffffff',
              border: '1px solid #ff9933',
              color: '#054187',
            },
          }}
        />
      </body>
    </html>
  );
}