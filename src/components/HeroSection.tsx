import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('enterprise brands');
  const animatedTexts = ['enterprise brands', 'vacation rentals', 'property managers', 'successful hosts'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = animatedTexts.indexOf(prev);
        return animatedTexts[(currentIndex + 1) % animatedTexts.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="content-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="section-label">
                THE LEADING property management software for short-term rentals
              </div>
              
              <h1 className="section-headline">
                The driving force behind more{' '}
                <div className="inline-block">
                  <span className="copernicus text-guesty-teal transition-all duration-500">
                    {currentText}
                  </span>
                </div>
              </h1>
              
              <p className="text-xl text-guesty-gray leading-relaxed">
                Simplify operations, eliminate busywork, and grow revenue. All from one powerful platform.
              </p>
              
              <Button className="button-primary text-lg px-8 py-4">
                Get started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stars and badges */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-green-400 rounded-sm"></div>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">Proud to partner with</div>
              <div className="flex flex-wrap items-center gap-4">
                {['Airbnb', 'Booking.com', 'Vrbo', 'Expedia'].map((partner) => (
                  <div key={partner} className="h-8 px-4 bg-gray-100 rounded flex items-center">
                    <span className="text-sm text-gray-600">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero video/image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-guesty-teal to-teal-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-teal-700/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-lg font-medium">Property Management Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;