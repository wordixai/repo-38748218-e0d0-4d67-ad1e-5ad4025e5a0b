import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      statistic: "10x",
      description: "portfolio increase in 2 years", 
      company: "Old Town Rentals",
      quote: "There are a lot of options when it comes to property management software, but having one that grows with the industry has been super helpful for us",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      statistic: "50+",
      description: "hours on average saved per month",
      company: "Tiny Away", 
      quote: "",
      image: "https://images.unsplash.com/photo-1494790108755-2616b412b169?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      statistic: "2.5x", 
      description: "revenue growth in 2 years",
      company: "Zen Vacation Rentals",
      quote: "",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      statistic: "840",
      description: "properties added in 5 years",
      company: "Host & Stay",
      quote: "",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      statistic: "~50%",
      description: "increase in daily rates",
      company: "Cypriot Realty", 
      quote: "",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="section-label">Real voices, real results</div>
            <h2 className="section-headline">
              Hear from property professionals<br />
              who <span className="copernicus">partnered</span> with Guesty
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-guesty-gray leading-relaxed">
              Fueled by exploration and innovation, Guesty's comprehensive product suite delivers the tools you need to scale your portfolio and stay ahead
            </p>
            <Button className="button-primary">
              Get a demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`group relative rounded-2xl overflow-hidden p-6 min-h-[300px] ${
              index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">{testimonial.statistic}</div>
                  <p className="text-white/90 text-sm">{testimonial.description}</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="font-medium">{testimonial.company}</span>
                    <Play className="w-4 h-4" />
                  </div>
                  {testimonial.quote && (
                    <blockquote className="text-sm text-white/90 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;