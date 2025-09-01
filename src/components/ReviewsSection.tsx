import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Matt Marrs",
      location: "Texas | United States",
      quote: "Guesty's made a huge impact on our business. It has allowed us to grow faster than I ever thought we could.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Brandreth Canaley", 
      location: "Florida | United States",
      quote: "I have overseen and handled four property management system migrations. Guesty is my last stop.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b412b169?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ric Kenworthy",
      location: "Arizona | United States", 
      quote: "There are a lot of options when it comes to property management software, but having one that grows with the industry has been super helpful for us.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jacob Guldager",
      location: "Denmark",
      quote: "Guesty makes it easy to scale up. It feels like it's built for that.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const awards = [
    "Award 1", "Award 2", "Award 3", "Award 4", "Award 5", "Award 6"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="section-label">Industry Recognized Excellence</div>
            <h2 className="section-headline">
              See why property<br />
              managers around the<br />
              globe <span className="copernicus">rely</span> on Guesty
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-600">{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-slow">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-guesty-dark">{review.name}</div>
                    <div className="text-sm text-guesty-gray">{review.location}</div>
                  </div>
                </div>
                
                <blockquote className="text-guesty-gray leading-relaxed mb-4">
                  "{review.quote}"
                </blockquote>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;