import React from 'react';
import { MessageCircle, FileText, CheckCircle2, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface CTABannerProps {
  onOpenQuoteModal: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I want to get an instant quote for custom non-woven bags."
  )}`;

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white relative overflow-hidden my-6 border-y border-emerald-800/80">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Factory Orders • Hyderabad & Telangana</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your Retail Packaging with <span className="text-amber-400">Custom Printed Carry Bags?</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Get direct factory pricing, crisp multi-color flexo printing, and fast dispatch from our Surmaiguda facility near Ramoji Film City.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-emerald-200 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>GST Registered: {BUSINESS_INFO.gst}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>D-Cut & W-Cut @ ₹272/kg</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Stitched Bags @ ₹18.50/pc</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={onOpenQuoteModal}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all transform active:scale-98"
            >
              <FileText className="w-5 h-5 text-slate-950" />
              <span>Calculate & Request Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Instant WhatsApp Inquiry</span>
            </a>

            <div className="text-center pt-1 text-[11px] text-slate-400">
              Or call direct: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-400 font-bold hover:underline">{BUSINESS_INFO.phone}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
