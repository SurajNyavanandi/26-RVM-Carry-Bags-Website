import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, FileText } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ) for custom printed carry bags?",
      a: "For D-Cut and W-Cut bags sold by weight (₹272/kg), our standard minimum order quantity starts from 50 kg for custom flexo single-color printing. For Stitched bags (₹18.50/piece), MOQ starts at 500 pieces."
    },
    {
      q: "What custom printing options do you provide?",
      a: "We offer high-definition Flexographic printing and Screen printing. Options include Single Color (front & back), Dual Tone, Multi-Color custom logo printing, or Plain unprinted bags."
    },
    {
      q: "How long does manufacturing and delivery take in Hyderabad?",
      a: "Standard custom printed production takes 3 to 5 business days after graphic proof approval. Emergency/express dispatches across Hyderabad and Rangareddy district can be coordinated upon request."
    },
    {
      q: "Can I inspect a sample or design proof before bulk production?",
      a: "Yes! We share a digital artwork mock-up showing bag dimensions, logo scaling, and color position for your approval before starting the printing press."
    },
    {
      q: "Are non-woven carry bags 100% compliant with plastic bans?",
      a: "Yes. Our non-woven carry bags are manufactured using 100% virgin spunbond polypropylene fabric, which is reusable, recyclable, and compliant with environmental standards."
    },
    {
      q: "What payload weight capacity can D-Cut and W-Cut bags support?",
      a: "Depending on fabric GSM and handle style, D-Cut bags comfortably hold 3 kg to 8 kg, while W-Cut and Stitched Loop bags support up to 10 kg to 18 kg payload."
    },
    {
      q: "Do you provide GST invoices for corporate orders?",
      a: "Yes, RVM Carry Bags is a GST registered manufacturing unit (GSTIN: 36LAWPK6738E1ZW). Official GST invoices are provided with every wholesale dispatch."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about custom non-woven bag orders, MOQ, printing, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors bg-white shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-emerald-50/50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-700" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Still have questions regarding your order?</h3>
            <p className="text-xs text-gray-600">Our customer team is available on WhatsApp or phone to guide you.</p>
          </div>
          
          <a
            href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I have a question regarding non-woven bag custom ordering.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
