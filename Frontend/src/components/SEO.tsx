import React, { useEffect } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';

interface SEOProps {
  selectedCategoryFilter?: string;
  activeModalCategory?: string;
}

export const SEO: React.FC<SEOProps> = ({ selectedCategoryFilter, activeModalCategory }) => {
  useEffect(() => {
    const domain = `https://${BUSINESS_INFO.domain}`;
    let title = "RVM Carry Bags | Custom Non-Woven Bag Manufacturer Hyderabad";
    let description = "Leading manufacturer & printer of eco-friendly non-woven D-Cut, W-Cut, stitched loop, and 3D box carry bags in Hyderabad & Telangana. Direct factory pricing, custom flexo logo printing, GST invoices.";
    let canonicalUrl = `${domain}/`;
    let ogImage = "https://res.cloudinary.com/dfr0zghtc/image/upload/v1785571956/M2_mklcji.png";

    // Customize meta tags if a specific product category filter is selected
    if (selectedCategoryFilter && selectedCategoryFilter !== 'all') {
      const activeProd = PRODUCTS.find(p => p.id === selectedCategoryFilter);
      if (activeProd) {
        title = `${activeProd.name} Wholesale Hyderabad | RVM Carry Bags Direct Factory`;
        description = `${activeProd.description} Price: ${activeProd.priceDisplay}. Custom flexo brand logo printing available across Telangana & Andhra Pradesh.`;
        canonicalUrl = `${domain}/#${activeProd.id}`;
        if (activeProd.images.length > 0) {
          ogImage = activeProd.images[0].url;
        }
      }
    }

    // Update document title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${selector}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set canonical link
    const setCanonicalLink = (url: string) => {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // Standard Meta Tags
    setMetaTag('name', 'name', 'description', description);
    setMetaTag('name', 'name', 'keywords', 'RVM Carry Bags, rvmcarrybags.com, non woven bags Hyderabad, carry bag manufacturers Hyderabad, custom printed bags, D cut bags, W cut bags, 3D box bags, stitched non woven bags, eco friendly bags Telangana, Abdullapurmet bag factory');
    setMetaTag('name', 'name', 'robots', 'index, follow, max-image-preview:large');
    
    // Canonical Link
    setCanonicalLink(canonicalUrl);

    // Open Graph
    setMetaTag('property', 'property', 'og:title', title);
    setMetaTag('property', 'property', 'og:description', description);
    setMetaTag('property', 'property', 'og:url', canonicalUrl);
    setMetaTag('property', 'property', 'og:image', ogImage);
    setMetaTag('property', 'property', 'og:type', 'website');
    setMetaTag('property', 'property', 'og:site_name', BUSINESS_INFO.name);

    // Twitter Card
    setMetaTag('name', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'name', 'twitter:title', title);
    setMetaTag('name', 'name', 'twitter:description', description);
    setMetaTag('name', 'name', 'twitter:image', ogImage);

    // Inject / Update JSON-LD Structured Data
    const injectJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaObj, null, 2);
    };

    // 1. Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Manufacturer"],
      "name": BUSINESS_INFO.name,
      "alternateName": "RVM Carry Bag Manufacturers & Flexo Printers",
      "description": "Direct factory manufacturer of non-woven D-Cut, W-Cut, stitched loop, and 3D box carry bags in Surmaiguda near Ramoji Film City, Hyderabad.",
      "image": ogImage,
      "@id": domain,
      "url": domain,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "priceRange": "₹18.50 - ₹272",
      "vatID": BUSINESS_INFO.gst,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Surmaiguda Village, Abdullapurmet Mandal, Near Ramoji Film City",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "501512",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.2912,
        "longitude": 78.6811
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
        BUSINESS_INFO.socials.instagram,
        BUSINESS_INFO.socials.facebook
      ]
    };
    injectJsonLd('jsonld-business', localBusinessSchema);

    // 2. Product Catalog ItemList Schema
    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "RVM Carry Bags Product Catalog",
      "description": "Non-woven eco bags manufactured by RVM Carry Bags in Hyderabad",
      "itemListElement": PRODUCTS.map((prod, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": prod.name,
          "description": prod.description,
          "category": prod.categoryLabel,
          "image": prod.images[0]?.url || ogImage,
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "price": prod.unitPrice ? prod.unitPrice : 272,
            "priceValidUntil": "2027-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": BUSINESS_INFO.name
            }
          }
        }
      }))
    };
    injectJsonLd('jsonld-products', productsSchema);

    // 3. BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": domain
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product Catalog",
          "item": `${domain}/#products`
        },
        ...(selectedCategoryFilter && selectedCategoryFilter !== 'all' ? [{
          "@type": "ListItem",
          "position": 3,
          "name": PRODUCTS.find(p => p.id === selectedCategoryFilter)?.name || "Selected Category",
          "item": `${domain}/#${selectedCategoryFilter}`
        }] : [])
      ]
    };
    injectJsonLd('jsonld-breadcrumbs', breadcrumbSchema);

    // 4. FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Minimum Order Quantity (MOQ) for custom printed carry bags?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For D-Cut and W-Cut bags sold by weight (₹272/kg), our standard minimum order quantity starts from 50 kg for custom flexo single-color printing. For Stitched bags (₹18.50/piece), MOQ starts at 500 pieces."
          }
        },
        {
          "@type": "Question",
          "name": "Are non-woven carry bags 100% compliant with plastic ban regulations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All RVM non-woven carry bags are manufactured using 100% recyclable polypropylene spunbond fabric that complies with state and central single-use plastic ban directives."
          }
        },
        {
          "@type": "Question",
          "name": "Can you print custom brand logos, slogans, and store contact numbers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer in-house single-color, dual-color, and multi-color flexographic printing. Simply send us your artwork or logo text on WhatsApp, and we will prepare a digital proof prior to bulk printing."
          }
        },
        {
          "@type": "Question",
          "name": "How much weight payload can these non-woven bags hold safely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our D-Cut and W-Cut bags support 8kg to 12kg payloads depending on fabric GSM. Heavy-duty Stitched Loop bags and 3D Box bags are reinforced to hold 15kg to 20kg safely."
          }
        },
        {
          "@type": "Question",
          "name": "How long does custom non-woven bag production and dispatch take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard custom printed batch production takes 3 to 5 business days after graphic proof approval. Local dispatches across Hyderabad and Rangareddy district can be coordinated upon request."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide official GST invoices for all wholesale orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RVM Carry Bags is a GST registered corporate entity (GSTIN: 36LAWPK6738E1ZW). Official GST tax invoices are provided for all commercial orders and bulk shipments."
          }
        }
      ]
    };
    injectJsonLd('jsonld-faq', faqSchema);

  }, [selectedCategoryFilter, activeModalCategory]);

  return null; // Component renders no visual markup, purely updates head & schema
};
