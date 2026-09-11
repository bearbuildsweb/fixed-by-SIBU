import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Curated Hero Campaign Photography (assets/images/HERO/)
import hero1 from '../assets/images/HERO/1.jpg';
import hero2 from '../assets/images/HERO/2.jpg';
import hero3 from '../assets/images/HERO/3.jpg';
import hero4 from '../assets/images/HERO/4.jpg';

interface HeroProps {
  onExplorePortfolio?: () => void;
}

interface HeroSlide {
  id: string;
  image: string;
  index: string;
  title: string;
  focalPosition: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-01',
    image: hero1,
    index: '01',
    title: 'GRADUATION SZN',
    focalPosition: 'object-[49%_42%]',
  },
  {
    id: 'hero-02',
    image: hero2,
    index: '02',
    title: 'FACE CARD LETHAL',
    focalPosition: 'object-[52%_45%]',
  },
  {
    id: 'hero-03',
    image: hero3,
    index: '03',
    title: 'TIMELESS ELEGANCE',
    focalPosition: 'object-[49%_38%]',
  },
  {
    id: 'hero-04',
    image: hero4,
    index: '04',
    title: 'FLAWLESS VIBES',
    focalPosition: 'object-[38%_44%]',
  },
];

const SLIDE_INTERVAL = 5000;

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);
  const touchStartXRef = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay with 5-second duration
  useEffect(() => {
    if (isPaused || isPreloading) return;
    const timer = setInterval(handleNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, isPreloading, handleNext]);

  // Preload gallery photographs with cascading preloader sequencing
  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const preloadPromises = HERO_SLIDES.map((slide) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });

    Promise.all(preloadPromises).then(() => {
      const elapsed = Date.now() - startTime;
      // Allow 1.35s for the cascading preloader panels to unfold gracefully
      const delay = Math.max(0, 1350 - elapsed);
      setTimeout(() => {
        if (isMounted) setIsPreloading(false);
      }, delay);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartXRef.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="hero"
      aria-label="Editorial Bridal Portrait Exhibition"
      className="relative w-full min-h-[calc(100vh-80px)] pt-[76px] sm:pt-[84px] pb-14 sm:pb-16 bg-[#FAFAFA] text-[#0A0A0A] flex flex-col justify-start items-center overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ========================================================================= */}
      {/* 01. CONTEMPORARY ARCHITECTURAL GALLERY RAIL (Aligned with Header Content) */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pointer-events-none z-30" aria-hidden="true">
        <div className="relative w-full flex items-center mt-2 sm:mt-2.5">
          {/* Header-to-Rail Mounting Brackets */}
          <div className="absolute left-0 -top-2.5 w-3 h-2.5 bg-gradient-to-b from-[#18181B] to-[#27272A] border-x border-t border-black/40" />
          <div className="hidden sm:block absolute left-1/4 -translate-x-1/2 -top-2.5 w-2.5 h-2.5 bg-gradient-to-b from-[#18181B] to-[#27272A] border-x border-t border-black/40" />
          <div className="hidden sm:block absolute right-1/4 translate-x-1/2 -top-2.5 w-2.5 h-2.5 bg-gradient-to-b from-[#18181B] to-[#27272A] border-x border-t border-black/40" />
          <div className="absolute right-0 -top-2.5 w-3 h-2.5 bg-gradient-to-b from-[#18181B] to-[#27272A] border-x border-t border-black/40" />

          {/* Continuous Satin Noir Architectural Hanging Rail with Gold Highlight */}
          <div className="w-full h-[4px] sm:h-[5px] rounded-[1.5px] bg-gradient-to-r from-[#18181B] via-[#27272A] via-50% to-[#18181B] shadow-[0_2px_5px_rgba(0,0,0,0.15)] border-y border-black/20" />

          {/* Left Wall Rosette / Finial */}
          <div className="absolute left-0 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#27272A] via-[#18181B] to-[#0A0A0A] border border-zinc-700 shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] shadow-inner" />
          </div>

          {/* Intermediate Standoffs */}
          <div className="hidden md:flex absolute left-1/4 -translate-x-1/2 w-2.5 h-3 bg-[#18181B] border border-zinc-700 rounded-[1px] shadow-xs" />
          <div className="hidden md:flex absolute right-1/4 translate-x-1/2 w-2.5 h-3 bg-[#18181B] border border-zinc-700 rounded-[1px] shadow-xs" />

          {/* Right Wall Rosette / Finial */}
          <div className="absolute right-0 translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#27272A] via-[#18181B] to-[#0A0A0A] border border-zinc-700 shadow-[0_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] shadow-inner" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 02. SUSPENDED PORTRAIT FRAME ASSEMBLY                                     */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        <div className="relative flex flex-col items-center w-full max-w-[310px] sm:max-w-[370px] md:max-w-[400px] lg:max-w-[420px] mx-auto">
          
          {/* Fine Tension Suspension Cables (Dropping from Rail to Frame) */}
          <div className="w-full h-12 sm:h-16 lg:h-20 relative pointer-events-none" aria-hidden="true">
            {/* Left Rail Carriage Slider */}
            <div className="absolute -top-1 left-6 sm:left-8 -translate-x-1/2 w-3 h-3 bg-[#18181B] border border-zinc-700 rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            </div>
            {/* Left Cable */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-700 via-zinc-400 to-zinc-700" />

            {/* Right Rail Carriage Slider */}
            <div className="absolute -top-1 right-6 sm:right-8 translate-x-1/2 w-3 h-3 bg-[#18181B] border border-zinc-700 rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            </div>
            {/* Right Cable */}
            <div className="absolute right-6 sm:right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-700 via-zinc-400 to-zinc-700" />
          </div>

          {/* 03. Suspended Frame Container with Micro-Physical Pendulum Float */}
          <motion.div
            animate={{
              rotate: [0, 0.2, 0, -0.2, 0],
              y: [0, -1.5, 0, 1.2, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full"
          >
            {/* Frame Clamps */}
            <div className="absolute -top-3 left-6 sm:left-8 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#D4AF37] shadow-xs" />
              <div className="w-3.5 h-3.5 bg-gradient-to-b from-[#27272A] to-[#18181B] border border-black rounded-b-[1px] shadow-[0_1.5px_3px_rgba(0,0,0,0.22)] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#D92338]" />
              </div>
            </div>

            <div className="absolute -top-3 right-6 sm:right-8 translate-x-1/2 z-30 pointer-events-none flex flex-col items-center" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#D4AF37] shadow-xs" />
              <div className="w-3.5 h-3.5 bg-gradient-to-b from-[#27272A] to-[#18181B] border border-black rounded-b-[1px] shadow-[0_1.5px_3px_rgba(0,0,0,0.22)] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#D92338]" />
              </div>
            </div>

            {/* Museum Gallery Frame Structure with Tangible Depth */}
            <div
              className="group relative bg-white border-2 sm:border-[2.5px] border-[#0A0A0A] p-3 sm:p-4 rounded-[1px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12),_0_8px_16px_-4px_rgba(0,0,0,0.06)] transition-all duration-700"
            >
              {/* 4:5 Portrait Photographic Window */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F4F4F5] border border-[#0A0A0A] shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]">
                {/* 01. Cascading Preloader */}
                <AnimatePresence>
                  {isPreloading && (
                    <motion.div
                      key="cascading-hero-preloader"
                      initial={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.55, delay: 0.45 },
                      }}
                      className="absolute inset-0 z-30 flex flex-col justify-between overflow-hidden bg-white"
                      aria-live="polite"
                      aria-busy="true"
                    >
                      {/* Cascading Louvers */}
                      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-10">
                        {[0, 1, 2, 3].map((colIdx) => (
                          <motion.div
                            key={colIdx}
                            initial={{ scaleY: 1 }}
                            exit={{
                              scaleY: 0,
                              transition: {
                                duration: 0.7,
                                delay: colIdx * 0.1,
                                ease: [0.76, 0, 0.24, 1],
                              },
                            }}
                            style={{ originY: colIdx % 2 === 0 ? 0 : 1 }}
                            className="w-full h-full bg-[#F4F4F5] border-r border-zinc-200 last:border-none relative"
                          >
                            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#D92338]/40 to-transparent" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Center Archival Editorial Preloader Crest */}
                      <motion.div
                        exit={{ opacity: 0, y: -6, transition: { duration: 0.3 } }}
                        className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center mb-3 bg-white shadow-sm"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            className="text-[12px] text-[#D92338] font-serif"
                          >
                            ✦
                          </motion.span>
                        </motion.div>

                        <motion.span
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#0A0A0A] font-bold"
                        >
                          Fixed By Sibu
                        </motion.span>

                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          style={{ originX: 0.5 }}
                          className="w-16 h-[1px] bg-[#D92338]/60 my-2"
                        />

                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.45, duration: 0.6 }}
                          className="text-[8px] uppercase tracking-[0.26em] text-zinc-500 font-light"
                        >
                          Editorial Beauty Study
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 02. Active Photographic Slide Presentation */}
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.img
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.03 }}
                      transition={{ duration: 5.0, ease: 'easeOut' }}
                      src={currentSlide.image}
                      alt={`${currentSlide.title} — Hair and makeup artistry by Fixed by Sibu`}
                      loading={currentIndex === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover filter contrast-[1.02] brightness-[0.99] ${currentSlide.focalPosition}`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Cascading Shutter Louver Transition between slide changes */}
                {!isPreloading && (
                  <motion.div
                    key={`slide-shutter-${currentSlide.id}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.65, delay: 0.18 }}
                    className="absolute inset-0 pointer-events-none z-10 grid grid-cols-3"
                  >
                    {[0, 1, 2].map((col) => (
                      <motion.div
                        key={col}
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: col * 0.08,
                          ease: [0.77, 0, 0.175, 1],
                        }}
                        style={{ originY: col % 2 === 0 ? 0 : 1 }}
                        className="w-full h-full bg-white/80 backdrop-blur-[1px] border-r border-zinc-200 last:border-none"
                      />
                    ))}
                  </motion.div>
                )}

                {/* Soft ambient inner lens vignette */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none shadow-[inset_0_0_16px_rgba(0,0,0,0.04)]"
                />
              </div>

              {/* Sub-Placard Inset in Archival Frame */}
              <div className="pt-2.5 pb-0.5 px-0.5 flex items-center justify-between text-[8px] sm:text-[8.5px] uppercase tracking-[0.26em] text-zinc-500 font-medium">
                <span className="text-[#0A0A0A] font-bold tracking-[0.22em] font-['Syne',sans-serif]">{currentSlide.title}</span>
                <span className="text-[#D92338] font-serif tracking-[0.2em] font-medium">
                  {currentSlide.index} / 0{HERO_SLIDES.length}
                </span>
              </div>
            </div>

            {/* 04. Indexing & Actions Under the Hero Frame */}
            <div className="flex flex-col items-center mt-3.5 sm:mt-4 space-y-3">
              {/* Minimalist Slide Index Tabs with 5-Second Duration Progress Bar */}
              <div className="flex items-center justify-center space-x-4">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    aria-label={`View portrait 0${idx + 1}`}
                    className="py-1 px-1.5 focus:outline-none cursor-pointer group flex flex-col items-center min-w-[28px]"
                  >
                    <span
                      className={`text-[9.5px] font-serif transition-colors duration-300 block ${
                        idx === currentIndex
                          ? 'text-[#0A0A0A] font-semibold'
                          : 'text-zinc-400 hover:text-black font-light'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {/* 5-Second Linear Progress Hairline */}
                    <div className="w-full h-[1.5px] mt-0.5 bg-zinc-200 overflow-hidden rounded-full">
                      {idx === currentIndex && !isPreloading ? (
                        <motion.div
                          key={`progress-${currentIndex}-${isPaused}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isPaused ? undefined : 1 }}
                          transition={{ duration: 5.0, ease: 'linear' }}
                          style={{ originX: 0 }}
                          className="w-full h-full bg-[#D92338] rounded-full"
                        />
                      ) : (
                        <div
                          className={`w-full h-full ${
                            idx === currentIndex ? 'bg-[#D92338]' : 'bg-transparent'
                          }`}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
