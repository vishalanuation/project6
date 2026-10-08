import React from 'react';
import { Phone } from 'lucide-react';
import { NrsLogo } from './NrsLogo';

interface HeaderNavProps {
  activeNav?: string;
  onNavClick: (navId: string) => void;
  onRequestDemo: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeNav = 'freight-forwarding',
  onNavClick,
  onRequestDemo
}) => {
  const navItems = [
    { id: 'freight-forwarding', label: 'Freight Forwarding Solution' },
    { id: 'multi-modal', label: 'Multi-Modal Logistics Solutions' },
    { id: 'road-suite', label: 'Road Transportation Suite' },
    { id: 'rail-logistics', label: 'Rail Logistics Solutions' },
    { id: 'warehousing-yard', label: 'Warehousing & Yard Management' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <div className="shrink-0">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none"
          >
            <NrsLogo size="md" />
          </a>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs font-semibold text-slate-700">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`py-2 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#005e6b] font-bold'
                    : 'text-slate-600 hover:text-[#0c2340]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button: Phone + Connect with us */}
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={onRequestDemo}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with us</span>
          </button>
        </div>

      </div>
    </header>
  );
};
