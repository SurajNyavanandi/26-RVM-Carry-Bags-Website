import React, { useEffect } from 'react';
import { X, MessageCircle, Download } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappInquiryUrl = `https://wa.me/919100744177396?text=${encodeURIComponent(
    `Hello RVM Carry Bags, I am inquiring about this bag design sample: ${title}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative max-w-lg w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[95vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-950 p-3 sm:p-4 border-b border-slate-800 flex items-center justify-between gap-3 text-white">
          <div>
            <h3 className="font-bold text-sm sm:text-base text-emerald-400 line-clamp-1">
              {title}
            </h3>
            <p className="text-[11px] text-slate-400">9:16 Uncropped Full Resolution View</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Uncropped 9:16 Image View Container */}
        <div className="p-3 bg-black flex-1 flex items-center justify-center overflow-auto">
          <div className="relative aspect-[9/16] max-h-[70vh] w-auto mx-auto rounded-lg overflow-hidden bg-slate-950">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 p-3 sm:p-4 border-t border-slate-800 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 py-1"
          >
            <Download className="w-4 h-4" />
            <span>Open HD Original</span>
          </a>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Enquire This Design on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
};
