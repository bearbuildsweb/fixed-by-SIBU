import React, { useState, useEffect, useRef } from 'react';
import { Eye, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS, SITE_CONFIG } from '../data/content';
import { PortfolioItem, CategoryType } from '../types';
import { AboutSection } from './AboutSection';

interface PortfolioFrameImageProps {
  src: string;
  alt: string;
  plateNumber: '01' | '02';
}

const PortfolioFrameImage: React.FC<PortfolioFrameImageProps> = ({
  src,
  alt,
  plateNumber,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if the image is already cached and loaded by the browser
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-zinc-100 rounded-[1px] border border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Mini-Preloader in the portfolio frame */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-100 transition-opacity duration-500 ease-out pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={isLoaded}
      >
        {/* Subtle Ambient Shimmer Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite] pointer-events-none" />
        </div>

        {/* Minimalist Ring Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-300" />
          <div className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border-t-[1.5px] border-r-[1.5px] border-transparent border-t-[#D92338] border-r-[#D92338] animate-spin [animation-duration:0.9s]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D92338] animate-pulse" />
        </div>

        {/* Understated Status Label */}
        <span className="mt-2.5 text-[8px] font-mono tracking-[0.26em] uppercase text-zinc-500 font-light">
          LOOK {plateNumber}
        </span>
      </div>

      {/* Mounted Archival Print Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-center filter contrast-[1.02] transition-all duration-700 ease-out group-hover:scale-[1.018] ${
          isLoaded ? 'opacity-100' : 'opacity-0 scale-[0.985]'
        }`}
      />

      {/* Archival Folio Plate (01 / 02) */}
      <div
        className={`absolute top-2.5 ${
          plateNumber === '01' ? 'left-2.5' : 'right-2.5'
        } z-20 bg-white/95 backdrop-blur-xs px-2 py-0.5 text-[8.5px] font-mono tracking-[0.22em] text-[#0A0A0A] border border-zinc-200 shadow-xs`}
      >
        {plateNumber}
      </div>
    </div>
  );
};

interface EditorialPortfolioProps {
  onSelectLook: (item: PortfolioItem) => void;
}

export const EditorialPortfolio: React.FC<EditorialPortfolioProps> = ({
  onSelectLook,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');

  const categories: CategoryType[] = [
    'ALL',
    'BRIDAL',
    'EDITORIAL',
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-[#FAFAFA] text-[#0A0A0A] overflow-hidden border-t border-zinc-200 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Anchor for Services navigation */}
      <div id="services" className="-translate-y-24" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-zinc-200 pb-7 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.34em] text-zinc-500 block mb-2.5 font-medium">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0A0A0A]">
              Curated <span className="italic font-normal">Looks</span>
            </h2>
          </div>

          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D92338]" />
            <span>BRIDAL &bull; EDITORIAL &bull; EVENTS</span>
          </div>
        </div>

        {/* Category Filter Navigation Tabs */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.24em] font-medium whitespace-nowrap transition-all duration-300 border cursor-pointer rounded-full ${
                activeCategory === cat
                  ? 'bg-[#0A0A0A] text-white border-black shadow-xs'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Shoot Cards Grid: Each card features BOTH shoot images side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {filteredItems.map((item) => {
            const photo1 = item.images[0] || item.image;
            const photo2 = item.images[1] || item.images[0] || item.image;

            return (
              <div
                key={item.id}
                onClick={() => onSelectLook(item)}
                className="group relative cursor-pointer bg-white rounded-[2px] flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1 border border-zinc-200 hover:border-black shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                {/* Passe-Partout Mat Board */}
                <div className="relative overflow-hidden bg-zinc-100 p-2.5 sm:p-4 border-b border-zinc-200">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                    <PortfolioFrameImage
                      src={photo1}
                      alt={`${item.title} - View 01`}
                      plateNumber="01"
                    />
                    <PortfolioFrameImage
                      src={photo2}
                      alt={`${item.title} - View 02`}
                      plateNumber="02"
                    />
                  </div>

                  {/* Shoot Diptych Hover Lens Badge */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                    <span className="bg-white text-[#0A0A0A] text-[9.5px] uppercase tracking-[0.24em] px-4.5 py-2.5 border border-black shadow-md flex items-center space-x-2 font-medium">
                      <Eye className="w-3.5 h-3.5 text-[#D92338]" />
                      <span>View 2 Shoot Photos</span>
                    </span>
                  </div>
                </div>

                {/* Editorial Content Panel */}
                <div className="p-5 sm:p-7 bg-white flex flex-col justify-between flex-grow space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.26em] text-zinc-500 mb-2 sm:mb-2.5">
                      <span className="font-semibold text-[#0A0A0A] bg-zinc-100 px-2.5 py-0.5 border border-zinc-200">
                        {item.category}
                      </span>
                      <span className="text-zinc-500 flex items-center space-x-1.5">
                        <Layers className="w-3 h-3 text-[#D92338]" />
                        <span>2 Shoot Photographs</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0A0A] font-normal group-hover:text-[#D92338] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-light mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-3.5 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#D92338] font-medium">
                      Expand Shoot &bull; 02 Photos
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D92338] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal About Sibu Section */}
        <div className="mt-6 sm:mt-10">
          <AboutSection />
        </div>

      </div>
    </section>
  );
};
