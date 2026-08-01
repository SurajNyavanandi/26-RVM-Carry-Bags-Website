import React from 'react';
import { Factory, ShieldAlert, CheckCircle, MapPin, Award, UserCheck, Scale } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-emerald-700" />
              About Our Factory
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              RVM Manufacturers & Printers
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Founded under the vision of proprietor <strong className="text-slate-900">{BUSINESS_INFO.proprietor}</strong>, <strong className="text-emerald-950">RVM Carry Bags</strong> has established itself as one of Hyderabad’s premier manufacturers and custom printers of eco-friendly non-woven carry bags.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Located at Surmaiguda Village near Ramoji Film City, our state-of-the-art production facility houses high-speed automatic bag-making machinery, ultrasonic loop sealing units, and precision multi-color flexographic printing presses. We engineer bags that combine high payload strength with eye-catching brand representation.
            </p>

            {/* Quality Commitment Highlights */}
            <div className="pt-2 space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">100% Virgin Non-Woven Material: </strong>
                  <span>We use top-grade spunbond polypropylene fabric ensuring maximum bursting strength and smooth surface for sharp print resolution.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Eco-Friendly & Plastic Ban Compliant: </strong>
                  <span>Our bags conform strictly to governmental environmental standards, providing retailers and brands a legal, eco-conscious alternative to single-use plastics.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Complete Custom Branding Support: </strong>
                  <span>From logo placement and custom colors to specific dimensional bag tailoring, our graphics team ensures your brand identity shines.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl space-y-6">
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Factory & Business Overview</span>
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500 block uppercase font-bold">Proprietor Name</span>
                    <span className="font-semibold text-slate-900">{BUSINESS_INFO.proprietor}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500 block uppercase font-bold">GST Identification Number</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs border border-emerald-200 inline-block mt-0.5">
                      {BUSINESS_INFO.gst}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500 block uppercase font-bold">Factory Address</span>
                    <span className="text-gray-700 leading-snug block mt-0.5">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Open Factory Location on Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
