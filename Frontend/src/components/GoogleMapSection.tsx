import React from 'react';
import { MapPin, Navigation, ExternalLink, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const GoogleMapSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-700/50">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Factory Location
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Visit Our Manufacturing Plant
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our factory is strategically located at Surmaiguda Village in Abdullapurmet Mandal, right near Ramoji Film City, Hyderabad. Customers and wholesale distributors are welcome to visit our facility.
            </p>

            <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-200">
                <Building className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium">{BUSINESS_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="lg:col-span-7 h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950 relative">
            <iframe
              title="RVM Carry Bags Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.843657389146!2d78.68000000000002!3d17.300000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb06f15712e5c7%3A0x8be5e381ebf010f3!2sSurmaiguda%2C%20Telangana%20501512!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
