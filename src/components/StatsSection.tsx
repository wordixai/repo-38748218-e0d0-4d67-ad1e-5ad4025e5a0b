import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "500K+", description: "listings managed across our platform" },
    { number: "99.99%", description: "uptime backed by 24/7 support" },
    { number: "Daily", description: "feature releases to keep you ahead" },
    { number: "250+", description: "R&D experts driving continuous innovation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-guesty-teal to-teal-600 text-white">
      <div className="content-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-white/80 font-semibold text-sm uppercase tracking-wide">
                Why Guesty?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Built by hosts, trusted<br />
                by industry <span className="copernicus">leaders</span><br />
                worldwide
              </h2>
            </div>
            
            <Button className="bg-white text-guesty-teal hover:bg-gray-100">
              Get a demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold mb-3">
                  {stat.number}
                </div>
                <p className="text-white/90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;