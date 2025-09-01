import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const platformDropdownItems = [
    {
      category: "Guests and reservations",
      mainItems: [
        { title: "Unified Inbox", description: "Bring every guest conversation together for faster, better responses" },
        { title: "Multi-Calendar", description: "Manage reservations from multiple channels within a single calendar" },
        { title: "Mobile Management App", description: "Your business on-the-go, no matter where you are" }
      ],
      secondaryItems: [
        "Guesty CRM",
        "Direct Reservations", 
        "Guest Communication Services™",
        "Manual Reservations",
        "Guesty Damage Protection™"
      ]
    },
    {
      category: "Distribution and operations",
      mainItems: [
        { title: "Channel Manager", description: "Your listings everywhere that matters, controlled from one dashboard" },
        { title: "Guesty Websites", description: "Craft stunning booking sites that convert visitors into guests" },
        { title: "Task Management", description: "Organize cleaning, maintenance, and other tasks without missing a beat" }
      ],
      secondaryItems: [
        "Automation Tools",
        "Multi-Unit Management",
        "Analytics",
        "Reporting Tools",
        "Guesty LocksManager™"
      ]
    },
    {
      category: "Business and financials",
      mainItems: [
        { title: "Revenue Management", description: "Unlock your property's full earning potential with informed, intelligent pricing" },
        { title: "Payment Solutions", description: "Frictionless payments designed specifically for short-term rental success" },
        { title: "Trust Accounting", description: "Navigate complex hospitality accounting with automated tools for compliance" }
      ],
      secondaryItems: [
        "Guesty Pay™",
        "Guesty Capital™",
        "Guesty PriceOptimizer™",
        "Owners Portal",
        "Open API"
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="content-wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-8 h-8 bg-guesty-teal rounded"></div>
            <span className="ml-2 text-xl font-bold text-guesty-dark">Guesty</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-guesty-teal transition-colors"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Platform</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'platform' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white border rounded-lg shadow-lg p-8"
                  onMouseEnter={() => setActiveDropdown('platform')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {platformDropdownItems.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-guesty-dark mb-4">{category.category}</h3>
                        <div className="space-y-4 mb-6">
                          {category.mainItems.map((item, itemIdx) => (
                            <a key={itemIdx} href="#" className="block group">
                              <h4 className="font-medium text-gray-900 group-hover:text-guesty-teal">{item.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {category.secondaryItems.map((item, itemIdx) => (
                            <a key={itemIdx} href="#" className="block text-sm text-gray-600 hover:text-guesty-teal">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-guesty-teal transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-guesty-teal transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <a href="#" className="text-gray-700 hover:text-guesty-teal transition-colors">Pricing</a>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-guesty-teal transition-colors">
              <span>En</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-gray-700 hover:text-guesty-teal transition-colors">Log in</a>
            <Button className="button-secondary">Get started</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="content-wrapper py-4">
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700">Platform</a>
              <a href="#" className="block text-gray-700">Solutions</a>
              <a href="#" className="block text-gray-700">Resources</a>
              <a href="#" className="block text-gray-700">Pricing</a>
              <a href="#" className="block text-gray-700">Log in</a>
              <Button className="button-primary w-full">Get started</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;