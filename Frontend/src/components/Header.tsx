import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, ChevronRight, ShoppingBag, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { Button } from './ui/Button';

interface HeaderProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenAdminModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenAdminModal }) => {
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
    <header className="sticky top-0 z-40 bg-white transition-all duration-200">
      {/* Top Announcement Bar - Dark Navy Slate */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
              GSTIN: {BUSINESS_INFO.gst}
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="text-slate-200 font-medium">Eco-Friendly Non-Woven Carry Bags Manufacturer & Custom Printers • Hyderabad</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={formattedWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`border-b border-slate-100 transition-all duration-200 bg-white/95 backdrop-blur-md ${isScrolled ? 'shadow-xs py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-10.5 sm:h-10.5 bg-blue-600 text-white rounded-xl flex items-center justify-center font-extrabold text-lg shadow-sm shadow-blue-600/30 group-hover:bg-blue-700 transition-colors">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                  RVM
                </span>
                <span className="font-bold text-xl sm:text-2xl text-blue-600 tracking-tight leading-none">
                  Carry Bags
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-0.5">
                Manufacturers & Custom Printers
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-semibold text-slate-700">
            <button 
              onClick={() => scrollTo('products')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              Products & Rates
            </button>
            <button 
              onClick={() => scrollTo('categories')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              Bag Categories
            </button>
            <button 
              onClick={() => scrollTo('why-choose-us')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              About Factory
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Actions & Razorpay Style Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Admin Icon Button ONLY (No "Admin" text) */}
            <button
              onClick={onOpenAdminModal}
              className="p-2 sm:p-2.5 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-xl border border-slate-200 transition-all cursor-pointer flex items-center justify-center"
              title="Admin Portal"
              aria-label="Admin Portal"
            >
              <Lock className="w-4 h-4 text-slate-700 hover:text-blue-600" />
            </button>

            <div className="hidden sm:block">
              <Button
                variant="blue"
                size="sm"
                onClick={() => onOpenQuoteModal()}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Get Instant Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            <button 
              onClick={() => scrollTo('products')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>Products & Pricing</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => scrollTo('categories')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>Bag Categories</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => scrollTo('why-choose-us')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>Why Choose Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>About Factory</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => scrollTo('faq')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-3 hover:bg-blue-50/80 rounded-xl text-slate-900 flex justify-between items-center"
            >
              <span>Contact & Location</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <Button
              variant="blue"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center justify-center py-3 text-sm"
            >
              Get Instant Quote
            </Button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminModal();
              }}
              className="p-3 bg-slate-100 hover:bg-blue-50 text-slate-800 font-bold rounded-xl text-sm flex items-center justify-center border border-slate-200 cursor-pointer shrink-0"
              title="Admin Login Portal"
              aria-label="Admin Login Portal"
            >
              <Lock className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
