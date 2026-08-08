import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { Button } from './ui/Button';

interface CTABannerProps {
  onOpenQuoteModal: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I want to get an instant quote for custom printed carry bags."
  )}`;

  return (
    <section className="py-14 bg-slate-900 text-white relative overflow-hidden my-8 border-y border-slate-800">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-950/90 text-blue-300 border border-blue-800/80 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Direct Factory Manufacturing • Hyderabad</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your <span className="text-blue-400">Retail Brand's Eco Carry Bags?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Calculate instant wholesale rates or connect with our factory team in Surmaiguda near Ramoji Film City for custom flexo logo printed non-woven bags.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>GSTIN: {BUSINESS_INFO.gst}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Base Rate: ₹272 / kg</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Custom Flexo Logo Printing</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Button
              variant="blue"
              size="lg"
              onClick={onOpenQuoteModal}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full shadow-lg shadow-blue-600/30"
            >
              Calculate Rate & Instant Quote
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Direct Line</span>
            </a>

            <div className="text-center pt-1 text-[11px] text-slate-400">
              Direct Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-400 font-bold hover:underline">{BUSINESS_INFO.phone}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
