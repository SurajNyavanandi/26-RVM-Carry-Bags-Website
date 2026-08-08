import React from 'react';
import { Factory, CheckCircle, MapPin, Award, UserCheck, Scale, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-blue-600" />
              <span>About RVM Carry Bags</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Leading Manufacturer of <span className="text-blue-600">Eco-Friendly Non-Woven Bags</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Founded under the visionary leadership of proprietor <strong className="text-slate-900">{BUSINESS_INFO.proprietor}</strong>, <strong className="text-blue-900">RVM Carry Bags</strong> is a premier manufacturer and automated flexographic printer of non-woven packaging bags in Hyderabad, Telangana.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Operating from our state-of-the-art facility in Surmaiguda near Ramoji Film City, we produce high-tensile D-Cut, W-Cut, Stitched Loop, and 3D Box bags designed for retail showrooms, supermarkets, boutiques, and sweet chains across South India.
            </p>

            {/* Quality Commitment Highlights */}
            <div className="pt-2 space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">100% Virgin Spunbond Material: </strong>
                  <span>Top-grade polypropylene fabric ensuring maximum bursting strength and sharp, non-fading flexographic print resolution.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Ultrasonic Sealing Technology: </strong>
                  <span>Heavy-duty automated machine stitching and ultrasonic seam bonding capable of holding 15-20 kg payloads.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">GST Registered Factory: </strong>
                  <span>Transparent wholesale invoicing with valid GST documentation for all commercial orders and bulk shipments.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              
              <div className="border-b border-slate-200/80 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Factory Record & GST Details</span>
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold">Proprietor Name</span>
                    <span className="font-semibold text-slate-900">{BUSINESS_INFO.proprietor}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold">GST Identification Number</span>
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs border border-blue-200 inline-block mt-0.5">
                      {BUSINESS_INFO.gst}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold">Factory Facility Address</span>
                    <span className="text-slate-700 text-xs leading-snug block mt-0.5">
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
                  className="w-full bg-white hover:bg-blue-50 text-blue-700 font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-blue-200 transition-colors shadow-2xs"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
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
