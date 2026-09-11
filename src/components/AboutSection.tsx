import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import aboutImg from '../assets/images/ABOUT/1.jpg';
import { SITE_CONFIG } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Sibu and Fixed by Sibu"
      className="relative w-full bg-white rounded-[2px] border border-zinc-200 px-8 py-12 sm:px-14 sm:py-16 md:px-20 md:py-24 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] scroll-mt-24"
    >
      {/* Top Category Accent with Location Pill */}
      <div className="w-full flex items-center justify-between pb-6 sm:pb-8 border-b border-zinc-200 mb-10 sm:mb-14 md:mb-16">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium">
          FIXED BY SIBU &bull; Makeup Artist &amp; Beauty Educator
        </span>

        {/* Location / Presence Pill */}
        <div className="flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D92338] shadow-xs" />
          <span className="text-xs sm:text-[12px] tracking-[0.22em] text-[#0A0A0A] font-semibold font-sans uppercase">
            CAPE TOWN
          </span>
        </div>
      </div>

      {/* Main Minimalist Composition */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-start pb-8 sm:pb-12">
        
        {/* Label + Organic Curved Photo Vessel */}
        <div className="flex items-start space-x-4 sm:space-x-6 mb-10 sm:mb-14 md:mb-16">
          <span className="text-sm sm:text-base md:text-lg font-bold text-[#0A0A0A] tracking-tight whitespace-nowrap pt-1">
            Sibu
          </span>

          {/* Organic Portrait Frame */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 overflow-hidden rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border-2 border-[#0A0A0A] bg-zinc-100 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] group shrink-0">
            <img
              src={aboutImg}
              alt="Sibu - Fixed by Sibu makeup artist portrait"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.99] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>

        {/* Lower Composition: Pure Stacked Typography & Overlapping Wireframe Circle */}
        <div className="relative w-full">
          {/* Delicate Geometric Wireframe Circle */}
          <div
            aria-hidden="true"
            className="absolute left-[38%] sm:left-[44%] md:left-[42%] -top-10 sm:-top-14 md:-top-16 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border border-zinc-200 pointer-events-none z-0"
          />

          {/* Clean High-Contrast Stacked Headline */}
          <h3 className="relative z-10 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0A0A0A] font-normal tracking-[-0.03em] leading-[1.04] select-none max-w-3xl">
            <span className="block">Confident Beauty</span>
            <span className="block italic text-zinc-500 font-light">Behind</span>
            <span className="block">Every Vision</span>
          </h3>
        </div>

      </div>

      {/* Lower Right-Hand Instagram Link */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-14 z-20">
        <a
          href={SITE_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Fixed by Sibu on Instagram (${SITE_CONFIG.instagram})`}
          className="group relative inline-flex items-center space-x-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white hover:bg-[#0A0A0A] border border-zinc-300 hover:border-black shadow-xs hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A0A0A] group-hover:text-white transition-colors duration-300 shrink-0" />
          <span className="hidden sm:inline text-[11px] font-sans tracking-[0.18em] uppercase text-zinc-600 group-hover:text-white transition-colors duration-300 font-medium">
            {SITE_CONFIG.instagram}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#D92338] transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};
