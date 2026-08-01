import React from 'react';
import { PRODUCTS } from '../data/products';
import { ArrowUpRight, CheckCircle, Tag, Layers } from 'lucide-react';

interface ProductCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenQuoteModal: (categoryId: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ 
  onSelectCategory, 
  onOpenQuoteModal 
}) => {
  return (
    <section id="categories" className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Product Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Core Bag Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            High-quality non-woven carry bags crafted for durability, elegance, and distinct brand visibility across all commercial applications.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const primaryImg = product.images[0]?.url;

            return (
              <div 
                key={product.id}
                className="bg-gray-50/70 rounded-2xl p-4 border border-gray-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with 9:16 aspect handling */}
                  <div 
                    onClick={() => onSelectCategory(product.id)}
                    className="relative aspect-[9/16] w-full bg-slate-900 rounded-xl overflow-hidden cursor-pointer mb-4"
                  >
                    <img 
                      src={primaryImg} 
                      alt={product.name}
                      className="w-full h-full object-contain bg-slate-900 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute top-2.5 right-2.5 bg-emerald-700 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Tag className="w-3 h-3 text-amber-300" />
                      <span>{product.priceDisplay}</span>
                    </div>

                    {/* Image Count Badge */}
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                      {product.images.length} High-Res Designs
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>

                  {/* Available Sizes preview */}
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <span className="font-semibold text-gray-800 block">Available Sizes:</span>
                    <p className="text-gray-600 line-clamp-1">{product.sizes.join(', ')}</p>
                  </div>

                  {/* Features list */}
                  <div className="mt-3 space-y-1">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-3 border-t border-gray-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCategory(product.id)}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 py-1"
                  >
                    <span>View All Images</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(product.id)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                  >
                    Quote
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
