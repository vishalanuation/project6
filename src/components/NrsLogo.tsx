import React from 'react';

interface NrsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const NrsLogo: React.FC<NrsLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light'
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subTextSizes = {
    sm: 'text-[8px]',
    md: 'text-[9.5px]',
    lg: 'text-xs'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 3 Interlocking Elliptical Rings Logo */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="nrs-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
            <linearGradient id="nrs-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
            <linearGradient id="nrs-grad-3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>

          {/* First loop */}
          <ellipse
            cx="40"
            cy="52"
            rx="28"
            ry="15"
            transform="rotate(-28 40 52)"
            stroke="url(#nrs-grad-1)"
            strokeWidth="5"
            className="opacity-95"
          />

          {/* Second overlapping loop */}
          <ellipse
            cx="55"
            cy="46"
            rx="27"
            ry="14"
            transform="rotate(32 55 46)"
            stroke="url(#nrs-grad-2)"
            strokeWidth="4.5"
            className="opacity-90"
          />

          {/* Third interlocking loop */}
          <ellipse
            cx="48"
            cy="50"
            rx="29"
            ry="13"
            transform="rotate(-5 48 50)"
            stroke="url(#nrs-grad-3)"
            strokeWidth="4"
            className="opacity-85"
          />

          {/* Center glowing focal point */}
          <circle cx="48" cy="49" r="2.5" fill="#5eead4" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-start leading-none">
          <span
            className={`font-bold tracking-tight lowercase ${textSizes[size]} ${
              theme === 'dark' ? 'text-white' : 'text-[#133240]'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            nrs consulting
          </span>
          <span className="text-[10px] ml-0.5 font-semibold text-teal-600 leading-tight">™</span>
        </div>
        <span
          className={`font-medium tracking-wide mt-0.5 uppercase ${subTextSizes[size]} ${
            theme === 'dark' ? 'text-slate-300' : 'text-[#476072]'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          Innovations • Technology • Consulting
        </span>
      </div>
    </div>
  );
};
