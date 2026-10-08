import React from 'react';
import { 
  X, 
  ArrowRight, 
  LayoutGrid, 
  MapPin, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { CapabilityData } from '../data/freightData';

interface CapabilityDetailModalProps {
  capability: CapabilityData | null;
  onClose: () => void;
  onRequestDemo: (title: string) => void;
}

export const CapabilityDetailModal: React.FC<CapabilityDetailModalProps> = ({
  capability,
  onClose,
  onRequestDemo
}) => {
  if (!capability) return null;

  const renderIcon = () => {
    switch (capability.iconName) {
      case 'window':
        return <LayoutGrid className="w-6 h-6 text-teal-300" />;
      case 'tracking':
        return <MapPin className="w-6 h-6 text-teal-300" />;
      case 'docs':
        return <FileText className="w-6 h-6 text-teal-300" />;
      case 'billing':
        return <DollarSign className="w-6 h-6 text-teal-300" />;
      case 'analytics':
        return <TrendingUp className="w-6 h-6 text-teal-300" />;
      case 'carrier':
        return <UserCheck className="w-6 h-6 text-teal-300" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0d223f] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-teal-400/40 flex items-center justify-center shadow-md">
              {renderIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                Core Operations Feature
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
                {capability.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {capability.description}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Operational Impact
            </span>
            <div className="flex items-center gap-2 text-teal-800 font-bold text-base">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
              <span>{capability.impact}</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 leading-normal bg-sky-50/60 p-3 rounded-lg border border-sky-100 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              Configured natively inside NRS Consulting Cloud ERP with zero code required and seamless API integration into your existing TMS/accounting stacks.
            </span>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestDemo(capability.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <span>Explore In Live Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
