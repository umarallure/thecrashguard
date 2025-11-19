import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CTABanner';
import ResourceGallery from '@/components/home/ResourceGallery';
import LegalCategories from '@/components/home/LegalCategories';
import VehicleAccidentSection from '@/components/home/VehicleAccidentSection';
import FAQSection from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FAQSection />
        <ResourceGallery />
        <WhyChooseUs />
        <CTABanner />
        <VehicleAccidentSection />
        <LegalCategories />
        
      </main>
    </div>
  );
}
