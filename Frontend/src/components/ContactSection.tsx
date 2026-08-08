import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    bagCategory: 'D-Cut Carry Bags'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappInquireUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    `Hello RVM Carry Bags, my name is ${formData.name || 'Customer'}. I want to inquire about ${formData.bagCategory}. Mobile: ${formData.phone || 'N/A'}. Message: ${formData.message || 'Please send price quote.'}`
  )}`;

  return (
    <section id="contact" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badgeText="Get In Touch"
          badgeVariant="blue"
          title={
            <span>
              Contact RVM <span className="text-blue-600">Factory Office</span>
            </span>
          }
          description="Have questions or need custom carry bag dimensions or logo printing quotations? Connect with our manufacturing team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold tracking-tight border-b border-slate-800 pb-3 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                <span>Direct Factory Order Line</span>
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-blue-950 border border-blue-800/60 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-bold">Factory Phone Line</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-lg text-white hover:text-blue-400 transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-blue-950 border border-blue-800/60 rounded-xl flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-bold">WhatsApp Order Line</span>
                    <a 
                      href={`https://wa.me/919100777396`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-white hover:text-blue-400 transition-colors"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-blue-950 border border-blue-800/60 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-bold">Factory Email</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-sm text-slate-200 hover:text-white transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-blue-950 border border-blue-800/60 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-bold">Factory Facility Address</span>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* GST */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>GSTIN: <strong className="text-white font-mono">{BUSINESS_INFO.gst}</strong></span>
                </div>

              </div>

              {/* Direct CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I want to inquire about non-woven bags.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send Us a Custom Bag Query
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in your bag requirement details below and our sales team will get back to you within 2 business hours.
            </p>

            {formSubmitted ? (
              <div className="bg-white p-8 rounded-2xl border border-blue-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Inquiry Submitted Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for connecting with RVM Carry Bags. We will reach out to you at {formData.phone || 'your phone number'} shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappInquireUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>Connect Directly on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. info@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Bag Category Required
                    </label>
                    <select
                      value={formData.bagCategory}
                      onChange={(e) => setFormData({ ...formData, bagCategory: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="D-Cut Carry Bags">D-Cut Carry Bags (₹272/kg)</option>
                      <option value="W-Cut Carry Bags">W-Cut Grocery Bags (₹272/kg)</option>
                      <option value="Stitched Non-Woven Bags">Stitched Loop Bags (₹18.50/pc)</option>
                      <option value="3D Box Bags">3D Box Style Bags (Custom Quote)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Requirements / Quantity & Custom Printing Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify bag sizes, quantity (kg or pieces), printing colors, store name, or custom design requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button
                    type="submit"
                    variant="blue"
                    size="md"
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Submit Form Inquiry
                  </Button>

                  <a
                    href={whatsappInquireUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 py-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <span>Or Chat Directly on WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
