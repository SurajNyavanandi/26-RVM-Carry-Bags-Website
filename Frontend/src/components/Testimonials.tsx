import React from 'react';
import { Star, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rajesh Varma",
      role: "Managing Director",
      company: "Royal Garment Mart",
      location: "Abids, Hyderabad",
      bagType: "Custom D-Cut Printed Bags",
      rating: 5,
      review: "RVM Carry Bags has been supplying our clothing showroom with custom logo printed D-Cut bags for over two years. The print contrast is sharp and the fabric handle strength easily accommodates heavy suit sets.",
      date: "Verified Wholesale Buyer"
    },
    {
      name: "Srinivas Rao",
      role: "General Manager",
      company: "Heritage Sweets & Bakers",
      location: "Koti & Dilsukhnagar",
      bagType: "W-Cut Grocery Bags",
      rating: 5,
      review: "We order W-Cut bags in bulk for our sweet boxes. RVM delivers every order on time with precise color matching for our brand red ink. Their direct factory pricing gives us great cost savings.",
      date: "Verified Wholesale Buyer"
    },
    {
      name: "Priya Reddy",
      role: "Founder & Creative Head",
      company: "Aura Silk Boutique",
      location: "Jubilee Hills, Hyderabad",
      bagType: "3D Box Bags",
      rating: 5,
      review: "Our customers love the premium 3D Box bags from RVM. The structured bottom gusset keeps saree and gift boxes upright, giving a luxury feel while remaining 100% eco-friendly.",
      date: "Verified Wholesale Buyer"
    },
    {
      name: "K. Venkatesh",
      role: "Proprietor",
      company: "Sri Krishna Supermarket",
      location: "LB Nagar, Hyderabad",
      bagType: "W-Cut & Stitched Bags",
      rating: 5,
      review: "Very dependable manufacturer near Ramoji Film City. They provide valid GST bills, reliable batch quality, and fast local dispatch across RR district.",
      date: "Verified Wholesale Buyer"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-emerald-700" />
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Hyderabad Businesses Say About RVM
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Read real feedback from retail store owners, garment showrooms, and supermarket managers across Hyderabad and Telangana.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-gray-100 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{rev.name}</h3>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-extrabold px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
                
                <p className="text-xs font-medium text-emerald-900">{rev.role}, {rev.company}</p>
                
                <div className="flex items-center gap-1 text-[11px] text-gray-500 pt-0.5">
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>{rev.location}</span>
                </div>

                <div className="text-[11px] text-amber-700 font-semibold pt-1">
                  Bag Order: {rev.bagType}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
