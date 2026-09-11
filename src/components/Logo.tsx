import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
  sublineText?: string;
  className?: string;
  align?: 'left' | 'center';
}

/**
 * FIXED BY SIBU Brand Logo Mark
 * 
 * Faithfully reflects the editorial, confident identity from the official mark:
 * - Authoritative, bold Didone/Bodoni typography for "FIXED"
 * - Clean horizontal cutout band
 * - Tracked geometric sans-serif "BY SIBU"
 * - Signature red lipstick bullet in gold & black casing
 * - Fully vector SVG (sharp on all Retina displays, no raster compression)
 */
export const FixedBySibuMark: React.FC<{
  variant?: 'dark' | 'light';
  className?: string;
}> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#0A0A0A';
  const cutoutBg = isLight ? '#0A0A0A' : '#FAFAFA';
  const subTextColor = isLight ? '#FFFFFF' : '#0A0A0A';

  return (
    <svg
      viewBox="0 0 320 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none ${className}`}
      aria-label="Fixed By Sibu Logo"
    >
      <defs>
        {/* Gold collar gradient for lipstick */}
        <linearGradient id="goldCollar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5DF97" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9E7822" />
        </linearGradient>

        {/* Lipstick bullet gradient */}
        <linearGradient id="rougeBullet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4B63" />
          <stop offset="40%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>

        {/* Lipstick casing gradient */}
        <linearGradient id="casingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="50%" stopColor="#2E2E2E" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>

      {/* 01. Bold Didone / Bodoni Serif Letterforms: FIXED */}
      <g fill={textColor}>
        {/* Letter F */}
        {/* Stem */}
        <rect x="14" y="16" width="17" height="64" />
        {/* Top bar */}
        <rect x="14" y="16" width="46" height="7.5" />
        {/* Top serif bracket */}
        <path d="M60 16 L60 28 L53 23.5 L53 16 Z" />
        {/* Middle bar */}
        <rect x="31" y="44" width="22" height="6.5" />
        {/* Bottom base serif */}
        <rect x="7" y="76.5" width="31" height="3.5" />
        {/* Top left serif bracket */}
        <polygon points="7,16 14,16 14,22 7,16" />

        {/* Letter I */}
        {/* Top serif */}
        <rect x="72" y="16" width="34" height="3.5" />
        {/* Main Stem */}
        <rect x="80.5" y="19.5" width="17" height="57" />
        {/* Bottom serif */}
        <rect x="72" y="76.5" width="34" height="3.5" />

        {/* Letter X */}
        {/* Thick diagonal (top-left to bottom-right) */}
        <polygon points="118,19.5 133,19.5 166,76.5 151,76.5" />
        {/* Thin hairline diagonal (top-right to bottom-left) */}
        <polygon points="163,19.5 158,19.5 121,76.5 126,76.5" />
        {/* Top-left serif */}
        <rect x="113" y="16" width="23" height="3.5" />
        {/* Top-right serif */}
        <rect x="151" y="16" width="20" height="3.5" />
        {/* Bottom-left serif */}
        <rect x="114" y="76.5" width="20" height="3.5" />
        {/* Bottom-right serif */}
        <rect x="144" y="76.5" width="25" height="3.5" />

        {/* Letter E */}
        {/* Stem */}
        <rect x="180" y="16" width="17" height="64" />
        {/* Top bar */}
        <rect x="180" y="16" width="40" height="7.5" />
        {/* Top-right serif bracket */}
        <path d="M220 16 L220 27 L214 23.5 L214 16 Z" />
        {/* Middle bar */}
        <rect x="197" y="44" width="21" height="6.5" />
        {/* Bottom bar */}
        <rect x="180" y="72.5" width="41" height="7.5" />
        {/* Bottom-right serif bracket */}
        <path d="M221 80 L221 69 L215 72.5 L215 80 Z" />
        {/* Top left serif bracket */}
        <polygon points="173,16 180,16 180,22 173,16" />
        {/* Bottom left serif */}
        <rect x="173" y="76.5" width="10" height="3.5" />

        {/* Letter D */}
        {/* Stem */}
        <rect x="230" y="16" width="17" height="64" />
        {/* Top left serif bracket */}
        <polygon points="223,16 230,16 230,22 223,16" />
        {/* Bottom left serif */}
        <rect x="223" y="76.5" width="14" height="3.5" />
        {/* Top curved connection */}
        <path d="M247 16 C275 16, 298 28, 298 48 C298 68, 275 80, 247 80 L247 72 C268 72, 282 62, 282 48 C282 34, 268 24, 247 24 Z" />
      </g>

      {/* 02. Clean Horizontal Cutout Band slicing across the middle */}
      <rect
        x="42"
        y="42.5"
        width="190"
        height="14"
        fill={cutoutBg}
      />

      {/* 03. "BY SIBU" Tracked Sans-Serif Typography */}
      <text
        x="50"
        y="53.5"
        fill={subTextColor}
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="12.5"
        fontWeight="700"
        letterSpacing="0.36em"
      >
        BY SIBU
      </text>

      {/* 04. Modern Lipstick Artistry Accent (positioned in the E / D opening) */}
      <g transform="translate(216, 40)">
        {/* Black base casing */}
        <rect
          x="1"
          y="10.5"
          width="8"
          height="7.5"
          rx="0.5"
          fill="url(#casingGrad)"
          stroke="#333333"
          strokeWidth="0.4"
        />
        {/* Metallic divider ring */}
        <line x1="1" y1="11" x2="9" y2="11" stroke="#555" strokeWidth="0.5" />

        {/* Polished gold collar */}
        <rect
          x="1.5"
          y="7"
          width="7"
          height="3.5"
          fill="url(#goldCollar)"
        />

        {/* Red lipstick bullet with slanted precision cut */}
        <path
          d="M2 7 L2 2.5 L6.5 0 L8 2.5 L8 7 Z"
          fill="url(#rougeBullet)"
        />
        {/* Bullet sheen highlight */}
        <path
          d="M2.5 6 L2.5 3 L5.5 1"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubline = false,
  sublineText = 'EDITORIAL MAKEUP ARTISTRY',
  className = '',
  align = 'left',
}) => {
  const isLight = variant === 'light';
  const subTextColor = isLight ? '#A1A1AA' : '#71717A';

  const sizeClasses = {
    sm: 'w-[148px] sm:w-[165px]',
    md: 'w-[185px] sm:w-[210px]',
    lg: 'w-[230px] sm:w-[270px]',
  }[size];

  const sublineClasses = {
    sm: 'text-[7px] tracking-[0.32em]',
    md: 'text-[8px] tracking-[0.36em]',
    lg: 'text-[9.5px] tracking-[0.40em]',
  }[size];

  return (
    <div
      className={`inline-flex flex-col select-none transition-transform duration-300 hover:scale-[1.01] ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {/* Visual Mark */}
      <div className={sizeClasses}>
        <FixedBySibuMark variant={variant} />
      </div>

      {/* Subtle Editorial Subline */}
      {showSubline && (
        <div
          style={{ color: subTextColor }}
          className={`${sublineClasses} uppercase font-light font-sans mt-1.5 flex items-center justify-center`}
        >
          <span className="whitespace-nowrap">{sublineText}</span>
        </div>
      )}
    </div>
  );
};
