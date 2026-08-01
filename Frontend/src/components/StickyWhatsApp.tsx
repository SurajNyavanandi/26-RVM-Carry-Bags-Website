import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const StickyWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    "Hello RVM Carry Bags, I would like to inquire about non-woven printed bags."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg animate-in fade-in duration-200">
        Chat with RVM (+91 91007 77396)
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white fill-white/20" />
      </a>

    </div>
  );
};
