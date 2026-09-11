import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { FixedBySibuMark } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultMsg = encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage || "Hi Sibu! I’ve seen the work and I’m ready to get *fixed*.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${defaultMsg}`;

  return (
    <footer
      id="editorial-footer"
      className="relative bg-[#0A0A0A] text-white overflow-hidden border-t border-zinc-800 select-none"
    >
      {/* Subtle Texture & Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 flex flex-col justify-between">
        
        {/* =========================================================================
            THE EDITORIAL STATEMENT (CENTRAL HERO MOMENT)
            ========================================================================= */}
        <div className="text-center relative flex flex-col items-center justify-center">
          
          {/* Subtle Decorative Accent Rule with Red Lipstick Accent */}
          <div className="flex items-center justify-center space-x-4 mb-8 sm:mb-10 w-full max-w-xs sm:max-w-md">
            <span className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#D92338]" />
            <span className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow" />
          </div>

          {/* Central Editorial Statement */}
          <blockquote className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="font-editorial-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.06em] text-white leading-[1.25] sm:leading-[1.2] select-none">
              “Flawless makeup for every occasion”
            </p>
          </blockquote>

          {/* Editorial Caption / Brand Subtitle */}
          <div className="mt-8 sm:mt-9 flex items-center justify-center space-x-2.5 sm:space-x-3 text-[9.5px] sm:text-[11px] tracking-[0.32em] uppercase text-zinc-400 font-light">
            <span>CAPE TOWN</span>
            <span className="text-[#D92338]">•</span>
            <span>SOUTH AFRICA</span>
          </div>

          {/* Refined Liaison Icon Channels: Strictly Instagram & WhatsApp */}
          <div className="mt-8 sm:mt-10">
            <div
              id="footer-icons-list"
              className="flex items-center gap-3.5 text-zinc-400"
              aria-label="Social and contact links"
            >
              <a
                id="footer-cta-instagram"
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[1.4] transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                id="footer-cta-chat"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-[#D92338] transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.4] transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* =========================================================================
            LOWER PART: MINIMALIST BRAND MARK
            ========================================================================= */}
        <div
          className="w-full pt-12 sm:pt-16 pb-6 sm:pb-8 flex items-center justify-center select-none overflow-hidden"
        >
          <div className="w-full max-w-[280px] sm:max-w-[340px] opacity-80 hover:opacity-100 transition-opacity duration-300">
            <FixedBySibuMark variant="light" />
          </div>
        </div>

        {/* =========================================================================
            ARCHIVAL COLOPHON BAR (BOTTOM)
            ========================================================================= */}
        <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-center text-center text-[10px] sm:text-[11px] text-zinc-500 font-light">
          <p className="uppercase tracking-[0.24em]">
            &copy; {currentYear} FIXED BY SIBU. EDITORIAL MAKEUP ARTISTRY. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};
