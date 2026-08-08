import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rajesh Varma",
      role: "Managing Director",
      company: "Royal Garment Mart",
      location: "Abids, Hyderabad",
      serviceType: "D-Cut Custom Printed Bags",
      rating: 5,
      review: "RVM Carry Bags supplies our clothing showroom with custom logo printed D-Cut bags. The print contrast is sharp and fabric strength easily handles heavy suit sets.",
      status: "Verified Client"
    },
    {
      name: "Srinivas Rao",
      role: "General Manager",
      company: "Heritage Sweets & Bakers",
      location: "Koti & Dilsukhnagar",
      serviceType: "W-Cut Grocery Carry Bags",
      rating: 5,
      review: "We order bulk W-Cut grocery bags per kg from RVM. The side gussets are generous and handles never tear even under 15kg load. Excellent factory rate and timely delivery.",
      status: "Verified Client"
    },
    {
      name: "Priya Reddy",
      role: "Founder & Creative Head",
      company: "Aura Silk Boutique",
      location: "Jubilee Hills, Hyderabad",
      serviceType: "3D Box Bags & Branding",
      rating: 5,
      review: "Our customers love the premium 3D Box bags from RVM. The structured bottom gusset keeps saree boxes upright, giving a luxury feel while remaining 100% eco-friendly.",
      status: "Verified Client"
    },
    {
      name: "K. Venkatesh",
      role: "Proprietor",
      company: "Sri Krishna Supermarket",
      location: "LB Nagar, Hyderabad",
      serviceType: "Stitched Non-Woven Bags",
      rating: 5,
      review: "Direct factory wholesale pricing right near Ramoji Film City. They provided sample print proofs, valid GST bills, and hassle-free batch dispatch. Highly recommended!",
      status: "Verified Client"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Client Testimonials"
          badgeVariant="blue"
          title={
            <span>
              Trusted by Hyderabad's <span className="text-blue-600">Leading Retail & Showroom Brands</span>
            </span>
          }
          description="Read verified feedback from garment showrooms, supermarkets, sweet chains, and retail boutiques across Telangana & Andhra Pradesh."
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{rev.name}</h3>
                  <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full border border-blue-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    Verified
                  </span>
                </div>
                
                <p className="text-xs font-semibold text-blue-600">{rev.role}, {rev.company}</p>
                
                <div className="flex items-center gap-1 text-[11px] text-slate-500 pt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{rev.location}</span>
                </div>

                <div className="text-[11px] text-slate-600 font-medium pt-1">
                  Product: <strong className="text-slate-900">{rev.serviceType}</strong>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
