import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    bagType: 'D-Cut Bags'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappInquireUrl = `https://wa.me/919100777396?text=${encodeURIComponent(
    `Hello RVM Carry Bags, my name is ${formData.name || 'Customer'}. I want to inquire about ${formData.bagType}. Mobile: ${formData.phone || 'N/A'}. Message: ${formData.message || 'Please send catalog.'}`
  )}`;

  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact RVM Carry Bags
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Have questions or need custom printing quotation? Call or message our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-emerald-800 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold tracking-tight border-b border-emerald-800 pb-3">
                Factory Direct Contact
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block uppercase font-bold">Phone / Direct Line</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-lg text-white hover:text-amber-300 transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 text-emerald-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block uppercase font-bold">WhatsApp Orders</span>
                    <a 
                      href={`https://wa.me/919100777396`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-white hover:text-amber-300 transition-colors"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block uppercase font-bold">Email Address</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-sm text-emerald-100 hover:text-white transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block uppercase font-bold">Manufacturing Address</span>
                    <p className="text-xs text-emerald-100 leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* GST */}
                <div className="flex items-center gap-2 pt-2 border-t border-emerald-800/80 text-xs text-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>GSTIN: <strong className="text-white font-mono">{BUSINESS_INFO.gst}</strong></span>
                </div>

              </div>

              {/* Direct CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/919100777396?text=${encodeURIComponent("Hello RVM Carry Bags, I want to inquire about bag manufacturing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Fill in your inquiry details below and our sales representative will respond within 2 business hours.
            </p>

            {formSubmitted ? (
              <div className="bg-white p-8 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for reaching out to RVM Carry Bags. We will contact you at {formData.phone || 'your phone number'} shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappInquireUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>Or Connect Instantly on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. info@mybusiness.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Bag Category Interest
                    </label>
                    <select
                      value={formData.bagType}
                      onChange={(e) => setFormData({ ...formData, bagType: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="D-Cut Bags">D-Cut Carry Bags (₹272/kg)</option>
                      <option value="W-Cut Bags">W-Cut Grocery Bags (₹272/kg)</option>
                      <option value="Stitched Bags">Stitched Loop Handle Bags (₹18.50/pc)</option>
                      <option value="Box Bags">3D Box Bags (Custom Quote)</option>
                      <option value="General Inquiry">General Manufacturing Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Your Message / Custom Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify sizes needed, estimated quantity (kg/pcs), or custom printing text..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Contact Form</span>
                  </button>

                  <a
                    href={whatsappInquireUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 py-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Or Chat on WhatsApp</span>
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
