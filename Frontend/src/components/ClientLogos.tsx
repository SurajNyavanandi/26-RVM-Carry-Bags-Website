import React from 'react';
import { Store, ShoppingCart, Shirt, Utensils, Gem, Footprints, ShieldCheck } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  const categories = [
    {
      name: "Supermarkets & Groceries",
      description: "High tensile W-Cut & D-Cut bags for daily retail volume",
      icon: ShoppingCart,
      count: "150+ Stores"
    },
    {
      name: "Garment & Apparel Showrooms",
      description: "Custom logo printed D-Cut & Loop handle bags",
      icon: Shirt,
      count: "120+ Showrooms"
    },
    {
      name: "Sweets & Bakery Chains",
      description: "Heavy weight payload capacity W-Cut & Box bags",
      icon: Utensils,
      count: "80+ Bakeries"
    },
    {
      name: "Boutiques & Luxury Retail",
      description: "3D Box Bags with rich multi-color finish",
      icon: Gem,
      count: "90+ Boutiques"
    },
    {
      name: "Footwear & Shoe Stores",
      description: "Custom sized non-woven shoe boxes & tote carry bags",
      icon: Footprints,
      count: "65+ Retailers"
    },
    {
      name: "Commercial & Retail Outlets",
      description: "General retail packaging across Hyderabad & Telangana",
      icon: Store,
      count: "200+ Outlets"
    }
  ];

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-900/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60 inline-block">
            Industries We Serve Across Hyderabad & Telangana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trusted Packaging Partner for Leading Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            From retail chains to luxury boutiques, RVM Carry Bags manufactures customized non-woven bags tailored for every business vertical.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-emerald-500 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900/80 mb-1">
                  {cat.count}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight hidden sm:block">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">500+</div>
            <div className="text-xs text-slate-400 font-medium">Hyderabad Retail Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">50,000+</div>
            <div className="text-xs text-slate-400 font-medium">Bags Daily Capacity</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
            <div className="text-xs text-slate-400 font-medium">Plastic Ban Compliant</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">GST</div>
            <div className="text-xs text-slate-400 font-medium">Verified Invoice Orders</div>
          </div>
        </div>

      </div>
    </section>
  );
};
