import { HeroSection } from '@/components/home/HeroSection';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { FeaturesSection } from '@/components/home/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceGrid />
      <FeaturesSection />
    </div>
  );
}