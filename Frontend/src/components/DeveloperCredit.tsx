import React from 'react';
import { MessageCircle, Link } from 'lucide-react';
import { DEVELOPER_INSTAGRAM_URL, DEVELOPER_LINKEDIN_URL, getDeveloperWhatsAppLink } from '../utils/whatsapp';

export const DeveloperCredit: React.FC = () => {
  return (
    <div className="bg-slate-950 py-3 px-4 border-t border-slate-900 text-center text-xs text-slate-400 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span>Website designed & developed by</span>
          <a 
            href={DEVELOPER_LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-200 font-semibold hover:text-amber-400 underline underline-offset-2 transition-colors"
          >
            Suraj Nyavanandi
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={getDeveloperWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={DEVELOPER_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Link className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>

          <a
            href={DEVELOPER_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Link className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
