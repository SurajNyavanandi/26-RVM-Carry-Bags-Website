import React from 'react';
import { ShoppingBag, Phone, Mail, MapPin, AtSign, BadgeCheck, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/products';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center text-white font-bold">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">RVM </span>
                <span className="font-bold text-xl text-amber-500 tracking-tight">Carry Bags</span>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  RVM Manufacturers & Printers
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              "{BUSINESS_INFO.tagline}" — Leading manufacturer & custom flexo printer of eco-friendly non-woven D-Cut, W-Cut, Stitched, and 3D Box Carry Bags in Hyderabad, India.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GSTIN: <strong className="text-slate-200 font-mono">{BUSINESS_INFO.gst}</strong></span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <AtSign className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <BadgeCheck className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-emerald-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('categories')} className="hover:text-emerald-400 transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-emerald-400 transition-colors">
                  Products & Rates
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-choose-us')} className="hover:text-emerald-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-emerald-400 transition-colors">
                  About Factory
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product Categories</h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map(p => (
                <li key={p.id}>
                  <button onClick={() => scrollTo(p.id)} className="hover:text-amber-400 transition-colors flex items-center justify-between w-full">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">{p.priceDisplay}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Information</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p>Proprietor: <strong className="text-slate-400">{BUSINESS_INFO.proprietor}</strong> | Domain: <strong className="text-slate-400">{BUSINESS_INFO.domain}</strong></p>
        </div>

      </div>
    </footer>
  );
};
