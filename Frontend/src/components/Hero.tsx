import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, ShoppingBag, Factory, Tag } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/products';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenLightbox }) => {
  const whatsappUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I would like to inquire about wholesale non-woven carry bags and custom logo flexo printing."
  )}`;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/40 via-white to-white py-12 sm:py-20 overflow-hidden border-b border-slate-100">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge with Vertical Line Accent */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <span className="w-1 h-3.5 bg-blue-600 rounded-full shrink-0" />
              <span>Direct Factory Manufacturer • Custom Flexo Printing • Hyderabad</span>
            </div>

            {/* Razorpay Inspired High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              High-Strength Eco-Friendly <span className="text-blue-600">Carry Bags</span> with Custom Brand Printing.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Wholesale non-woven D-Cut, W-Cut, Stitched, and 3D Box Carry Bags manufactured using 100% virgin polypropylene. Direct factory rates, high payload capacity, and vibrant custom logo flexo printing.
            </p>

            {/* Key Value Bullets in Clean Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Direct Factory Rates</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Custom Flexo Logo</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Plastic-Ban Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Heavy Load Tested</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Virgin Material</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>GST Tax Invoice</span>
              </div>
            </div>

            {/* Primary Action Buttons (Razorpay Inspired) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Button
                variant="blue"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto shadow-md shadow-blue-600/20"
              >
                Calculate Rate & Instant Quote
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center font-bold rounded-2xl py-3.5 px-6 text-base gap-2.5 bg-white text-slate-800 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Order Line</span>
              </a>
            </div>

            {/* Trust bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>GSTIN: <strong className="text-slate-800 font-semibold">{BUSINESS_INFO.gst}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Factory className="w-4 h-4 text-blue-600" />
                <span>Proprietor: <strong className="text-slate-800 font-semibold">{BUSINESS_INFO.proprietor}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-blue-600" />
                <span>Wholesale Base Rate: <strong className="text-blue-700 font-semibold">₹272 / kg</strong></span>
              </div>
            </div>

          </div>

          {/* Right Showcase Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Subtle blue accent glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-md opacity-20 group-hover:opacity-35 transition duration-300" />

              {/* Main Showcase Card */}
              <div className="relative bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    RVM Factory Manufacturing Unit
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Surmaiguda, Hyd
                  </span>
                </div>

                {/* Main Showcase Container displaying 9:16 banner */}
                <div 
                  onClick={() => onOpenLightbox(HERO_IMAGE, "RVM Carry Bags Factory Showcase")}
                  className="relative aspect-[9/16] w-full bg-slate-900 rounded-xl overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={HERO_IMAGE}
                    alt="RVM Carry Bags Custom Non-Woven Bag Manufacturing Unit & Catalog Showcase Hyderabad"
                    className="w-full h-full object-contain bg-slate-950 transition-transform duration-500 group-hover/img:scale-102"
                    loading="eager"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold px-4 py-2 rounded-xl text-xs shadow-md">
                      Click to Enlarge Catalog Banner
                    </span>
                  </div>
                </div>

                {/* Sub Caption */}
                <div className="mt-3 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl text-center">
                  <p className="text-xs font-semibold text-slate-800">
                    D-Cut • W-Cut • Stitched Loop • 3D Box Non-Woven Bags
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
