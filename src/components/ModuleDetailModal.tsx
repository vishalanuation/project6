import React from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Ship, 
  Truck, 
  Users, 
  Database, 
  ShieldCheck, 
  Zap, 
  BarChart3 
} from 'lucide-react';
import { ModuleData } from '../data/freightData';

interface ModuleDetailModalProps {
  module: ModuleData | null;
  onClose: () => void;
  onRequestDemo: (moduleName: string) => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onRequestDemo
}) => {
  if (!module) return null;

  const renderIcon = () => {
    switch (module.iconType) {
      case 'shipment':
        return <Truck className="w-6 h-6 text-white" />;
      case 'freight':
        return <Ship className="w-6 h-6 text-white" />;
      case 'customer':
        return <Users className="w-6 h-6 text-white" />;
      case 'master':
        return <Database className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0c2340] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-xl bg-[#006d77] flex items-center justify-center shadow-md">
              {renderIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/50 px-2 py-0.5 rounded border border-teal-500/30">
                  {module.tag}
                </span>
                <span className="text-xs text-slate-300">NRS Cloud ERP Module</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 text-white">
                {module.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Module Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {module.description}
            </p>
          </div>

          {/* Core Functional Checklist (from the flyer) */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#005e6b] mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-600" />
              Core Functional Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {module.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-100 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#006d77] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Advantages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Key Enterprise Value
            </h4>
            <ul className="space-y-2">
              {module.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Metric Banner */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BarChart3 className="w-5 h-5 text-teal-700 shrink-0" />
              <div>
                <span className="text-xs text-teal-800 font-medium block">Measured Benchmark:</span>
                <span className="text-sm font-bold text-teal-950">{module.metrics}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestDemo(module.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <span>Request Demo For This Module</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
