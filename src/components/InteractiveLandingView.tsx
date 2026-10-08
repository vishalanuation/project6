import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  Truck, 
  Train, 
  LayoutGrid, 
  MapPin, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  Users, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Calculator, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { NrsLogo } from './NrsLogo';
import { 
  MODULES_DATA, 
  CAPABILITIES_DATA, 
  BENEFITS_LIST, 
  TRANSPORT_MODES, 
  ModuleData, 
  CapabilityData 
} from '../data/freightData';

const multimodalHeroImage = '/src/assets/images/multimodal_freight_logistics_1791449677775.jpg';
const containerYardImage = '/src/assets/images/container_terminal_reach_stacker_1791449699918.jpg';

interface InteractiveLandingViewProps {
  onSelectModule: (module: ModuleData) => void;
  onSelectCapability: (capability: CapabilityData) => void;
  onRequestDemo: (source?: string) => void;
}

export const InteractiveLandingView: React.FC<InteractiveLandingViewProps> = ({
  onSelectModule,
  onSelectCapability,
  onRequestDemo
}) => {
  // Selected multi-modal tab
  const [selectedMode, setSelectedMode] = useState<string>('ocean');

  // Selected module deep-dive tab
  const [activeModuleId, setActiveModuleId] = useState<string>('shipment-management');

  // Interactive Shipment Lifecycle step
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  // Interactive ROI Calculator state
  const [monthlyShipments, setMonthlyShipments] = useState<number>(180);
  const [hoursPerShipment, setHoursPerShipment] = useState<number>(2.4);

  // Calculations for ROI
  const totalManualHours = Math.round(monthlyShipments * hoursPerShipment);
  const hoursSavedPerMonth = Math.round(totalManualHours * 0.75); // 75% automated
  const fteLiberated = (hoursSavedPerMonth / 160).toFixed(1);
  const annualDollarsSaved = (hoursSavedPerMonth * 38 * 12).toLocaleString();

  const workflowSteps = [
    {
      step: '01',
      title: 'Customer Enquiry',
      desc: 'Shipper submits multi-modal RFQ via portal or EDI. Instant port UN/LOCODE lane validation.',
      status: 'Captured in CRM'
    },
    {
      step: '02',
      title: 'Automated Rate & Tariff',
      desc: 'Tariff engine checks contracted ocean & air rates, applies margin rules, and issues branded quote.',
      status: 'Quote Sent in < 60s'
    },
    {
      step: '03',
      title: 'Booking & Carrier EDI',
      desc: '1-click carrier EDI reservation (COSCO, Maersk, MSC, airlines) and drayage dispatch.',
      status: 'Booking Confirmed'
    },
    {
      step: '04',
      title: 'Live Vessel/Air AIS Tracking',
      desc: 'Continuous real-time geolocation with proactive delay alerts and automated customer milestones.',
      status: 'In Transit'
    },
    {
      step: '05',
      title: 'Invoicing & Profitability',
      desc: 'Multi-currency freight invoice issued, accessorial charges audited, net lane margin settled.',
      status: 'Cleared & Margin +22%'
    }
  ];

  const activeModule = MODULES_DATA.find((m) => m.id === activeModuleId) || MODULES_DATA[0];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900">
      
      {/* ============================================================== */}
      {/* HERO & OPERATIONS CONTROL SECTION */}
      {/* ============================================================== */}
      <section id="operations" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0c2340] to-[#08182b] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Abstract global route lines in hero background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <path d="M100 300 Q 400 100, 700 350 T 1100 250" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M200 450 Q 600 200, 1000 400" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="300" r="5" fill="#38bdf8" />
            <circle cx="700" cy="350" r="6" fill="#2dd4bf" />
            <circle cx="1100" cy="250" r="5" fill="#38bdf8" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#005e6b]/90 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-100 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span>Cloud ERP for Freight Forwarders</span>
              </div>

              <div className="leading-[0.94] tracking-tight font-black uppercase text-4xl sm:text-5xl md:text-6xl text-white">
                <span className="block text-slate-100">FREIGHT</span>
                <span className="block text-[#38bdf8]">FORWARDING</span>
                <span className="block text-slate-100">SOLUTION</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-teal-200 tracking-tight">
                End-to-End Freight Forwarding Management
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Transform traditional freight forwarding operations into a fully digital, automated workflow—from customer enquiry to final shipment delivery.
              </p>

              {/* Tagline Pill & Action Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onRequestDemo('Hero CTA')}
                  className="px-6 py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-900/40 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Schedule Platform Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-xs sm:text-sm font-semibold text-teal-200">
                  Digitize. Automate. Deliver.
                </div>
              </div>

              {/* Verified Audience Banner */}
              <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-slate-300 border-t border-white/10">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-teal-400" />
                </div>
                <span>
                  Built specifically for <strong className="text-white">Freight Forwarders, NVOCCs, 3PLs & 4PLs</strong>
                </span>
              </div>

            </div>

            {/* Right Column: Visual Composite Card with Live Multi-Modal Modes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl">
                
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img 
                    src={multimodalHeroImage} 
                    alt="Multi-modal freight forwarding fleet"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/10">
                    COMPLETE FREIGHT OPERATIONS CONTROL
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-slate-200 font-medium">
                      Manage the entire shipment lifecycle through a single intelligent platform.
                    </p>
                  </div>
                </div>

                {/* 4 Multi-Modal Mode Quick Selector */}
                <div className="p-4 grid grid-cols-4 gap-2 bg-slate-950/70 border-t border-slate-800">
                  {[
                    { id: 'ocean', label: 'OCEAN', icon: Ship },
                    { id: 'air', label: 'AIR', icon: Plane },
                    { id: 'road', label: 'ROAD', icon: Truck },
                    { id: 'rail', label: 'RAIL', icon: Train }
                  ].map((mode) => {
                    const IconComp = mode.icon;
                    const isActive = selectedMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setSelectedMode(mode.id)}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-teal-500/20 border border-teal-400 text-teal-300' 
                            : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <IconComp className="w-5 h-5 mb-1" />
                        <span className="text-[11px] font-bold tracking-wider">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4 CORE OPERATIONAL MODULES (Deep Dive) */}
      {/* ============================================================== */}
      <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#005e6b] mb-2">
            <span>Modular Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
            Complete Freight Operations Control
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Eliminate fragmented spreadsheets and isolated systems. NRS Consulting Cloud ERP connects every department onto one unified operational backbone.
          </p>
        </div>

        {/* 4 Interactive Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODULES_DATA.map((module) => {
            const isSelected = activeModuleId === module.id;
            return (
              <div
                key={module.id}
                onClick={() => {
                  setActiveModuleId(module.id);
                  onSelectModule(module);
                }}
                className={`bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'border-teal-500 shadow-xl ring-2 ring-teal-500/20 translate-y-[-2px]' 
                    : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#006d77] text-white flex items-center justify-center shadow-sm">
                      {module.iconType === 'shipment' && <Truck className="w-6 h-6" />}
                      {module.iconType === 'freight' && <Ship className="w-6 h-6" />}
                      {module.iconType === 'customer' && <Users className="w-6 h-6" />}
                      {module.iconType === 'master' && <Database className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0c2340] tracking-tight">
                    {module.title}
                  </h3>

                  <ul className="mt-3.5 space-y-2 text-xs font-semibold text-slate-700">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006d77] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005e6b]">
                  <span>Explore Workflow</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Module Detail Workspace Preview */}
        <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-900">
                  {activeModule.tag}
                </span>
                <span className="text-xs text-slate-500">Live Architecture Drilldown</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0c2340]">
                {activeModule.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeModule.description}
              </p>

              <div className="space-y-2 pt-2">
                {activeModule.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={() => onRequestDemo(activeModule.title)}
                  className="px-5 py-2.5 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Request Demo For This Module
                </button>
                <span className="text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
                  {activeModule.metrics}
                </span>
              </div>
            </div>

            {/* Simulated Live Cockpit UI for this Module */}
            <div className="lg:col-span-5 bg-slate-900 text-slate-200 rounded-xl p-5 border border-slate-800 shadow-inner font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <span>NRS Cloud ERP Console</span>
                <span className="text-emerald-400 text-[10px]">STATUS: SYNCHRONIZED</span>
              </div>
              <div className="space-y-2.5">
                <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">SELECTED COMPONENT:</span>
                  <span className="text-white font-bold text-xs">{activeModule.title}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">AUTOMATED JOBS:</span>
                  <ul className="text-teal-300 text-[11px] space-y-1 mt-1">
                    {activeModule.items.map((item, idx) => (
                      <li key={idx}>▸ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded border border-slate-700 flex justify-between items-center">
                  <span className="text-slate-400 text-[10px]">INTEGRATION:</span>
                  <span className="text-sky-300 font-semibold text-[11px]">EDI 301 / 304 / e-AWB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* INTERACTIVE WORKFLOW: FROM ENQUIRY TO FINAL SETTLEMENT */}
      {/* ============================================================== */}
      <section id="workflow" className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              End-to-End Lifecycle
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              From Customer Enquiry to Final Shipment Delivery
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Follow how an enquiry navigates seamlessly across NRS Consulting Cloud ERP without double manual data entry.
            </p>
          </div>

          {/* Workflow Step Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-8">
            {workflowSteps.map((wf, idx) => {
              const isCurrent = activeWorkflowStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isCurrent 
                      ? 'bg-[#005e6b] border-teal-400 text-white shadow-lg' 
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-teal-300">{wf.step}</span>
                    <span className="text-[10px] text-slate-300 font-medium">Stage {idx + 1}</span>
                  </div>
                  <span className="text-xs font-bold block">{wf.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Box */}
          <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Active Stage {workflowSteps[activeWorkflowStep].step}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {workflowSteps[activeWorkflowStep].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>
            </div>

            <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="bg-slate-900 border border-teal-500/40 text-teal-300 px-4 py-2 rounded-xl text-xs font-bold">
                Output: {workflowSteps[activeWorkflowStep].status}
              </div>
              <button
                onClick={() => setActiveWorkflowStep((prev) => (prev + 1) % workflowSteps.length)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Advance to next step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6 CAPABILITIES GRID (Navy Matrix from Flyer) */}
      {/* ============================================================== */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005e6b]">
            Unified Operational Control
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight mt-1">
            Core Operational Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The six pillars powering modern freight forwarding efficiency and margin retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((cap) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability(cap)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0d223f] text-teal-300 flex items-center justify-center mb-4 group-hover:bg-[#005e6b] group-hover:text-white transition-colors shadow-sm">
                  {cap.iconName === 'window' && <LayoutGrid className="w-6 h-6" />}
                  {cap.iconName === 'tracking' && <MapPin className="w-6 h-6" />}
                  {cap.iconName === 'docs' && <FileText className="w-6 h-6" />}
                  {cap.iconName === 'billing' && <DollarSign className="w-6 h-6" />}
                  {cap.iconName === 'analytics' && <TrendingUp className="w-6 h-6" />}
                  {cap.iconName === 'carrier' && <UserCheck className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-[#0c2340] group-hover:text-teal-700 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                  {cap.impact}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* INTERACTIVE FREIGHT ROI & TIME-SAVING CALCULATOR */}
      {/* ============================================================== */}
      <section id="roi-calculator" className="bg-slate-100/90 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#005e6b] flex items-center justify-center gap-1.5">
              <Calculator className="w-4 h-4" />
              Interactive Impact Calculator
            </span>
            <h2 className="text-3xl font-extrabold text-[#0c2340] mt-1">
              Calculate Your Operational Hours & Cost Savings
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Adjust your monthly shipment volume to calculate immediate efficiency gains with NRS Consulting.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders on Left */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Monthly Shipments Handled
                    </label>
                    <span className="text-base font-extrabold text-teal-800 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                      {monthlyShipments} shipments
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={monthlyShipments}
                    onChange={(e) => setMonthlyShipments(Number(e.target.value))}
                    className="w-full accent-[#005e6b] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>20 (Boutique forwarder)</span>
                    <span>500</span>
                    <span>1,000+ (Tier-1)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Manual Processing Hours / Shipment (Current)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                      {hoursPerShipment} hrs
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="1.0"
                    max="5.0"
                    step="0.2"
                    value={hoursPerShipment}
                    onChange={(e) => setHoursPerShipment(Number(e.target.value))}
                    className="w-full accent-[#005e6b] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1.0 hr (Streamlined)</span>
                    <span>3.0 hrs</span>
                    <span>5.0 hrs (Spreadsheet heavy)</span>
                  </div>
                </div>

                {/* Key Benefits Checklist Callout */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Direct Proven Benefits
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {BENEFITS_LIST.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Outputs on Right */}
              <div className="lg:col-span-6 bg-[#0c2340] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-300">
                    Projected Operational Yield
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">
                    Efficiency Transformation Summary
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-300 block">Hours Liberated / Mo:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 mt-1 block">
                      {hoursSavedPerMonth} hrs
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      ~{fteLiberated} Full-time equivalents
                    </span>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-300 block">Annual Cost Savings:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-sky-300 mt-1 block">
                      ${annualDollarsSaved}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      Based on average ops wage
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-300">
                    Want a customized assessment for your trade lanes?
                  </span>
                  <button
                    onClick={() => onRequestDemo('ROI Calculator')}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Request Custom Audit
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* TERMINAL OPERATIONS SHOWCASE & INTERMODAL HIGHLIGHT */}
      {/* ============================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#005e6b]">
                  Yard & Intermodal Orchestration
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mt-1">
                  From Ocean Container Terminals to Drayage Dispatch
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Seamlessly bridge marine port container yards, rail ramps, and cross-dock trucking depots. NRS Consulting tracks demurrage and detention grace periods in real time so you avoid unexpected storage fees.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Automated Demurrage & Detention Clocks:</strong>
                    Countdown free days at terminals to prevent carrier penalty surcharges.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Electronic Bill of Lading (e-B/L) Exchange:</strong>
                    Eliminate physical courier delays with secure digital document release.
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onRequestDemo('Terminal Operations')}
                  className="px-6 py-3 bg-[#0c2340] hover:bg-[#08182b] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Terminal Integrations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[300px]">
              <img 
                src={containerYardImage}
                alt="Container reach stacker lifting freight container onto truck at terminal"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FINAL CALL TO ACTION */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-[#0c2340] to-[#005e6b] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Digitize. Automate. Deliver.
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Modernize Your Freight Operations?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Join hundreds of forwarders, NVOCCs, and 3PLs managing their entire logistics lifecycle on NRS Consulting Cloud ERP.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onRequestDemo('Bottom Banner')}
              className="px-8 py-3.5 bg-white text-[#0c2340] hover:bg-slate-100 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Book 1-on-1 Platform Demonstration
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FOOTER */}
      {/* ============================================================== */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <NrsLogo theme="dark" size="md" />
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              End-to-End Freight Forwarding Management and Cloud ERP for modern logistics enterprises worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Core Modules
            </h4>
            <ul className="space-y-2">
              {MODULES_DATA.map((m) => (
                <li key={m.id}>
                  <button 
                    onClick={() => onSelectModule(m)} 
                    className="hover:text-teal-400 transition-colors text-left"
                  >
                    {m.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Multi-Modal Reach
            </h4>
            <ul className="space-y-2">
              <li>Ocean Freight (FCL / LCL)</li>
              <li>Air Cargo &amp; Express Handling</li>
              <li>Road Drayage &amp; Cross-Border Trucking</li>
              <li>Intermodal Rail Operations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Audience
            </h4>
            <ul className="space-y-2">
              <li>International Freight Forwarders</li>
              <li>NVOCC Carriers</li>
              <li>Third-Party Logistics (3PL)</li>
              <li>Fourth-Party Logistics (4PL)</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} NRS Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Innovations • Technology • Consulting</span>
            <span aria-hidden="true">·</span>
            <span>Cloud ERP for Freight</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
