export interface ProductImage {
  id: string;
  url: string;
  caption?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'd-cut' | 'w-cut' | 'stitched' | 'box';
  categoryLabel: string;
  priceDisplay: string;
  unitPrice?: number;
  unitType: 'kg' | 'piece' | 'quote';
  sizes: string[];
  features: string[];
  images: ProductImage[];
  description: string;
}

export interface BusinessInfo {
  name: string;
  subtitle: string;
  proprietor: string;
  domain: string;
  address: string;
  email: string;
  phone: string;
  whatsapp: string;
  gst: string;
  tagline: string;
  googleMapsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
  };
}

export interface QuoteFormData {
  bagCategory: string;
  bagSize: string;
  quantity: string;
  printingType: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes: string;
}
