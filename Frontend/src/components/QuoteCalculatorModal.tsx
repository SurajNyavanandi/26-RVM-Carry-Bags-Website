import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { Button } from './ui/Button';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  initialCategory,
  onClose
}) => {
  const [selectedCatId, setSelectedCatId] = useState(initialCategory || 'd-cut-bags');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState<number>(50); // 50kg or 500 pcs default
  const [printingOption, setPrintingOption] = useState('Single Color Both Sides');
  
  // Customer details
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCatId(initialCategory);
    }
  }, [initialCategory]);

  const activeProduct = PRODUCTS.find(p => p.id === selectedCatId) || PRODUCTS[0];

  useEffect(() => {
    if (activeProduct && activeProduct.sizes.length > 0) {
      setSelectedSize(activeProduct.sizes[0]);
    }
  }, [selectedCatId]);

  if (!isOpen) return null;

  // Estimation logic
  let estimatedTotal = 0;
  let unitText = '';

  if (activeProduct.unitType === 'kg') {
    estimatedTotal = (activeProduct.unitPrice || 272) * quantity;
    unitText = `${quantity} Kg`;
  } else if (activeProduct.unitType === 'piece') {
    estimatedTotal = (activeProduct.unitPrice || 18.5) * quantity;
    unitText = `${quantity} Pieces`;
  } else {
    estimatedTotal = 0;
    unitText = `${quantity} Units`;
  }

  const handleWhatsAppSend = () => {
    const text = 
      `*RVM CARRY BAGS - QUOTATION REQUEST*\n\n` +
      `*Category:* ${activeProduct.name}\n` +
      `*Selected Size:* ${selectedSize}\n` +
      `*Quantity Requirement:* ${unitText}\n` +
      `*Printing Requirement:* ${printingOption}\n` +
      (estimatedTotal > 0 ? `*Estimated Total Rate:* ₹${estimatedTotal.toLocaleString('en-IN')}\n` : `*Rate:* Contact for custom box quote\n`) +
      `\n*Customer Info:*\n` +
      `Name: ${customerName || 'Customer'}\n` +
      `Phone: ${customerPhone || 'Not provided'}\n` +
      `Email: ${customerEmail || 'Not provided'}\n` +
      `Notes/Branding: ${notes || 'Standard custom requirement'}\n\n` +
      `Please confirm quote and delivery timeframe.`;

    const url = `https://wa.me/919100777396?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                Instant Price Estimator & Quote
              </h3>
              <p className="text-xs text-slate-400">
                RVM Carry Bags — Direct Factory Rates
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Quote Request Received!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{customerName}</strong>. Our team will contact you at <strong className="text-slate-900">{customerPhone}</strong> shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="blue"
                size="md"
                onClick={handleWhatsAppSend}
                icon={<MessageCircle className="w-4 h-4 text-emerald-300" />}
              >
                Send via WhatsApp
              </Button>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitForm} className="p-5 sm:p-6 space-y-5 overflow-y-auto">
            
            {/* Step 1: Select Bag Category */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1.5">
                1. Select Product Category:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRODUCTS.map(p => (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setSelectedCatId(p.id)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${
                      selectedCatId === p.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div>{p.categoryLabel}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{p.priceDisplay}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1.5">
                  2. Select Size:
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {activeProduct.sizes.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1.5">
                  3. Quantity ({activeProduct.unitType === 'kg' ? 'in Kilograms' : 'in Pieces'}):
                </label>
                <input
                  type="number"
                  min={10}
                  step={activeProduct.unitType === 'kg' ? 5 : 50}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

            </div>

            {/* Step 3: Printing Option */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1.5">
                4. Custom Brand Printing Option:
              </label>
              <select
                value={printingOption}
                onChange={(e) => setPrintingOption(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Single Color Both Sides">Single Color Flexo Printing (Front & Back)</option>
                <option value="Dual Color Printing">Dual Color Printing (Vibrant Dual Tone)</option>
                <option value="Multi-Color Customized Logo">Full Multi-Color Screen / Process Printing</option>
                <option value="Plain Unprinted Bag">Plain Unprinted Bags</option>
              </select>
            </div>

            {/* Estimated Total Display */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-blue-800 tracking-wider">Estimated Basic Rate:</span>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  {estimatedTotal > 0 ? `₹${estimatedTotal.toLocaleString('en-IN')}` : 'Custom Box Rate'}
                </div>
                <div className="text-[11px] text-slate-600">
                  Includes manufacturing and basic custom printing setup.
                </div>
              </div>
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>

            {/* Customer Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-extrabold uppercase text-slate-700">
                5. Your Contact Information:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name / Business Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />

                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={2}
                placeholder="Logo text, specific color code, or project notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Send to WhatsApp</span>
              </button>

              <Button
                type="submit"
                variant="blue"
                size="md"
                icon={<Send className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Submit Quote Request
              </Button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
};
