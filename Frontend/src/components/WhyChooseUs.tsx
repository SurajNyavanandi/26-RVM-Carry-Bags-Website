import React from 'react';
import { ShoppingBag, Leaf, Printer, Tag, ShieldCheck, Truck, Award } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/products';
import { SectionHeader } from './ui/SectionHeader';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-600" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-blue-600" />;
      case 'Printer': return <Printer className="w-5 h-5 text-blue-600" />;
      case 'Tag': return <Tag className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-blue-600" />;
      default: return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badgeText="Why Partner With RVM Carry Bags"
          badgeVariant="blue"
          title={
            <span>
              Unmatched Manufacturing Quality & <span className="text-blue-600">Factory Direct Pricing</span>
            </span>
          }
          description="We combine 100% virgin non-woven fabric, high-precision automated flexographic logo printing, and wholesale factory pricing under one roof."
        />

        {/* Grid of 6 Key Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200/80 shadow-xs mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Highlights Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Direct Wholesale Factory Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Planning Bulk Non-Woven Bag Procurement for Your Retail Chain?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get direct factory pricing starting at ₹272/kg with free brand logo print proof before bulk production.
            </p>
          </div>

          <a
            href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I want to inquire about bulk non-woven carry bag orders.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm shrink-0 transition-colors shadow-md shadow-blue-600/30 cursor-pointer"
          >
            Inquire Bulk Order
          </a>
        </div>

      </div>
    </section>
  );
};
