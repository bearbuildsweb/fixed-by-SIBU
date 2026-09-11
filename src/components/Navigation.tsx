import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { Logo } from './Logo';

interface NavigationProps {
  onOpenWhatsApp: () => void;
  isMobileMenuOpen?: boolean;
  onToggleMobileMenu?: (isOpen: boolean) => void;
}

/**
 * Tactile 3D Editorial Hamburger Icon
 * - Dimensional bars with micro-bevel highlights and drop-shadow depth
 * - Smoothly morphs into a dimensional 'X'
 */
const EditorialHamburgerIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className="relative w-5 h-3.5 flex flex-col justify-between items-end overflow-visible select-none filter drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.35)]"
      aria-hidden="true"
    >
      <span
        className={`block h-[2px] rounded-[1px] transition-all duration-300 ease-out origin-center bg-gradient-to-b from-[#2D2D2D] via-[#141414] to-[#000000] shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.25)] ${
          isOpen
            ? 'w-[18px] translate-y-[6px] rotate-45'
            : 'w-5 group-hover:w-5'
        }`}
      />
      <span
        className={`block h-[2px] rounded-[1px] transition-all duration-300 ease-out origin-center bg-gradient-to-b from-[#2D2D2D] via-[#141414] to-[#000000] shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.25)] ${
          isOpen
            ? 'w-[18px] -translate-y-[6px] -rotate-45'
            : 'w-3.5 group-hover:w-5'
        }`}
      />
    </div>
  );
};

export const Navigation: React.FC<NavigationProps> = ({
  onOpenWhatsApp,
  isMobileMenuOpen: externalMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);

  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultMsg = encodeURIComponent("Hi Sibu, I'd love to enquire about booking hair and makeup artistry.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${defaultMsg}`;

  const mobileMenuOpen = externalMobileMenuOpen !== undefined ? externalMobileMenuOpen : internalMobileMenuOpen;

  const setMobileMenuOpen = (open: boolean) => {
    if (onToggleMobileMenu) {
      onToggleMobileMenu(open);
    } else {
      setInternalMobileMenuOpen(open);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { name: 'Behind The Looks', href: '#about' },
  ];

  const drawerNavLinks = [
    { name: "Who's Sibu", href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md py-5 sm:py-6 border-b border-[#E4E4E7] transition-all duration-300 shadow-[0_1px_8px_rgba(0,0,0,0.02)]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Visual Mark */}
          <a
            href="#"
            id="brand-logo-link"
            className="group focus:outline-none focus:ring-0 flex items-center"
            aria-label="Fixed By Sibu Home"
          >
            <Logo
              size="md"
              variant="dark"
            />
          </a>

          {/* Navigation Links & Action Area: Strictly "BEHIND THE LOOKS" and 3D Hamburger */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {/* Desktop Navigation Link - "BEHIND THE BRUSH" (directs to ABOUT) */}
            <div className="hidden md:flex items-center">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-[12px] uppercase tracking-[0.22em] font-['Syne',sans-serif] font-bold text-zinc-800 hover:text-black transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D92338] hover:after:w-full after:transition-all after:duration-300"
              >
                Behind The Looks
              </a>
            </div>

            {/* Tactile 3D Minimalist Editorial Menu Trigger */}
            <button
              id="header-editorial-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-white via-[#FAF9F7] to-[#EDE7DF] border border-[#D6D0C7] hover:border-black/70 focus:outline-none transition-all duration-200 cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.09),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.13),0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] active:translate-y-[1px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.05)]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <EditorialHamburgerIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="editorial-nav-drawer"
          className="fixed inset-0 z-50 flex justify-end animate-fade-in"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[3px] transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Stage */}
          <div
            className="relative z-10 w-full sm:max-w-md bg-[#FAFAFA] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-8 sm:px-12 border-l border-zinc-200 shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <p className="text-[10px] tracking-[0.32em] uppercase text-zinc-500 font-semibold font-['Syne',sans-serif]">
                  Menu
                </p>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 hover:text-black transition-colors font-medium flex items-center space-x-1 cursor-pointer"
                  aria-label="Close menu"
                >
                  <span>Close</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Minimal Brand Mark in Drawer */}
              <div className="pt-1">
                <Logo size="sm" variant="dark" />
              </div>

              <nav className="flex flex-col space-y-3 pt-4">
                {drawerNavLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group font-['Syne',sans-serif] text-2xl sm:text-3xl font-bold uppercase tracking-[0.04em] text-[#0A0A0A] hover:text-[#D92338] transition-colors flex items-center justify-between py-3 border-b border-zinc-200/70"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      {link.name}
                    </span>
                    <span className="text-[11px] font-sans font-semibold tracking-widest text-zinc-400 group-hover:text-[#D92338]">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-zinc-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-4 bg-[#0A0A0A] hover:bg-black text-white text-[11px] uppercase tracking-[0.24em] font-medium flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-sm border border-black group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D92338] transition-transform duration-300 group-hover:scale-110" />
                <span>Enquire with Sibu</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
