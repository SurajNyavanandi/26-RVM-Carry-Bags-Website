import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { ProductCategories } from './components/ProductCategories';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { WebsitePromoSection } from './components/WebsitePromoSection';
import { Footer } from './components/Footer';
import { DeveloperCredit } from './components/DeveloperCredit';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

import { useModalState } from './hooks/useModalState';
import { useScrollTo } from './hooks/useScrollTo';

export default function App() {
  const scrollTo = useScrollTo();

  // Lightbox modal state
  const lightboxModal = useModalState<{ imageUrl: string; title: string }>();

  // Quote calculator modal state
  const quoteModal = useModalState<{ category?: string }>();

  // Category filter state for ProductsSection
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    lightboxModal.openModal({ imageUrl, title });
  };

  const handleOpenQuoteModal = (category?: string) => {
    quoteModal.openModal({ category: category || 'd-cut-bags' });
  };

  const handleSelectCategoryFromOverview = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    scrollTo('products');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Sticky Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 2. Client Logos / Industries Served */}
        <ClientLogos />

        {/* 3. Product Categories Overview */}
        <ProductCategories 
          onSelectCategory={handleSelectCategoryFromOverview}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Detailed Products Catalog */}
        <ProductsSection 
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenLightbox={handleOpenLightbox}
          selectedCategoryFilter={selectedCategoryFilter}
          setSelectedCategoryFilter={setSelectedCategoryFilter}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Factory Direct CTA Banner */}
        <CTABanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. About Factory & Proprietor */}
        <AboutUs />

        {/* 10. Contact Section */}
        <ContactSection />

        {/* 11. Google Map Section */}
        <GoogleMapSection />

        {/* 12. Custom Website Design Inquiry Banner */}
        <WebsitePromoSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Developer Credit */}
      <DeveloperCredit />

      {/* Floating Sticky WhatsApp Button */}
      <StickyWhatsApp />

      {/* Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxModal.isOpen}
        imageUrl={lightboxModal.data?.imageUrl || ''}
        title={lightboxModal.data?.title || ''}
        onClose={lightboxModal.closeModal}
      />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModal.isOpen}
        initialCategory={quoteModal.data?.category}
        onClose={quoteModal.closeModal}
      />

    </div>
  );
}
