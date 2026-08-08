import { BusinessInfo, Product } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "RVM Carry Bags",
  subtitle: "Eco-Friendly Non-Woven Carry Bags Manufacturer & Custom Flexo Printers",
  proprietor: "R. Venu Madhav",
  domain: "rvmcarrybags.com",
  address: "Surmaiguda Village, Abdullapurmet Mandal, Near Ramoji Film City, Hyderabad, RR District – 501512",
  email: "rvmcarrybags@gmail.com",
  phone: "+91 91007 77396",
  whatsapp: "+91 91007 77396",
  gst: "36LAWPK6738E1ZW",
  tagline: "High-Strength Eco-Friendly Carry Bags & Custom Flexo Printing Unit",
  googleMapsUrl: "https://maps.app.goo.gl/BEmTxuA1LzouhoQU8?g_st=iw",
  socials: {
    instagram: "https://instagram.com/rvmcarrybags",
    facebook: "https://facebook.com/rvmcarrybags"
  }
};

export const HERO_IMAGE = "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785571956/M2_mklcji.png";

export const PRODUCTS: Product[] = [
  {
    id: "d-cut-bags",
    name: "D-Cut Carry Bags",
    category: "d-cut",
    categoryLabel: "D-Cut Bags",
    priceDisplay: "₹272 / kg",
    unitPrice: 272,
    unitType: "kg",
    sizes: ["12×16 inches", "12×18 inches", "14×18 inches", "16×20 inches"],
    features: ["Custom Printing Available", "Eco Friendly", "Durable", "High Tensile Strength"],
    description: "Premium Non-Woven D-Cut Carry Bags with ergonomic die-cut handles. Ideal for retail stores, garment showrooms, supermarkets, and promotional brand packaging with vivid custom flexo & screen printing.",
    images: [
      { id: "D1", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569729/D1_ywy2vt.png", caption: "D-Cut Printed Non-Woven Bag - Design 1" },
      { id: "D2", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569730/D2_po225q.png", caption: "D-Cut Printed Non-Woven Bag - Design 2" },
      { id: "D3", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569729/D3_ckuhxk.png", caption: "D-Cut Printed Non-Woven Bag - Design 3" },
      { id: "D4", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569731/D4_pialb6.png", caption: "D-Cut Printed Non-Woven Bag - Design 4" }
    ]
  },
  {
    id: "w-cut-bags",
    name: "W-Cut Carry Bags",
    category: "w-cut",
    categoryLabel: "W-Cut Bags",
    priceDisplay: "₹272 / kg",
    unitPrice: 272,
    unitType: "kg",
    sizes: ["Standard Grocery Sizes", "Medium Retail Sizes", "Large Volume Sizes"],
    features: ["Custom Printing Available", "Eco Friendly", "Durable", "Gusseted Side Design"],
    description: "Versatile Non-Woven W-Cut (Grocery/T-Shirt style) bags designed for high weight capacity and easy transport. Perfect for grocery chains, sweet shops, bakeries, and retail counters.",
    images: [
      { id: "W1", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569726/W1_joua1b.png", caption: "W-Cut Eco Grocery Bag - Variant 1" },
      { id: "W2", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569726/W2_m8uxgh.png", caption: "W-Cut Eco Grocery Bag - Variant 2" },
      { id: "W3", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569728/W3_xc31ep.png", caption: "W-Cut Eco Grocery Bag - Variant 3" },
      { id: "W4", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569727/W4_p0xgnd.png", caption: "W-Cut Eco Grocery Bag - Variant 4" }
    ]
  },
  {
    id: "stitched-bags",
    name: "Stitched Non-Woven Bags",
    category: "stitched",
    categoryLabel: "Stitched Bags",
    priceDisplay: "₹18.50 / piece",
    unitPrice: 18.50,
    unitType: "piece",
    sizes: ["14×17 inches"],
    features: ["Custom Printing Available", "Eco Friendly", "Durable", "Reinforced Handle Stitching"],
    description: "Heavy-duty machine and hand stitched non-woven carry bags featuring sturdy loops for maximum comfort and heavy payload carrying. Excellent for boutiques, corporate gifting, and reusable brand promos.",
    images: [
      { id: "S1", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569730/S1_vcrsby.png", caption: "Stitched Loop Handle Bag - S1" },
      { id: "S2", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569733/S2_onarrp.png", caption: "Stitched Loop Handle Bag - S2" },
      { id: "S3", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569732/S3_ox8sox.png", caption: "Stitched Loop Handle Bag - S3" },
      { id: "S4", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569732/S4_y4upcf.png", caption: "Stitched Loop Handle Bag - S4" },
      { id: "S5", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569725/S5_e8o9bu.png", caption: "Stitched Loop Handle Bag - S5" },
      { id: "S6", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569726/S6_jokeyf.png", caption: "Stitched Loop Handle Bag - S6" },
      { id: "S7", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569728/S7_cpevdu.png", caption: "Stitched Loop Handle Bag - S7" }
    ]
  },
  {
    id: "box-bags",
    name: "3D Box Bags",
    category: "box",
    categoryLabel: "Box Bags",
    priceDisplay: "Contact for Quote",
    unitType: "quote",
    sizes: ["Customized Box Dimensions available on order"],
    features: ["Custom Printing Available", "Eco Friendly", "Strong & Durable", "3D Bottom & Side Gusset"],
    description: "Premium 3D Box Style Non-Woven bags with structured base and side gussets. Specifically engineered for shoe boxes, garment boxes, cake/bakery boxes, and luxury gift hampers.",
    images: [
      { id: "B1", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569728/B1_dgkrpz.png", caption: "3D Box Bag - B1" },
      { id: "B2", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569728/B2_ga624o.png", caption: "3D Box Bag - B2" },
      { id: "B3", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569729/B3_yxofmk.png", caption: "3D Box Bag - B3" },
      { id: "B4", url: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785569731/B4_oztj4k.png", caption: "3D Box Bag - B4" }
    ]
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "100% Virgin Non-Woven Fabric",
    description: "Manufactured using premium grade virgin polypropylene fabric for superior tensile durability, soft touch, and flawless print adhesion.",
    icon: "ShoppingBag"
  },
  {
    title: "Plastic-Ban Compliant",
    description: "100% eco-friendly and reusable non-woven material compliant with all state and national single-use plastic ban directives.",
    icon: "Leaf"
  },
  {
    title: "Precision Flexo Logo Printing",
    description: "In-house automated flexographic and screen printing for crisp, non-fading brand logos, slogans, and multi-color artwork.",
    icon: "Printer"
  },
  {
    title: "Direct Factory Pricing",
    description: "Zero middleman markup. Enjoy factory-direct wholesale rates per kg or piece with transparent GST invoicing.",
    icon: "Tag"
  },
  {
    title: "Heavy Load Payload Tested",
    description: "Reinforced heat-sealed and stitched seam strength tested to hold 15-20 kg of payload safely without tearing.",
    icon: "ShieldCheck"
  },
  {
    title: "Rapid Wholesale Fulfillment",
    description: "High-capacity automated ultrasonic bag making machinery ensuring fast production turnaround and timely dispatch.",
    icon: "Truck"
  }
];
