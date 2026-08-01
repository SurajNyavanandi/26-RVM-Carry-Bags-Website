import React from 'react';
import { MessageCircle, FileText, CheckCircle2, ShieldCheck, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/products';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenLightbox }) => {
  const whatsappUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I would like to inquire about customized non-woven printed carry bags."
  )}`;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-emerald-50/70 via-white to-white py-10 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-900 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Hyderabad's Leading Non-Woven Bag Manufacturer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              <span className="text-emerald-800">Print Your Brand,</span> <br className="hidden sm:inline" />
              <span className="text-amber-600">Pack Your Success.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Elevate your business with eco-friendly <strong className="text-gray-900 font-semibold">D-Cut, W-Cut, Stitched, and 3D Box Bags</strong>. Custom logo printing with high-capacity factory output near Ramoji Film City, Hyderabad.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom Printing</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eco Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Factory Wholesale</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High Payload Capacity</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Vibrant Fast Inks</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>GST Registered</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-base flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg transform active:scale-98"
              >
                <FileText className="w-5 h-5" />
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3.5 rounded-xl text-base flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Quick Contact & GST Bar */}
            <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>GST: <strong className="text-gray-700 font-semibold">{BUSINESS_INFO.gst}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-emerald-600" />
                <span>Proprietor: <strong className="text-gray-700 font-semibold">{BUSINESS_INFO.proprietor}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Banner Image Showcase Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer decorative border container */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition duration-300" />

              {/* Main Banner Card */}
              <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                
                {/* Image Title Badge */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Featured RVM Showcase
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    9:16 Full View
                  </span>
                </div>

                {/* Image Container displaying full 9:16 image without cropping */}
                <div 
                  onClick={() => onOpenLightbox(HERO_IMAGE, "RVM Carry Bags Master Showcase")}
                  className="relative aspect-[9/16] w-full bg-slate-900 rounded-xl overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={HERO_IMAGE}
                    alt="RVM Carry Bags Banner"
                    className="w-full h-full object-contain bg-slate-900 transition-transform duration-500 group-hover/img:scale-102"
                    loading="eager"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 font-bold px-4 py-2 rounded-lg text-xs shadow-md">
                      Click to Expand Image
                    </span>
                  </div>
                </div>

                {/* Sub Caption */}
                <p className="mt-2.5 text-center text-xs font-medium text-gray-500">
                  Non-Woven D-Cut, W-Cut, Stitched & Box Bags Master Collection
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
