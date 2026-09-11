import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SITE_CONFIG } from './data/content';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultMsg = encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage || "Hi Sibu! I’ve seen the work and I’m ready to get *fixed*.");
    window.open(`https://wa.me/${cleanPhone}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-[#D92338]/20 selection:text-[#0A0A0A] flex flex-col">
      {/* Top Luxury Navigation */}
      <Navigation
        onOpenWhatsApp={handleOpenWhatsApp}
        isMobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={setMobileMenuOpen}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Section 01: Bespoke Hero */}
        <Hero />

        {/* Section 02: About Sibu ("Behind The Brush" / "Who's Sibu") */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <AboutSection />
        </div>
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />

      {/* Persistent WhatsApp Booking Widget (visible from the hero section on load) */}
      <WhatsAppWidget isHidden={mobileMenuOpen} />
    </div>
  );
}
