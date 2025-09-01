import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AnimatedCardsSection from '@/components/AnimatedCardsSection';
import StickyStackSection from '@/components/StickyStackSection';
import TabbedContentSection from '@/components/TabbedContentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import StatsSection from '@/components/StatsSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnimatedCardsSection />
        <StickyStackSection />
        <TabbedContentSection />
        <TestimonialsSection />
        <PartnersSection />
        <StatsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;