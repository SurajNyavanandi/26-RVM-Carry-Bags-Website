import React from 'react';
import { PRODUCTS } from '../data/products';
import { MessageCircle, FileText, Check, ZoomIn, Info, PackageCheck } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

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
    <section id="products" className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Custom Print Catalog"
          badgeVariant="blue"
          title={
            <span>
              Detailed Product & <span className="text-blue-600">Sample Specifications</span>
            </span>
          }
          description="Browse manufactured high-resolution sample bags below. Click any sample image to view in full 9:16 frame."
        />

        {/* Category Tab Filter Bar - Horizontal Scroll on Mobile */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar mt-6 mb-8 w-full">
          <button
            onClick={() => setSelectedCategoryFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              selectedCategoryFilter === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Products ({PRODUCTS.reduce((acc, p) => acc + p.images.length, 0)} Samples)
          </button>
          
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedCategoryFilter(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategoryFilter === p.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Product Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200/80 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3 text-blue-600" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {product.name}
                  </h3>
                  
                  <p className="mt-1 text-sm text-slate-600 max-w-3xl leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Primary CTA */}
                <div className="bg-blue-50/60 border border-blue-200/60 p-4 rounded-2xl flex flex-col items-start md:items-end shrink-0 min-w-[200px]">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Factory Wholesale Price</span>
                  <div className="text-2xl font-black text-slate-900 mt-0.5">
                    {product.priceDisplay}
                  </div>
                  <span className="text-[11px] text-blue-700 font-medium">
                    {product.unitType === 'kg' ? '*Minimum Order Quantity applies' : product.unitType === 'piece' ? '*Per Piece bulk direct price' : '*Custom dimensions pricing'}
                  </span>
                </div>
              </div>

              {/* Sizes Specification Box */}
              <div className="my-5 bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-800">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <strong className="font-bold">Available Sizes: </strong>
                  <span>{product.sizes.join(' | ')}</span>
                </div>
              </div>

              {/* Image Gallery Grid */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <span>Design Samples Gallery ({product.images.length})</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(click image to view full 9:16 frame)</span>
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                  {product.images.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => onOpenLightbox(img.url, `${product.name} - ${img.caption || img.id}`)}
                      className="group relative aspect-[9/16] w-full bg-slate-950 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={img.url}
                        alt={img.caption ? `RVM Carry Bags - ${img.caption} Sample` : `RVM Carry Bags ${product.name} Custom Flexo Printed Non-Woven Bag Sample`}
                        className="w-full h-full object-contain bg-slate-950 group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Image Badge */}
                      <div className="absolute top-2 left-2 bg-slate-900/90 text-white font-bold text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                        {img.id}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2 text-center text-white">
                        <ZoomIn className="w-6 h-6 mb-1 text-white" />
                        <span className="text-xs font-bold">Zoom 9:16 Image</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Product */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Button
                  variant="blue"
                  onClick={() => onOpenQuoteModal(product.id)}
                  icon={<FileText className="w-4 h-4" />}
                >
                  Get Quote for {product.categoryLabel}
                </Button>

                <a
                  href={getWhatsAppProductLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

