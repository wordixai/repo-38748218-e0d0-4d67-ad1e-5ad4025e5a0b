import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TabbedContentSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Diverse Distribution",
      content: {
        headline: "Enjoy unmatched reach coupled with smart, channel-specific pricing strategies",
        tags: ["Channel management", "Direct bookings", "API synchronization"],
        bullets: [
          "Connect to 60+ booking channels",
          "Tailor rate strategies for each channel", 
          "Sync availability and pricing in real-time",
          "Build branded booking websites"
        ],
        buttonText: "Explore Channel Manager",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    },
    {
      title: "Centralized Control",
      content: {
        headline: "Manage everything from one powerful dashboard",
        tags: ["Unified inbox", "Calendar management", "Analytics"],
        bullets: [
          "A single inbox for all guest communication",
          "A single calendar for every reservation",
          "Metrics to track and benchmark KPIs", 
          "Customizable business reporting"
        ],
        buttonText: "Explore Multi-Calendar",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    },
    {
      title: "Smart Operations",
      content: {
        headline: "Automate workflows with AI-powered tools",
        tags: ["Automation", "AI assistance", "Mobile management"],
        bullets: [
          "Automated end-to-end guest journey",
          "AI generated personalized guest replies",
          "AI-driven website content creation",
          "Mobile app for on-the-go management"
        ],
        buttonText: "Explore Automation Workflows",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    },
    {
      title: "Guest Success",
      content: {
        headline: "Deliver exceptional guest experiences",
        tags: ["Guest portal", "CRM", "Review management"],
        bullets: [
          "User-friendly guest portal",
          "CRM turns data into guest satisfaction",
          "Automated review collection",
          "AI summaries to improve reviews"
        ],
        buttonText: "Explore Guesty CRM",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    },
    {
      title: "Financial Performance",
      content: {
        headline: "Optimize revenue with intelligent pricing",
        tags: ["Dynamic pricing", "Payment solutions", "Financial reporting"],
        bullets: [
          "Machine learning driven dynamic pricing",
          "Pricing rules for every scenario",
          "Integrated, secure payment solutions",
          "Compliant vacation rental trust accounting"
        ],
        buttonText: "Explore Revenue Management",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    },
    {
      title: "Risk Mitigation",
      content: {
        headline: "Protect your business with comprehensive coverage",
        tags: ["Liability protection", "Damage coverage", "Fraud prevention"],
        bullets: [
          "Comprehensive liability protection",
          "Damage protection coverage", 
          "AI-powered fraud prevention tools",
          "Thorough guest verification"
        ],
        buttonText: "Explore Damage Protection",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="space-y-4 mb-8 lg:mb-0">
            <div className="section-label">Purpose-built tools for every goal</div>
            <h2 className="section-headline">
              The future of short-term<br />
              property management, <span className="copernicus">today</span>
            </h2>
          </div>
          
          <Button className="button-primary">
            Get a demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Desktop tabs */}
        <div className="hidden lg:block">
          <nav className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === index 
                    ? 'bg-white text-guesty-teal shadow-sm' 
                    : 'text-gray-600 hover:text-guesty-teal'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-guesty-dark leading-tight">
                {tabs[activeTab].content.headline}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {tabs[activeTab].content.tags.map((tag, index) => (
                  <span key={index} className="tag bg-guesty-teal/10 text-guesty-teal">
                    {tag}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-3">
                {tabs[activeTab].content.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-guesty-teal flex-shrink-0" />
                    <span className="text-guesty-gray">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="button-tertiary">
                {tabs[activeTab].content.buttonText}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img 
                src={tabs[activeTab].content.image}
                alt={tabs[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden space-y-4">
          {tabs.map((tab, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                className="w-full p-4 text-left font-medium text-guesty-dark flex justify-between items-center"
              >
                {tab.title}
                <ArrowRight className={`w-5 h-5 transition-transform ${activeTab === index ? 'rotate-90' : ''}`} />
              </button>
              
              {activeTab === index && (
                <div className="p-4 border-t border-gray-200 space-y-4">
                  <ul className="space-y-2">
                    {tab.content.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-center space-x-3">
                        <ArrowRight className="w-4 h-4 text-guesty-teal flex-shrink-0" />
                        <span className="text-sm text-guesty-gray">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="button-tertiary">
                    {tab.content.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabbedContentSection;