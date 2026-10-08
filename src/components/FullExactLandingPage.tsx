import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  Truck, 
  Train, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Layers, 
  Zap, 
  Sliders, 
  Users, 
  Cpu, 
  Network, 
  Send, 
  BookOpen, 
  ArrowUp,
  FileText,
  LayoutGrid,
  DollarSign,
  TrendingUp,
  UserCheck,
  Database,
  Eye,
  Settings,
  Building2,
  Clock
} from 'lucide-react';
import { NrsLogo } from './NrsLogo';

// Images for the 5 solutions and hero
const heroLogisticsImage = '/src/assets/images/multimodal_freight_logistics_1791449677775.jpg';
const reachStackerImage = '/src/assets/images/container_terminal_reach_stacker_1791449699918.jpg';
const blueTruckImage = '/src/assets/images/blue_commercial_truck_highway_1791452184337.jpg';
const freightTrainImage = '/src/assets/images/freight_train_intermodal_tracks_1791452201670.jpg';

interface FullExactLandingPageProps {
  onRequestConsultation: (topic?: string) => void;
  onOpenBrochure: () => void;
}

export const FullExactLandingPage: React.FC<FullExactLandingPageProps> = ({
  onRequestConsultation,
  onOpenBrochure
}) => {
  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    phone: '',
    solutionSuite: 'Freight Forwarding Solution',
    deploymentPreference: 'ERP Agnostic Model (Oracle, Microsoft, Zoho)',
    requirements: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.corporateEmail) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      
      {/* ============================================================== */}
      {/* SECTION 1: TOP HERO (Dark Split Layout) */}
      {/* ============================================================== */}
      <section className="w-full bg-[#0c2340] text-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          
          {/* Left Hero Pane (Dark Navy) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                INNOVATIONS • TECHNOLOGY • CONSULTING
              </span>

              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.02]">
                NRS<br />
                CONSULTING
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('explore-solutions')}
                className="px-5 py-3 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact-section')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Contact NRS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Pane (Full Photography & Mode Pills) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full">
            <img 
              src={heroLogisticsImage} 
              alt="Multi-modal logistics fleet: ocean container ship, freight trucks, cargo train, airplane" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Overlay Pill with 4 Transport Modes */}
            <div className="absolute bottom-5 right-5 sm:right-8 bg-[#0c2340]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 flex items-center gap-4 text-xs font-bold text-white shadow-lg">
              <span className="hover:text-teal-300 transition-colors cursor-pointer">OCEAN</span>
              <span className="text-slate-500">|</span>
              <span className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1">
                AIR <Plane className="w-3.5 h-3.5 inline text-sky-400" />
              </span>
              <span className="text-slate-500">|</span>
              <span className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1">
                ROAD <Truck className="w-3.5 h-3.5 inline text-teal-400" />
              </span>
              <span className="text-slate-500">|</span>
              <span className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1">
                RAIL <Train className="w-3.5 h-3.5 inline text-emerald-400" />
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: EXPLORE THE SOLUTIONS (5 Horizontal Cards) */}
      {/* ============================================================== */}
      <section id="explore-solutions" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#005e6b] block">
              INTEGRATED LOGISTICS MANAGEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1">
              EXPLORE THE SOLUTIONS
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg md:text-right leading-relaxed">
            Our unified platform brings together Road and Rail shipment management with warehousing solutions, enabling a fully integrated supply chain ecosystem.
          </p>
        </div>

        {/* 5 Solution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div 
            onClick={() => scrollToSection('solution-freight')}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005e6b] block mb-2">
                OCEAN / AIR / ROAD / RAIL
              </span>
              <h3 className="text-xs font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#005e6b] transition-colors leading-snug">
                FREIGHT FORWARDING SOLUTION
              </h3>
            </div>
            <div className="pt-6 flex justify-end">
              <span className="text-sm font-bold text-slate-400 group-hover:text-[#005e6b] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => scrollToSection('solution-multimodal')}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005e6b] block mb-2">
                ROAD / RAIL / COASTAL
              </span>
              <h3 className="text-xs font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#005e6b] transition-colors leading-snug">
                MULTI-MODAL LOGISTICS SOLUTIONS
              </h3>
            </div>
            <div className="pt-6 flex justify-end">
              <span className="text-sm font-bold text-slate-400 group-hover:text-[#005e6b] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => scrollToSection('solution-road')}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005e6b] block mb-2">
                ROAD
              </span>
              <h3 className="text-xs font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#005e6b] transition-colors leading-snug">
                ROAD TRANSPORTATION SUITE
              </h3>
            </div>
            <div className="pt-6 flex justify-end">
              <span className="text-sm font-bold text-slate-400 group-hover:text-[#005e6b] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => scrollToSection('solution-rail')}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005e6b] block mb-2">
                RAIL
              </span>
              <h3 className="text-xs font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#005e6b] transition-colors leading-snug">
                RAIL LOGISTICS SOLUTIONS
              </h3>
            </div>
            <div className="pt-6 flex justify-end">
              <span className="text-sm font-bold text-slate-400 group-hover:text-[#005e6b] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div 
            onClick={() => scrollToSection('solution-warehousing')}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-500 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#005e6b] block mb-2">
                ROAD / RAIL / COASTAL
              </span>
              <h3 className="text-xs font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#005e6b] transition-colors leading-snug">
                WAREHOUSING &amp; YARD MANAGEMENT
              </h3>
            </div>
            <div className="pt-6 flex justify-end">
              <span className="text-sm font-bold text-slate-400 group-hover:text-[#005e6b] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: SOLUTION 1 — FREIGHT FORWARDING SOLUTION */}
      {/* ============================================================== */}
      <section id="solution-freight" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image with Badge (Equal height) */}
          <div className="lg:col-span-5 h-[520px] sm:h-[580px] lg:h-[640px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group shrink-0">
            <img 
              src={heroLogisticsImage} 
              alt="Freight Forwarding Ocean & Air Fleet"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
            
            {/* Top Overlay: 4 Transport Modes */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-start pointer-events-none">
              <div className="bg-[#0c2340]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold text-white shadow-lg">
                <span className="flex items-center gap-1"><Ship className="w-3 h-3 text-teal-400" /> OCEAN</span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1"><Plane className="w-3 h-3 text-sky-400" /> AIR</span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-emerald-400" /> ROAD</span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1"><Train className="w-3 h-3 text-indigo-400" /> RAIL</span>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2 pointer-events-none">
              <div className="inline-block bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-md">
                CLOUD ERP FOR FREIGHT FORWARDERS
              </div>
              <div className="bg-[#005e6b]/95 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-2 shadow-md">
                <Users className="w-3.5 h-3.5 text-teal-200 shrink-0" />
                <span>Supporting Freight Forwarders, NVOCCs, 3PLs &amp; 4PLs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content Box with Scrollable Interior (Equal height) */}
          <div className="lg:col-span-7 h-[520px] sm:h-[580px] lg:h-[640px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-hidden">
            
            {/* Scrollable interior */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-3 sm:pr-4 space-y-6">
              
              {/* Header Titles */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#005e6b] block">
                  END-TO-END FREIGHT FORWARDING MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                  FREIGHT FORWARDING SOLUTION
                </h2>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block bg-[#005e6b] text-white text-xs font-bold px-3 py-1 rounded-md shadow-2xs">
                  Digitize. Automate. Deliver.
                </span>
                <span className="inline-block bg-[#0c2340] text-teal-300 text-xs font-bold px-3 py-1 rounded-md border border-teal-500/30">
                  Cloud ERP for Freight Forwarders
                </span>
              </div>

              {/* Lead Paragraph */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Transform traditional freight forwarding operations into a fully digital, automated workflow—from customer enquiry to final shipment delivery.
              </p>

              {/* 4 Transport Modes Bar */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 flex items-center justify-around text-xs font-bold text-[#0c2340]">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#005e6b] flex items-center justify-center border border-teal-100">
                    <Ship className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">OCEAN</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">AIR</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">ROAD</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                    <Train className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">RAIL</span>
                </div>
              </div>

              {/* Complete Freight Operations Control (Top Banner & Subtitle matching flyer) */}
              <div className="pt-1">
                <div className="mb-3">
                  <div className="inline-block bg-[#0c2340] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-2xs">
                    COMPLETE FREIGHT OPERATIONS CONTROL
                  </div>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Manage the entire shipment lifecycle through a single intelligent platform.
                  </p>
                </div>

                {/* 4 Core Modules with Teal Circular Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Module 1: Shipment Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Truck className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        SHIPMENT MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />End-to-End Shipment Monitoring</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Multi-modal Shipment Planning</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Booking Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Shipment Alerts &amp; Notifications</li>
                    </ul>
                  </div>

                  {/* Module 2: Freight Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Ship className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        FREIGHT MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Rate Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Carrier Selection</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Contracted Tariff Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Booking Automation</li>
                    </ul>
                  </div>

                  {/* Module 3: Customer & Quotation Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        CUSTOMER &amp; QUOTATION MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Customer Enquiries</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Proposal Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Quote Generation</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Customer Communication</li>
                    </ul>
                  </div>

                  {/* Module 4: Master Data Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        MASTER DATA MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Customer Master</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Carrier Master</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Trade Lane Management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Contract Management</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* 6 Core Control Capabilities (Dark Navy Grid matching flyer bottom-left) */}
              <div className="bg-[#0c2340] text-white rounded-2xl p-4 sm:p-5 shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-teal-300 uppercase block mb-3">
                  CORE CONTROL CAPABILITIES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <LayoutGrid className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Single Window Visibility</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <MapPin className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Real-Time Tracking</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <FileText className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Automated Documentation</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <DollarSign className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Multi-Currency Billing</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <TrendingUp className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Profitability Analytics</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <UserCheck className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-xs font-bold text-white leading-tight">Carrier Performance</span>
                  </div>
                </div>
              </div>

              {/* Supporting Audience Banner (Flyer Bottom-Left) */}
              <div className="bg-[#005e6b] text-white rounded-xl p-3.5 flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  Supporting Freight Forwarders, NVOCCs, 3PLs &amp; 4PLs
                </span>
              </div>

              {/* Benefits Box (Flyer Design) */}
              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  BENEFITS
                </h4>
                <div className="space-y-2">
                  {[
                    'Reduced Manual Data Entry',
                    'Faster Shipment Processing',
                    'Improved Operational Accuracy',
                    'Better Customer Responsiveness',
                    'Standardized Processes'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#005e6b] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Visibility, Automation & Financial Control Deep Dive */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  DETAILED FUNCTIONAL ARCHITECTURE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">VISIBILITY &amp; TRACKING</h5>
                      <p className="text-[11px] leading-relaxed">Real-Time Shipment Visibility · Track &amp; Trace Across Carriers · Exception Alerts · Proactive Notifications · Milestone Monitoring</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">DOCUMENTATION AUTOMATION</h5>
                      <p className="text-[11px] leading-relaxed">Commercial Invoices · Bills of Lading · Waybills · Compliance Documentation · Automated Document Generation</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">PROFITABILITY ANALYSIS</h5>
                      <p className="text-[11px] leading-relaxed">Shipment Margin Analysis · Customer Profitability · Trade Lane Analysis · Revenue vs Expense Tracking</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">WORKFLOW AUTOMATION</h5>
                      <p className="text-[11px] leading-relaxed">Automated Shipment Workflows · Reduced Manual Touchpoints · Process Standardization · Automated Task Management</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">FINANCIAL &amp; BILLING MANAGEMENT</h5>
                      <p className="text-[11px] leading-relaxed">Multi-Currency Billing · Revenue Management · Expense Tracking · Freight Audit &amp; Payments · Carrier Invoice Reconciliation</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="pt-3.5 mt-2 border-t border-slate-100 shrink-0 flex items-center justify-between bg-white z-10">
              <button
                onClick={() => onRequestConsultation('Freight Forwarding Solution')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#005e6b] hover:text-[#0c2340] transition-colors cursor-pointer group"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 select-none">
                <span>Scroll details</span>
                <span className="text-teal-600 font-bold">↕</span>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: SOLUTION 2 — MULTI-MODAL LOGISTICS SOLUTIONS */}
      {/* ============================================================== */}
      <section id="solution-multimodal" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Content Box with Scrollable Interior (Equal height) */}
          <div className="lg:col-span-7 h-[520px] sm:h-[580px] lg:h-[640px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-hidden">
            
            {/* Scrollable interior */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-3 sm:pr-4 space-y-6">
              
              {/* Header Titles */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#005e6b] block">
                  ONE NETWORK. ONE PLATFORM. ENDLESS POSSIBILITIES.
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                  MULTI-MODAL LOGISTICS SOLUTIONS
                </h2>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block bg-[#005e6b] text-white text-xs font-bold px-3 py-1 rounded-md shadow-2xs">
                  One Network. One Platform. Endless Possibilities.
                </span>
                <span className="inline-block bg-[#0c2340] text-teal-300 text-xs font-bold px-3 py-1 rounded-md border border-teal-500/30">
                  OEMs &amp; LSPs Unified Ecosystem
                </span>
              </div>

              {/* 3 Transport Modes Bar (Road, Rail, Coastal matching flyer) */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 flex items-center justify-around text-xs font-bold text-[#0c2340]">
                <div className="flex items-center gap-2 hover:text-[#005e6b] transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">ROAD</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-2 hover:text-[#005e6b] transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                    <Train className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">RAIL</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-2 hover:text-[#005e6b] transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#005e6b] flex items-center justify-center border border-teal-100">
                    <Ship className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider text-[11px]">COASTAL</span>
                </div>
              </div>

              {/* Lead Paragraphs */}
              <div className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  Multi-modal logistics is redefining how supply chains operate—enabling seamless movement of goods across road, rail, and coastal networks through a single, integrated service provider.
                </p>
                <p>
                  We empower both OEMs and Logistics Service Providers (LSPs) to collaborate, optimize, and scale operations effortlessly.
                </p>
              </div>

              {/* 4 Core Pillars Dark Navy Bar (Flyer Image 1 bottom-left) */}
              <div className="bg-[#0c2340] text-white rounded-2xl p-4 sm:p-5 shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-teal-300 uppercase block mb-3">
                  CORE OPERATIONAL ADVANTAGES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <Eye className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-[11px] font-bold text-white leading-tight">End-to-End Visibility</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <Settings className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-[11px] font-bold text-white leading-tight">Optimized Operations</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <DollarSign className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-[11px] font-bold text-white leading-tight">Cost Efficiency</span>
                  </div>
                  <div className="bg-[#142f54] border border-[#1e4270] rounded-xl p-3 flex flex-col items-center text-center justify-center hover:bg-[#183965] transition-colors">
                    <Clock className="w-5 h-5 text-teal-400 mb-1.5" />
                    <span className="text-[11px] font-bold text-white leading-tight">Just-In-Time Delivery</span>
                  </div>
                </div>
              </div>

              {/* Supporting Audience Banner (Flyer Image 1 bottom-left) */}
              <div className="bg-[#005e6b] text-white rounded-xl p-3.5 flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  Supporting OEMs, Shippers, 3PLs, 4PLs and Logistics Service Providers.
                </span>
              </div>

              {/* Key Benefits (5 items with Circular Teal Icons matching Flyer Image 1) */}
              <div className="pt-1">
                <div className="mb-3">
                  <div className="inline-block bg-[#0c2340] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-2xs">
                    KEY BENEFITS
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Benefit 1 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        END-TO-END VISIBILITY
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Track shipments across all mode with complete transparency and real-time insights.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        OPTIMIZED OPERATIONS
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Improve efficiency through streamlined planning, scheduling, and execution.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        COST EFFICIENCY
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Leverage economies of scale by integrating multiple logistics services under one platform.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        INFRASTRUCTURE-FREE SCALABILITY
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Reduce capital investment with managed warehousing and yard solutions.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 5 */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        JUST-IN-TIME DELIVERY
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Ensure precise delivery timelines through intelligent coordination and planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUILT FOR THE FUTURE OF LOGISTICS (Flyer Image 1 bottom-right card) */}
              <div className="bg-[#0c2340] text-white rounded-2xl p-5 shadow-md space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block">
                  BUILT FOR THE FUTURE OF LOGISTICS
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Our unified platform brings together Road and Rail shipment management with warehousing solutions, enabling a fully integrated supply chain ecosystem.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  For LSPs, this is a game changer—offering complete control, enhanced service capabilities, and the ability to deliver end-to-end value to customers.
                </p>
              </div>

              {/* COMPREHENSIVE CAPABILITIES (4 Modules with Circular Icons matching Flyer Image 2) */}
              <div className="pt-1">
                <div className="mb-3">
                  <div className="inline-block bg-[#0c2340] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-2xs">
                    COMPREHENSIVE CAPABILITIES
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Module 1: Multi-Modal Operations */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Truck className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        MULTI-MODAL OPERATIONS
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Multi-modal transportation (Road, Rail &amp; Coastal)</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Contract logistics and feeder line management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Load planning and shipment scheduling</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Assembling and kitting services</li>
                    </ul>
                  </div>

                  {/* Module 2: Warehousing & Yard Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        WAREHOUSING &amp; YARD MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Warehousing and yard management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Inventory and stock visibility</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Yard planning and optimization</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Dock and gate scheduling</li>
                    </ul>
                  </div>

                  {/* Module 3: Real-Time Visibility & Traceability */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        REAL-TIME VISIBILITY &amp; TRACEABILITY
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Real-time tracking &amp; traceability</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Milestone monitoring</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Exception management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />End-to-end status updates</li>
                    </ul>
                  </div>

                  {/* Module 4: Financial & Billing Management */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#005e6b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
                        FINANCIAL &amp; BILLING MANAGEMENT
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Integrated billing and invoicing</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Expense management</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Revenue tracking</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b] shrink-0" />Settlement management</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="pt-3.5 mt-2 border-t border-slate-100 shrink-0 flex items-center justify-between bg-white z-10">
              <button
                onClick={() => onRequestConsultation('Multi-Modal Logistics Solutions')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#005e6b] hover:text-[#0c2340] transition-colors cursor-pointer group"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 select-none">
                <span>Scroll details</span>
                <span className="text-teal-600 font-bold">↕</span>
              </span>
            </div>

          </div>

          {/* Right Column: Reach Stacker Image with Glassmorphic Badges (Equal height) */}
          <div className="lg:col-span-5 h-[520px] sm:h-[580px] lg:h-[640px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group shrink-0">
            <img 
              src={reachStackerImage} 
              alt="Container Reach Stacker at Intermodal Yard"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
            
            {/* Top Overlay: 3 Transport Modes */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-start pointer-events-none">
              <div className="bg-[#0c2340]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold text-white shadow-lg">
                <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-emerald-400" /> ROAD</span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1"><Train className="w-3 h-3 text-indigo-400" /> RAIL</span>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1"><Ship className="w-3 h-3 text-teal-400" /> COASTAL</span>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2 pointer-events-none">
              <div className="inline-block bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-md">
                MULTIMODAL LOGISTICS NETWORK
              </div>
              <div className="bg-[#005e6b]/95 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-2 shadow-md">
                <Users className="w-3.5 h-3.5 text-teal-200 shrink-0" />
                <span>Supporting OEMs, Shippers, 3PLs, 4PLs &amp; LSPs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: SOLUTION 3 — ROAD TRANSPORTATION SUITE */}
      {/* ============================================================== */}
      <section id="solution-road" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Commercial Blue Truck Photo (Equal height) */}
          <div className="lg:col-span-5 h-[520px] sm:h-[580px] lg:h-[640px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group shrink-0">
            <img 
              src={blueTruckImage} 
              alt="Modern Blue Commercial Freight Semi-Truck"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-md">
              CLOUD ERP FOR TRANSPORTERS
            </div>
          </div>

          {/* Right Column: Road Transport Suite Details (Equal height) */}
          <div className="lg:col-span-7 h-[520px] sm:h-[580px] lg:h-[640px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-hidden">
            
            {/* Scrollable interior */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-3 sm:pr-4 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#005e6b] block">
                  END-TO-END ROAD TRANSPORTATION MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                  ROAD TRANSPORTATION SUITE
                </h2>
              </div>

              <div>
                <span className="font-extrabold text-[#005e6b] text-sm block">
                  One Powerful Platform. Complete Operational Control.
                </span>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Transform your enterprise into a future-ready, intelligent organization with secure Cloud ERP, Business AI, and advanced Transport Management capabilities.
                </p>
              </div>

              {/* Fleet & Operations Management */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  FLEET &amp; OPERATIONS MANAGEMENT
                </h3>
                <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Fleet Management</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Route Planning &amp; Optimization</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Trip Management</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Driver Management</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Fuel Monitoring</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />Toll &amp; Tax Management</span>
                  </div>
                </div>
              </div>

              {/* Real-Time Visibility & Financial Control */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  REAL-TIME VISIBILITY &amp; FINANCIAL CONTROL
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">REAL-TIME VISIBILITY</h5>
                      <p className="text-[11px] leading-relaxed">Live Track &amp; Trace · Vehicle Monitoring · Trip Status Updates · Proof of Delivery (POD) Management</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">COMPLIANCE &amp; REPORTING</h5>
                      <p className="text-[11px] leading-relaxed">Statutory Compliance · Advanced Analytics · Operational Dashboards · Performance Insights</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">FINANCIAL &amp; SETTLEMENT MANAGEMENT</h5>
                      <p className="text-[11px] leading-relaxed">Automated Invoicing · Revenue Accounting · Expense Management · Settlement Management · Incentive Management · Budgeting &amp; Cost Control</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-2">
                  BENEFITS
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-700 font-semibold">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Improved fleet utilization</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Reduced operational costs</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Better route efficiency</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Increased driver productivity</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Centralized operations management</span>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="pt-3.5 mt-2 border-t border-slate-100 shrink-0 flex items-center justify-between bg-white z-10">
              <button
                onClick={() => onRequestConsultation('Road Transportation Suite')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#005e6b] hover:text-[#0c2340] transition-colors cursor-pointer group"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 select-none">
                <span>Scroll details</span>
                <span className="text-teal-600 font-bold">↕</span>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: SOLUTION 4 — RAIL LOGISTICS SOLUTIONS */}
      {/* ============================================================== */}
      <section id="solution-rail" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Content Box with Scrollable Interior (Equal height) */}
          <div className="lg:col-span-7 h-[520px] sm:h-[580px] lg:h-[640px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-hidden">
            
            {/* Scrollable interior */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-3 sm:pr-4 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#005e6b] block">
                  END-TO-END RAIL SHIPMENT MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                  RAIL LOGISTICS SOLUTIONS
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A powerful, all-in-one platform built for rail operators, shippers, and logistics service providers to manage containerized and non-containerized cargo with complete control, visibility, and efficiency across every stage of the shipment lifecycle.
              </p>

              {/* Key Features (6-box grid) */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      TRIP MANAGEMENT
                    </h4>
                    <p className="text-xs text-slate-600">Plan, execute, and monitor trips with ease.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      RAKE PLANNING
                    </h4>
                    <p className="text-xs text-slate-600">Efficiently allocate and manage rake utilization.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      LOAD PLANNING
                    </h4>
                    <p className="text-xs text-slate-600">Optimize cargo distribution for maximum efficiency.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      FOIS INTEGRATION
                    </h4>
                    <p className="text-xs text-slate-600">Seamless integration with Indian Railways for RR generation.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      ASSET MANAGEMENT
                    </h4>
                    <p className="text-xs text-slate-600">Track and manage assets, including TXR operations.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      TRACK &amp; TRACE
                    </h4>
                    <p className="text-xs text-slate-600">Real-time visibility of shipments across the journey.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      BILLING &amp; EXPENSE MANAGEMENT
                    </h4>
                    <p className="text-xs text-slate-600">Streamline invoicing and control operational costs.</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      ANALYTICS &amp; REPORTING
                    </h4>
                    <p className="text-xs text-slate-600">Actionable insights for operational and strategic decision making.</p>
                  </div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-2">
                  CORE PILLARS
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-700 font-semibold">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Complete Visibility</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Operational Excellence</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Smarter Decisions</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Stronger Collaboration</span>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="pt-3.5 mt-2 border-t border-slate-100 shrink-0 flex items-center justify-between bg-white z-10">
              <button
                onClick={() => onRequestConsultation('Rail Logistics Solutions')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#005e6b] hover:text-[#0c2340] transition-colors cursor-pointer group"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 select-none">
                <span>Scroll details</span>
                <span className="text-teal-600 font-bold">↕</span>
              </span>
            </div>

          </div>

          {/* Right Column: Rail Tracks Image (Equal height) */}
          <div className="lg:col-span-5 h-[520px] sm:h-[580px] lg:h-[640px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group shrink-0">
            <img 
              src={freightTrainImage} 
              alt="Intermodal Rail Freight Double Stack Train"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-md">
              RAIL INTERMODAL LOGISTICS
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: SOLUTION 5 — WAREHOUSING & YARD MANAGEMENT */}
      {/* ============================================================== */}
      <section id="solution-warehousing" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image with Badge (Equal height) */}
          <div className="lg:col-span-5 h-[520px] sm:h-[580px] lg:h-[640px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group shrink-0">
            <img 
              src={reachStackerImage} 
              alt="Warehousing and Yard Management Logistics"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-[#0c2340]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-md">
              MULTIMODAL LOGISTICS SOLUTIONS
            </div>
          </div>

          {/* Right Column: Content Box with Scrollable Interior (Equal height) */}
          <div className="lg:col-span-7 h-[520px] sm:h-[580px] lg:h-[640px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 overflow-hidden">
            
            {/* Scrollable interior */}
            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-3 sm:pr-4 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#005e6b] block">
                  WAREHOUSING FOR A FULLY INTEGRATED SUPPLY CHAIN
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
                  WAREHOUSING &amp; YARD MANAGEMENT
                </h2>
              </div>

              <div>
                <span className="font-extrabold text-[#005e6b] text-sm block">
                  One Network. One Platform. Endless Possibilities.
                </span>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Our unified platform brings together Road and Rail shipment management with warehousing solutions, enabling a fully integrated supply chain ecosystem.
                </p>
              </div>

              {/* 4 Cards Grid */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  WAREHOUSING &amp; YARD MANAGEMENT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      WAREHOUSING &amp; YARD MANAGEMENT
                    </h4>
                    <p className="text-xs text-slate-600">Warehousing and yard management</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      INVENTORY VISIBILITY
                    </h4>
                    <p className="text-xs text-slate-600">Inventory and stock visibility</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      YARD PLANNING
                    </h4>
                    <p className="text-xs text-slate-600">Yard planning and optimization</p>
                  </div>
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-xs font-bold text-[#0c2340] uppercase tracking-wide mb-1">
                      DOCK &amp; GATE SCHEDULING
                    </h4>
                    <p className="text-xs text-slate-600">Dock and gate scheduling</p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Capabilities */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-3">
                  COMPREHENSIVE CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">WAREHOUSING &amp; YARD MANAGEMENT</h5>
                      <p className="text-[11px] leading-relaxed">Warehousing and yard management · Inventory and stock visibility · Yard planning and optimization · Dock and gate scheduling</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">FINANCIAL &amp; BILLING MANAGEMENT</h5>
                      <p className="text-[11px] leading-relaxed">Integrated billing and invoicing · Expense management · Revenue tracking · Settlement management</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0c2340] mb-1">REAL-TIME VISIBILITY &amp; TRACEABILITY</h5>
                      <p className="text-[11px] leading-relaxed">Real-time tracking &amp; traceability · Milestone monitoring · Exception management · End-to-end status updates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="pt-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] mb-2">
                  KEY BENEFITS
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-700 font-semibold">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />End-to-End Visibility</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Optimized Operations</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Cost Efficiency</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Infrastructure-Free Scalability</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#005e6b]" />Just-In-Time Delivery</span>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="pt-3.5 mt-2 border-t border-slate-100 shrink-0 flex items-center justify-between bg-white z-10">
              <button
                onClick={() => onRequestConsultation('Warehousing & Yard Management')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#005e6b] hover:text-[#0c2340] transition-colors cursor-pointer group"
              >
                <span>DISCUSS THIS SOLUTION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 select-none">
                <span>Scroll details</span>
                <span className="text-teal-600 font-bold">↕</span>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: ENTERPRISE INFRASTRUCTURE — FLEXIBLE DEPLOYMENT */}
      {/* ============================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#005e6b] block">
            // ENTERPRISE INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1 uppercase">
            FLEXIBLE DEPLOYMENT. MAXIMUM CHOICE.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Our solution gives customers the flexibility to choose a best-of-breed ERP while seamlessly leveraging a world-class transport management system.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: ERP Agnostic Model (Tier 01) */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-[#005e6b] flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">TIER 01</span>
              </div>

              <h3 className="text-base font-extrabold text-[#0c2340] tracking-tight mb-2">
                ERP AGNOSTIC MODEL
              </h3>

              <p className="text-xs text-slate-600 mb-4">
                Works seamlessly alongside your preferred ERP system such as:
              </p>

              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {/* Oracle Logo Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 transition-all">
                  <svg className="h-3.5 w-auto shrink-0" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.7 2C3.45 2 0 5.45 0 9.7C0 13.95 3.45 17.4 7.7 17.4H12.3C16.55 17.4 20 13.95 20 9.7C20 5.45 16.55 2 12.3 2H7.7ZM12 14.1H8C5.55 14.1 3.6 12.15 3.6 9.7C3.6 7.25 5.55 5.3 8 5.3H12C14.45 5.3 16.4 7.25 16.4 9.7C16.4 12.15 14.45 14.1 12 14.1Z"
                      fill="#C74634"
                    />
                  </svg>
                  <span className="text-[#C74634] font-black text-xs tracking-wider">
                    ORACLE
                  </span>
                </div>

                {/* Microsoft Logo Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 transition-all">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 21 21" fill="none">
                    <rect x="0.5" y="0.5" width="9" height="9" fill="#F25022" />
                    <rect x="11.5" y="0.5" width="9" height="9" fill="#7FBA00" />
                    <rect x="0.5" y="11.5" width="9" height="9" fill="#00A4EF" />
                    <rect x="11.5" y="11.5" width="9" height="9" fill="#FFB900" />
                  </svg>
                  <span className="font-semibold text-xs text-slate-700 tracking-tight font-sans">
                    Microsoft
                  </span>
                </div>

                {/* Zoho Logo Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 transition-all">
                  <div className="flex items-center -space-x-0.5 shrink-0">
                    <span className="w-3.5 h-3.5 rounded-xs bg-[#E42528] text-white text-[8px] font-black flex items-center justify-center leading-none shadow-2xs">Z</span>
                    <span className="w-3.5 h-3.5 rounded-xs bg-[#009640] text-white text-[8px] font-black flex items-center justify-center leading-none shadow-2xs">O</span>
                    <span className="w-3.5 h-3.5 rounded-xs bg-[#0083CA] text-white text-[8px] font-black flex items-center justify-center leading-none shadow-2xs">H</span>
                    <span className="w-3.5 h-3.5 rounded-xs bg-[#F58220] text-white text-[8px] font-black flex items-center justify-center leading-none shadow-2xs">O</span>
                  </div>
                  <span className="font-black text-xs text-slate-800 tracking-tight">
                    ZOHO
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                and your existing ERP landscape
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Bi-directional Middleware</span>
            </div>
          </div>

          {/* Card 2: SAP Native Deployment (Tier 02 - Dark Card) */}
          <div className="bg-[#0c2340] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-teal-300 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#005e6b] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    ENTERPRISE TIER
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">TIER 02</span>
                </div>
              </div>

              <h3 className="text-base font-extrabold text-white tracking-tight mb-2">
                SAP NATIVE DEPLOYMENT
              </h3>

              <p className="text-xs text-slate-300 mb-3">
                Deploy fully on:
              </p>

              <ul className="space-y-2 text-xs font-semibold text-slate-200 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>SAP S/4HANA Cloud ERP</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>SAP S/4HANA Cloud ERP Private</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>SAP Business Technology Platform</span>
                </li>
              </ul>

              <div className="inline-block px-3 py-1 rounded-md border border-sky-400/50 bg-sky-950/60 text-[#38bdf8] font-bold text-xs tracking-wider mb-6">
                SAP® Ecosystem Ready
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center gap-1.5 text-xs font-semibold text-teal-300">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>SAP BTP Direct Cloud Connect</span>
            </div>
          </div>

          {/* Card 3: Single Platform Model (Tier 03) */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-[#005e6b] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">TIER 03</span>
              </div>

              <h3 className="text-base font-extrabold text-[#0c2340] tracking-tight mb-2">
                SINGLE PLATFORM MODEL
              </h3>

              <p className="text-xs text-slate-600 mb-3">
                Run ERP and operations in single open-source platforms such as:
              </p>

              <div className="inline-block px-3.5 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-[#0070f3] font-extrabold text-xs tracking-wider mb-3">
                ERPNext®
              </div>

              <p className="text-xs text-slate-600 mb-6">
                Unified transport operations, inventory, payroll, and general ledger under one single system.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Open Source Flexibility</span>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-100 border border-slate-200/90 rounded-xl p-4 text-center text-xs font-semibold text-slate-700 italic">
          "This flexibility ensures you get the best combination of enterprise resource planning and advanced logistics management—without compromise."
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: VALUE PROPOSITION & BUSINESS OUTCOMES */}
      {/* ============================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#005e6b] block">
            // ENTERPRISE ECONOMICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1 uppercase">
            VALUE PROPOSITION &amp; BUSINESS OUTCOMES
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            A solution that grows with you—simple to start, powerful to scale.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#005e6b] flex items-center justify-center mb-4 border border-teal-200">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0c2340] uppercase tracking-wide mb-2">
                PLATFORM INDEPENDENT
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Seamlessly integrates with your existing systems—no restrictions, no limitations.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span>VERIFIED BENEFIT</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#005e6b] flex items-center justify-center mb-4 border border-teal-200">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0c2340] uppercase tracking-wide mb-2">
                PLUG &amp; PLAY MODEL
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Quick and easy deployment with minimal disruption to your current operations.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span>VERIFIED BENEFIT</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#005e6b] flex items-center justify-center mb-4 border border-teal-200">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0c2340] uppercase tracking-wide mb-2">
                FLEXIBLE DEPLOYMENT OPTIONS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Choose how you implement—modular, fully integrated, or standalone.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span>VERIFIED BENEFIT</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#005e6b] flex items-center justify-center mb-4 border border-teal-200">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0c2340] uppercase tracking-wide mb-2">
                BUILT FOR ALL SIZES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Whether you're a small transporter or a large enterprise, Shipper, 3PL/4PL operator, our solution adapts to your scale and complexity.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span>VERIFIED BENEFIT</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: 16 VERIFIED BUSINESS OUTCOMES (Dark Navy Box) */}
      {/* ============================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#0c2340] rounded-3xl p-8 sm:p-10 shadow-xl text-white">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-teal-300 uppercase block">
                DOCUMENTED IMPACT METRICS
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-0.5">
                VERIFIED BUSINESS OUTCOMES
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-teal-300 border border-white/15 text-xs font-bold">
              16 Documented Outcomes
            </span>
          </div>

          {/* 16 Pills in 4x4 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Reduced Delays',
              'Fewer Manual Errors',
              'Faster Decision Making',
              'Better Cost Control',
              'Improved Profitability',
              'Stronger Customer Experience',
              'Complete Financial Visibility',
              'Future-Ready Freight Operations',
              'Enhanced Operational Visibility',
              'Improved Asset Utilization',
              'Improved Fleet Utilization',
              'Reduced Manual Intervention',
              'Faster Billing Cycles',
              'Better Compliance Management',
              'Infrastructure-Free Scalability',
              'Scalable for Future Growth'
            ].map((outcome, idx) => (
              <div 
                key={idx}
                className="bg-[#142f54] border border-[#1e4270] rounded-xl px-3.5 py-2.5 flex items-center gap-2 text-xs font-bold text-slate-100 shadow-2xs hover:bg-[#183965] transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{outcome}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 11: CONTACT US (Dark Navy Box with Form) */}
      {/* ============================================================== */}
      <section id="contact-section" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#0c2340] rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Contact Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <NrsLogo theme="dark" size="md" />
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-4">
                  CONTACT US
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Direct communication channels for enterprise logistics planning.
                </p>
              </div>

              {/* Executive Headquarters */}
              <div className="bg-[#142f54]/90 border border-[#1e4270] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                    EXECUTIVE HEADQUARTERS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    NRS Consulting
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    AIHP Skyline, Ground Floor, Plot No. 97A, Sector 32, Gurugram-122022, Haryana, India
                  </p>
                </div>
              </div>

              {/* Direct Contact Lines */}
              <div className="bg-[#142f54]/90 border border-[#1e4270] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                    DIRECT CONTACT LINES
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white mt-0.5">
                    +91 124 438 7128 &nbsp;·&nbsp; +91 124 436 4294
                  </p>
                </div>
              </div>

              {/* Official Inquiries */}
              <div className="bg-[#142f54]/90 border border-[#1e4270] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                    OFFICIAL INQUIRIES
                  </span>
                  <a href="mailto:reachus@nrsconsulting.in" className="text-xs sm:text-sm text-teal-200 hover:underline mt-0.5 block">
                    reachus@nrsconsulting.in
                  </a>
                </div>
              </div>

              {/* Corporate Portal */}
              <div className="bg-[#142f54]/90 border border-[#1e4270] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                    CORPORATE PORTAL
                  </span>
                  <a href="https://www.nrsconsulting.in" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-teal-200 hover:underline mt-0.5 block">
                    www.nrsconsulting.in
                  </a>
                </div>
              </div>

              {/* QR Code Scan Box */}
              <div className="bg-white text-slate-800 rounded-2xl p-3.5 inline-flex items-center gap-3.5 max-w-xs shadow-md">
                <div className="w-14 h-14 bg-slate-900 rounded-lg p-1 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm3 8h3v3h-3v-3zm-3 3h3v3h-3v-3zm3 3h3v3h-3v-3zm-3 3h3v3h-3v-3zM14 12h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 block leading-tight">
                    SCAN TO CONNECT WITH US
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                    nrsconsulting.in
                  </span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-700 tracking-wider block">
                  // DEPLOYMENT CONSULTATION
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0c2340] uppercase tracking-wide mt-0.5">
                  CONNECT WITH SOLUTIONS ARCHITECTURE TEAM
                </h4>

                {formSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-900">Inquiry Transmitted!</h5>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An NRS Consulting logistics solution architect will reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-[#005e6b] text-white text-xs font-semibold rounded-lg mt-2 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 mt-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          CORPORATE EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={formData.corporateEmail}
                          onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          PHONE / MOBILE
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 / International"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          SOLUTION SUITE
                        </label>
                        <select
                          value={formData.solutionSuite}
                          onChange={(e) => setFormData({ ...formData, solutionSuite: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
                        >
                          <option value="Freight Forwarding Solution">Freight Forwarding Solution</option>
                          <option value="Multi-Modal Logistics Solutions">Multi-Modal Logistics Solutions</option>
                          <option value="Road Transportation Suite">Road Transportation Suite</option>
                          <option value="Rail Logistics Solutions">Rail Logistics Solutions</option>
                          <option value="Warehousing & Yard Management">Warehousing & Yard Management</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        DEPLOYMENT PREFERENCE
                      </label>
                      <select
                        value={formData.deploymentPreference}
                        onChange={(e) => setFormData({ ...formData, deploymentPreference: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
                      >
                        <option value="ERP Agnostic Model (Oracle, Microsoft, Zoho)">ERP Agnostic Model (Oracle, Microsoft, Zoho)</option>
                        <option value="SAP Native Deployment (S/4HANA & BTP)">SAP Native Deployment (S/4HANA & BTP)</option>
                        <option value="Single Platform Model (ERPNext)">Single Platform Model (ERPNext)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        OPERATIONAL REQUIREMENTS
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details about your shipment volume, fleet size, or existing systems..."
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#005e6b] hover:bg-[#004e59] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT INQUIRY TO NRS CONSULTING</span>
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 12: FOOTER */}
      {/* ============================================================== */}
      <footer className="bg-[#071326] text-slate-400 py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <NrsLogo theme="dark" size="sm" />
            <span className="text-[11px] text-slate-400">
              © 2026 NRS Consulting™. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>8-Page Corporate Catalog</span>
            </button>

            <a 
              href="mailto:reachus@nrsconsulting.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>reachus@nrsconsulting.in</span>
            </a>

            <a 
              href="tel:+911244387128"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 124 438 7128</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
};
