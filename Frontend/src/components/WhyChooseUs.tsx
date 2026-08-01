import React from 'react';
import { ShoppingBag, Leaf, Printer, Recycle, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-700" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-700" />;
      case 'Printer': return <Printer className="w-6 h-6 text-amber-600" />;
      case 'Recycle': return <Recycle className="w-6 h-6 text-emerald-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-600" />;
      default: return <Award className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            Why Partner With RVM
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Superior Manufacturing Standards & Quality
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At RVM Carry Bags, we combine advanced non-woven manufacturing equipment, eco-safe materials, and crisp custom printing to power your brand's packaging.
          </p>
        </div>

        {/* Grid of 6 Key Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50/40 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-400 hover:bg-emerald-50/80 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-emerald-200/80 shadow-xs mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Highlights Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest">
              Direct Factory Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Bulk Wholesale Orders in Hyderabad & Telangana?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get direct factory pricing with fast dispatch and sample proof verification before bulk production.
            </p>
          </div>

          <a
            href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I want to discuss a bulk wholesale manufacturing order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm shrink-0 transition-colors shadow-md"
          >
            Inquire Bulk Rates
          </a>
        </div>

      </div>
    </section>
  );
};
