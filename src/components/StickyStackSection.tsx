import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StickyStackSection = () => {
  const stackItems = [
    {
      title: "Get started with ease",
      tags: ["1-3 listings", "guesty LITE™"],
      quote: "Solo hosts and property owners can transform their vacation rental side hustles into thriving businesses, managing bookings and delighting guests effortlessly with Guesty",
      buttonText: "Discover Guesty Lite™",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Scale to new heights", 
      tags: ["4-199 listings", "guesty PRO™"],
      quote: "Guesty helps growing rental companies evolve from just a few properties into regional leaders, managing hundreds of listings and driving millions in revenue",
      buttonText: "Discover Guesty Pro™",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Elevate your business",
      tags: ["200+ listings", "guesty ENTERPRISE™"], 
      quote: "Property management enterprises rely on Guesty's customized solutions to manage thousands of listings, optimize revenue, and deliver exceptional guest experiences globally",
      buttonText: "Discover Guesty Enterprise™",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="section-label">From solo to scale</div>
          <h2 className="section-headline">
            Your business has <span className="copernicus">no limits.</span><br />
            Neither do we.
          </h2>
        </div>

        <div className="space-y-8">
          {stackItems.map((item, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden min-h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className={`tag transparent variant-${index + 1}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-end">
                  <blockquote className="text-lg text-white/90 leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                  
                  <div className="lg:text-right">
                    <Button className="button-secondary">
                      {item.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyStackSection;