import React from 'react';
import { ShoppingCart, Shirt, Utensils, Gem, Footprints, Store } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  const categories = [
    {
      name: "Supermarkets & Groceries",
      description: "High tensile W-Cut & D-Cut bags for retail volume",
      icon: ShoppingCart,
      count: "150+ Stores"
    },
    {
      name: "Garment & Apparel",
      description: "Custom logo printed D-Cut & Loop handle bags",
      icon: Shirt,
      count: "120+ Showrooms"
    },
    {
      name: "Sweets & Bakeries",
      description: "Heavy weight payload capacity W-Cut & Box bags",
      icon: Utensils,
      count: "80+ Bakeries"
    },
    {
      name: "Boutiques & Retail",
      description: "3D Box Bags with rich multi-color flexo finish",
      icon: Gem,
      count: "90+ Boutiques"
    },
    {
      name: "Footwear Outlets",
      description: "Non-woven shoe box totes & carry bags",
      icon: Footprints,
      count: "65+ Retailers"
    },
    {
      name: "Pharmacies & Retail",
      description: "Compact D-Cut eco bags with custom store branding",
      icon: Store,
      count: "200+ Outlets"
    }
  ];

  return (
    <section className="py-14 bg-slate-950 text-white relative overflow-hidden border-y border-slate-900">
      {/* Subtle Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60 inline-block">
            Sectors We Serve Across Telangana & AP
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trusted Non-Woven Bag Supplier for <span className="text-blue-400">500+ Showrooms & Outlets</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Automated flexographic bag manufacturing facility near Ramoji Film City, Hyderabad.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/80 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-blue-300 font-bold bg-blue-950 px-2 py-0.5 rounded border border-blue-900/80 mb-1">
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
            <div className="text-2xl sm:text-3xl font-black text-blue-400">500+</div>
            <div className="text-xs text-slate-400 font-medium">Active Retail Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">50,000+</div>
            <div className="text-xs text-slate-400 font-medium">Daily Bag Production Capacity</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400">100%</div>
            <div className="text-xs text-slate-400 font-medium">Plastic Ban & GST Compliant</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">₹272 / kg</div>
            <div className="text-xs text-slate-400 font-medium">Direct Factory Wholesale Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};
