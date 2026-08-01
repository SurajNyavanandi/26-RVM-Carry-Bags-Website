import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingBag, FileText, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface HeaderProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formattedWhatsAppUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I would like to inquire about non-woven printed bags."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white transition-shadow duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
              GSTIN: {BUSINESS_INFO.gst}
            </span>
            <span className="hidden md:inline">|</span>
            <span>Hyderabad's Trusted Non-Woven Bag Manufacturer & Printer</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <a 
              href={formattedWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-emerald-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-emerald-800 transition-colors">
              <ShoppingBag className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-emerald-950 tracking-tight leading-tight">
                  RVM
                </span>
                <span className="font-bold text-xl sm:text-2xl text-amber-600 tracking-tight leading-tight">
                  Carry Bags
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                RVM Manufacturers & Printers
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
            <button 
              onClick={() => scrollTo('hero')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('categories')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Categories
            </button>
            <button 
              onClick={() => scrollTo('products')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Products & Pricing
            </button>
            <button 
              onClick={() => scrollTo('why-choose-us')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollTo('testimonials')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              About Factory
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="hover:text-emerald-700 transition-colors py-1"
            >
              Contact Us
            </button>
          </nav>

          {/* Actions & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm hover:shadow"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </button>

            <a
              href={formattedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-800 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-gray-800">
            <button 
              onClick={() => scrollTo('hero')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('categories')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>Product Categories</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('products')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>All Products & Prices</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('why-choose-us')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>Why Choose Us</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('testimonials')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>Testimonials</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('faq')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>About RVM Manufacturers</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-3 hover:bg-emerald-50 rounded-lg text-emerald-900 flex justify-between items-center"
            >
              <span>Contact & Location</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-500 text-slate-900 font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Calculate & Get Quote</span>
            </button>
            
            <a
              href={formattedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
