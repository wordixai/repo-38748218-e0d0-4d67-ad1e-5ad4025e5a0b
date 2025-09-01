import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AnimatedCardsSection = () => {
  const cards = [
    {
      title: "Connect and command",
      description: "Sync your properties in real-time on Airbnb, Booking.com, Vrbo, and 60+ channels, instantly optimizing for top rankings"
    },
    {
      title: "Transform operations", 
      description: "Simplify even the most demanding tasks with automated, AI-powered tools — all managed effortlessly from one intuitive dashboard"
    },
    {
      title: "Maximize every opportunity",
      description: "Drive revenue through dynamic pricing, pre-check-in services, and elevated guest experiences that set you apart from the competition"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="space-y-4 mb-8 lg:mb-0">
            <div className="section-label">How it works</div>
            <h2 className="section-headline">
              All your properties.<br />
              Every channel. <span className="copernicus">One</span> platform.
            </h2>
          </div>
          
          <Button className="button-primary">
            Get started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gradient-to-br from-guesty-teal/10 to-guesty-teal/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-guesty-teal/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-guesty-teal rounded-full"></div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-guesty-dark mb-3">{card.title}</h4>
              <p className="text-guesty-gray leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCardsSection;