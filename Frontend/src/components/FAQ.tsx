import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ) for custom printed carry bags?",
      a: "For D-Cut and W-Cut bags sold by weight (₹272/kg), our standard minimum order quantity starts from 50 kg for custom flexo single-color printing. For Stitched bags (₹18.50/piece), MOQ starts at 500 pieces."
    },
    {
      q: "Are non-woven carry bags 100% compliant with plastic ban regulations?",
      a: "Yes. All RVM non-woven carry bags are manufactured using 100% recyclable polypropylene spunbond fabric that complies with state and central single-use plastic ban directives."
    },
    {
      q: "Can you print custom brand logos, slogans, and store contact numbers?",
      a: "Yes! We offer in-house single-color, dual-color, and multi-color flexographic printing. Simply send us your artwork or logo text on WhatsApp, and we will prepare a digital proof prior to bulk printing."
    },
    {
      q: "How much weight payload can these non-woven bags hold safely?",
      a: "Our D-Cut and W-Cut bags support 8kg to 12kg payloads depending on fabric GSM. Heavy-duty Stitched Loop bags and 3D Box bags are reinforced to hold 15kg to 20kg safely."
    },
    {
      q: "How long does custom non-woven bag production and dispatch take?",
      a: "Standard custom printed batch production takes 3 to 5 business days after graphic proof approval. Local dispatches across Hyderabad and Rangareddy district can be coordinated upon request."
    },
    {
      q: "Do you provide official GST invoices for all wholesale orders?",
      a: "Yes, RVM Carry Bags is a GST registered corporate entity (GSTIN: 36LAWPK6738E1ZW). Official GST tax invoices are provided for all commercial orders and bulk shipments."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Got Questions?"
          badgeVariant="blue"
          title={
            <span>
              Frequently Asked <span className="text-blue-600">Questions</span>
            </span>
          }
          description="Everything you need to know about wholesale carry bag ordering, custom flexo printing, weight capacity, and dispatch."
        />

        {/* Accordion List */}
        <div className="space-y-3 mt-10">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-colors bg-white shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-blue-50/40 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Have specific bag design or size requirements?</h3>
            <p className="text-xs text-slate-600">Connect directly with our manufacturing team on WhatsApp.</p>
          </div>
          
          <a
            href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I have a question regarding non-woven bag customization.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
