import { ChevronDown, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerColumns = [
    {
      title: "Platform",
      links: [
        "All Features", "Unified Inbox", "Multi-Calendar", "Mobile Management App",
        "Guesty CRM", "Direct Reservations", "Guest Communication Services™",
        "Manual Reservations", "Guesty Damage Protection™", "Channel Manager",
        "Guesty Websites", "Task Management", "Automation Tools", "Multi-Unit Management",
        "Analytics", "Reporting Tools", "Guesty LocksManager™", "Revenue Management",
        "Payment Solutions", "Trust Accounting", "Guesty Pay™", "Guesty Capital™",
        "Guesty PriceOptimizer™", "Owners Portal", "Open API"
      ]
    },
    {
      title: "Solutions", 
      links: [
        "Vacation Rentals", "Urban Rentals", "Aparthotels", "Serviced Apartments",
        "Outdoor Stays", "Hotel property management system", "Property management for rentals",
        "Real estate property management", "Home rentals property management", "Guesthouses and B&Bs"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog", "Reports & Guides", "Customers", "Guesty alternatives", "Events",
        "Marketplace", "Guesty Pro Help Center", "Guesty Lite Help Center"
      ]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Pricing"]
    },
    {
      title: "Get in Touch",
      links: ["Contact Us", "Become a Partner", "Affiliate Program", "Sign up for our newsletter"]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="content-wrapper py-16">
        {/* Top row with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <a href="/" className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-guesty-teal rounded"></div>
            <span className="ml-2 text-xl font-bold text-guesty-dark">Guesty</span>
          </a>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-guesty-dark mb-4 flex items-center">
                {column.title}
                <ChevronDown className="w-4 h-4 ml-2 md:hidden" />
              </h3>
              <ul className="space-y-3">
                {column.links.slice(0, 8).map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-guesty-teal transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2025 Guesty, Inc.
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-guesty-teal transition-colors">
                Guesty Copyright Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-guesty-teal transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-guesty-teal transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-guesty-teal transition-colors">
                Vulnerability Discovery Procedure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;