import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface WhatsAppWidgetProps {
  customMessage?: string;
  isHidden?: boolean;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ customMessage, isHidden = false }) => {
  // Always visible (even in hero section), smoothly fading out only if contacting bottom footer boundary
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScrollPosition = () => {
      // Hide widget only when reaching the very bottom of the page/footer so it doesn't collide with copyright text
      const footer = document.getElementById('editorial-footer') || document.querySelector('footer');
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= windowHeight - 40) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  if (isHidden) {
    return null;
  }

  const defaultMsg = customMessage || SITE_CONFIG.defaultWhatsAppMessage || "Hi Sibu! I’ve seen the work and I’m ready to get *fixed*.";
  
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(defaultMsg)}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Open in new window safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    e.preventDefault();
  };

  return (
    <div
      id="persistent-whatsapp-widget"
      className={`fixed bottom-6 right-6 md:right-8 z-40 flex items-center group transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Editorial WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        onClick={handleClick}
        id="whatsapp-direct-link"
        className="relative flex items-center bg-[#0A0A0A] text-white hover:bg-black transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.22)] active:scale-[0.98] border border-black hover:border-zinc-700 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full"
        aria-label="Chat with Sibu on WhatsApp"
      >
        {/* Subtle Online Pulse Dot - lipstick red accent */}
        <span className="relative flex h-2 w-2 mr-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D92338] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D92338]"></span>
        </span>

        <MessageCircle className="w-4 h-4 mr-2 text-[#D92338]" />

        {/* Label shown on desktop, hidden on tiny mobile to stay compact */}
        <span className="text-[11px] uppercase tracking-[0.22em] font-medium hidden sm:inline whitespace-nowrap">
          Chat with Sibu
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] font-medium sm:hidden">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

