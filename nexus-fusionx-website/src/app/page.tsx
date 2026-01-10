import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import SuccessSection from '@/components/sections/SuccessSection';
import FAQSection from '@/components/sections/FAQSection';
import ResultsSection from '@/components/sections/ResultsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatisticsSection />
      <SuccessSection />
      <FAQSection />
      <ResultsSection />
      <CTASection />
    </>
  );
}
