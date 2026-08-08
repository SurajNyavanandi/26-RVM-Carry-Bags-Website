import React from 'react';
import { PRODUCTS } from '../data/products';
import { ArrowUpRight, CheckCircle, Tag, Layers } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

interface ProductCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenQuoteModal: (categoryId: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ 
  onSelectCategory, 
  onOpenQuoteModal 
}) => {
  return (
    <section id="categories" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Packaging Catalog"
          badgeVariant="blue"
          title={
            <span>
              Direct Manufacturing & <span className="text-blue-600">Printing Portfolio</span>
            </span>
          }
          description="High-tensile non-woven carry bags engineered for strength, elegance, and distinct brand visibility."
        />

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {PRODUCTS.map((product) => {
            const primaryImg = product.images[0]?.url;

            return (
              <div 
                key={product.id}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with 9:16 aspect handling */}
                  <div 
                    onClick={() => onSelectCategory(product.id)}
                    className="relative aspect-[9/16] w-full bg-slate-950 rounded-xl overflow-hidden cursor-pointer mb-4"
                  >
                    <img 
                      src={primaryImg} 
                      alt={`RVM Carry Bags ${product.name} - Custom Logo Flexo Printed Non-Woven Eco Bag`}
                      className="w-full h-full object-contain bg-slate-950 group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute top-2.5 right-2.5 bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Tag className="w-3 h-3 text-blue-200" />
                      <span>{product.priceDisplay}</span>
                    </div>

                    {/* Image Count Badge */}
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                      {product.images.length} High-Res Designs
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Available Sizes preview */}
                  <div className="mt-2 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-800 block">Available Sizes:</span>
                    <p className="text-slate-600 line-clamp-1">{product.sizes.join(', ')}</p>
                  </div>

                  {/* Features list */}
                  <div className="mt-3 space-y-1">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCategory(product.id)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 py-1 cursor-pointer"
                  >
                    <span>View Designs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Button
                    variant="blue"
                    size="sm"
                    onClick={() => onOpenQuoteModal(product.id)}
                  >
                    Get Quote
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

