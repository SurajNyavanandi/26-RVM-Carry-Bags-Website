import React from 'react';
import { Globe, MessageCircle, Link, ExternalLink, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_INSTAGRAM_URL, DEVELOPER_LINKEDIN_URL, getDeveloperWhatsAppLink } from '../utils/whatsapp';

export const WebsitePromoSection: React.FC = () => {
  const whatsappUrl = getDeveloperWhatsAppLink();

  return (
    <section className="bg-slate-900 border-t border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle blue ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-950 text-blue-400 border border-blue-800/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Web Development & Digital Presence</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Need a Custom Website for Your Business like <span className="text-blue-400">RVM Corporate Solutions?</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Get a high-performance, ultra-minimal, mobile-first website tailored for your enterprise. Showcase services, generate leads, and integrate instant WhatsApp inquiries.
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Ultra-Fast SaaS Design</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>WhatsApp Lead Funnel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>SEO & Performance Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Clean Mobile-First Layout</span>
                </div>
              </div>
            </div>

            {/* Right CTAs / Developer Card */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3.5 flex flex-col justify-center">
              <div className="text-center lg:text-left border-b border-slate-800 pb-3">
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Web Developer</div>
                <div className="text-base font-extrabold text-white pt-0.5">Suraj Nyavanandi</div>
                <div className="text-xs text-blue-400 font-medium">Full Stack Web Developer</div>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={DEVELOPER_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-pink-300 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Link className="w-4 h-4 text-pink-400" />
                  <span>Instagram Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
                </a>

                <a
                  href={DEVELOPER_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Link className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

