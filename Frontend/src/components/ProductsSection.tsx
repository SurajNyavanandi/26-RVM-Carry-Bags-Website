import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { MessageCircle, FileText, Check, ZoomIn, Info, PackageCheck } from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal: (category?: string) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenQuoteModal,
  onOpenLightbox,
  selectedCategoryFilter,
  setSelectedCategoryFilter
}) => {
  const filteredProducts = selectedCategoryFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.id === selectedCategoryFilter);

  const getWhatsAppProductLink = (productName: string) => {
    const text = `Hello RVM Carry Bags, I am interested in inquiring about ${productName}. Please share size options and printing details.`;
    return `https://wa.me/919100777396?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <PackageCheck className="w-3.5 h-3.5 text-emerald-700" />
            Complete Product Catalog
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Non-Woven Bags & Custom Printing
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Browse through our manufactured samples below. Click any bag image to view in high resolution in full 9:16 frame.
          </p>
        </div>

        {/* Category Tab Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCategoryFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategoryFilter === 'all'
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Products ({PRODUCTS.reduce((acc, p) => acc + p.images.length, 0)} Samples)
          </button>
          
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedCategoryFilter(p.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategoryFilter === p.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {p.categoryLabel} ({p.images.length})
            </button>
          ))}
        </div>

        {/* Detailed Product List */}
        <div className="space-y-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              id={product.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Product Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {product.name}
                  </h3>
                  
                  <p className="mt-1 text-sm text-gray-600 max-w-3xl leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Primary CTA */}
                <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-2xl flex flex-col items-start md:items-end shrink-0 min-w-[200px]">
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Manufacturer Price</span>
                  <div className="text-2xl font-black text-emerald-950 mt-0.5">
                    {product.priceDisplay}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    {product.unitType === 'kg' ? '*Minimum Order Quantity applicable' : product.unitType === 'piece' ? '*Per Piece bulk direct price' : '*Custom dimensions pricing'}
                  </span>
                </div>
              </div>

              {/* Sizes Specification Box */}
              <div className="my-5 bg-amber-50/60 border border-amber-200/60 rounded-xl p-3.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-amber-950">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <strong className="font-bold">Available Sizes: </strong>
                  <span>{product.sizes.join(' | ')}</span>
                </div>
              </div>

              {/* Image Gallery Grid (Strictly preserving 9:16 aspect ratio with no cropping) */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                    <span>Design Samples Gallery ({product.images.length})</span>
                    <span className="text-xs font-normal text-gray-500 lowercase">(click image to view full view)</span>
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                  {product.images.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => onOpenLightbox(img.url, `${product.name} - ${img.caption || img.id}`)}
                      className="group relative aspect-[9/16] w-full bg-slate-900 rounded-2xl overflow-hidden cursor-pointer border border-gray-300/80 shadow-xs hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={img.url}
                        alt={img.caption || `${product.name} sample`}
                        className="w-full h-full object-contain bg-slate-900 group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Image Badge */}
                      <div className="absolute top-2 left-2 bg-slate-950/80 text-white font-bold text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                        {img.id}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2 text-center text-white">
                        <ZoomIn className="w-6 h-6 mb-1 text-amber-300" />
                        <span className="text-xs font-bold">Zoom 9:16 Image</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Product */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => onOpenQuoteModal(product.id)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Quote for {product.categoryLabel}</span>
                </button>

                <a
                  href={getWhatsAppProductLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Inquiry for {product.categoryLabel}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
