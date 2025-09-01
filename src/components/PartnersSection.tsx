import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PartnersSection = () => {
  const partnerLogos = [
    'Airbnb', 'Booking.com', 'Vrbo', 'Expedia', 'Hotels.com', 'HomeAway',
    'TripAdvisor', 'Agoda', 'HostfullyConnect', 'Hospitable', 'RedAwning',
    'FlipKey', 'HomeToGo', 'KAYAK', 'Trivago', 'Google Travel'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="content-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="section-headline">
              Connect with 200+<br />
              top <span className="copernicus">industry solutions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-guesty-gray leading-relaxed">
              Guesty's Marketplace helps you build a stronger tech stack in a single platform, unlocking endless possibilities for integration through an open API
            </p>
            <Button className="button-tertiary">
              Get started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Animated partner logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-sm text-gray-600 font-medium">{partner}</span>
              </div>
            ))}
          </div>
          
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;