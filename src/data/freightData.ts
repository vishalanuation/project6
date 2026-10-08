export interface ModuleData {
  id: string;
  title: string;
  shortTitle: string;
  iconType: 'shipment' | 'freight' | 'customer' | 'master';
  items: string[];
  description: string;
  keyBenefits: string[];
  metrics: string;
  tag: string;
}

export interface CapabilityData {
  id: string;
  title: string;
  iconName: 'window' | 'tracking' | 'docs' | 'billing' | 'analytics' | 'carrier';
  description: string;
  impact: string;
}

export const MODULES_DATA: ModuleData[] = [
  {
    id: 'shipment-management',
    title: 'SHIPMENT MANAGEMENT',
    shortTitle: 'Shipment Lifecycle',
    iconType: 'shipment',
    items: [
      'End-to-End Shipment Monitoring',
      'Multi-modal Shipment Planning',
      'Booking Management',
      'Shipment Alerts & Notifications'
    ],
    description: 'Centralized cockpit for tracking every shipment from initial receipt through custom clearance to final consignee delivery across sea, air, rail, and land legs.',
    keyBenefits: [
      'Real-time milestone progression with automatic exception alerting',
      'Multi-leg carrier coordination across ocean liners, drayage, and feeder vessels',
      'Automated container status integration with AIS satellite tracking'
    ],
    metrics: '99.4% on-time milestone fidelity',
    tag: 'Execution Engine'
  },
  {
    id: 'freight-management',
    title: 'FREIGHT MANAGEMENT',
    shortTitle: 'Freight Procurement',
    iconType: 'freight',
    items: [
      'Rate Management',
      'Carrier Selection',
      'Contracted Tariff Management',
      'Booking Automation'
    ],
    description: 'Dynamic procurement engine managing ocean contracts, air cargo tariffs, spot rates, and automated carrier selection algorithms based on margin and SLA.',
    keyBenefits: [
      'Centralized tariff repository for FCL, LCL, Air cargo, and intermodal freight',
      'Algorithmic carrier matching balancing cost, transit duration, and CO2 footprint',
      'Direct EDI/API electronic booking transmission to tier-1 shipping lines'
    ],
    metrics: '28% reduction in freight procurement costs',
    tag: 'Tariff & Rates'
  },
  {
    id: 'customer-quotation',
    title: 'CUSTOMER & QUOTATION MANAGEMENT',
    shortTitle: 'CRM & Quotes',
    iconType: 'customer',
    items: [
      'Customer Enquiries',
      'Proposal Management',
      'Quote Generation',
      'Customer Communication'
    ],
    description: 'High-speed quoting engine that transforms raw shipper enquiries into comprehensive, margin-protected commercial proposals within seconds.',
    keyBenefits: [
      'Instant quote calculator factoring surcharges, fuel BAF, origin drayage, and customs fees',
      'Custom branded PDF & interactive web proposal generator with 1-click acceptance',
      'Automated customer milestone messaging via email, WhatsApp, and shipper portal'
    ],
    metrics: '4x faster quotation turnaround',
    tag: 'Commercial CRM'
  },
  {
    id: 'master-data',
    title: 'MASTER DATA MANAGEMENT',
    shortTitle: 'Master Data Hub',
    iconType: 'master',
    items: [
      'Customer Master',
      'Carrier Master',
      'Trade Lane Management',
      'Contract Management'
    ],
    description: 'The single source of truth for global logistics operations, unifying shippers, consignees, shipping lines, port UN/LOCODEs, and verified trade lanes.',
    keyBenefits: [
      'Normalized party records preventing duplicate billing, incorrect addresses, or tax IDs',
      'Standardized global trade lane matrix covering 8,500+ commercial ports & hubs',
      'Contract expiration warnings and automated index-linked bunker rate revisions'
    ],
    metrics: '100% data governance compliance',
    tag: 'Core Foundation'
  }
];

export const CAPABILITIES_DATA: CapabilityData[] = [
  {
    id: 'single-window',
    title: 'Single Window Visibility',
    iconName: 'window',
    description: 'Unified pane of glass displaying live status of orders, containers, customs entries, and financials across all operational branches.',
    impact: 'Zero cross-department blindspots'
  },
  {
    id: 'real-time-tracking',
    title: 'Real-Time Tracking',
    iconName: 'tracking',
    description: 'Live GPS, AIS vessel positioning, flight telemetry, and milestone push alerts for proactive customer communication.',
    impact: 'Sub-minute milestone precision'
  },
  {
    id: 'automated-docs',
    title: 'Automated Documentation',
    iconName: 'docs',
    description: 'One-click generation and verification of Bills of Lading (HBL/MBL), Air Waybills (HAWB/MAWB), Packing Lists, and Commercial Invoices.',
    impact: '90% paperwork automation'
  },
  {
    id: 'multi-currency',
    title: 'Multi-Currency Billing',
    iconName: 'billing',
    description: 'Automatic FX rate conversion, split invoicing, VAT/GST compliance, and accurate freight audit balancing across global currencies.',
    impact: 'Zero foreign exchange leakage'
  },
  {
    id: 'profitability',
    title: 'Profitability Analytics',
    iconName: 'analytics',
    description: 'Per-shipment, per-lane, and per-customer margin tracking highlighting hidden accessorial charges and demurrage leakage in real time.',
    impact: '+18% net margin expansion'
  },
  {
    id: 'carrier-performance',
    title: 'Carrier Performance',
    iconName: 'carrier',
    description: 'Objective scorecards rating shipping lines and airlines on transit reliability, rollover rates, invoice accuracy, and container release speed.',
    impact: 'Data-driven procurement leverage'
  }
];

export const BENEFITS_LIST = [
  'Reduced Manual Data Entry',
  'Faster Shipment Processing',
  'Improved Operational Accuracy',
  'Better Customer Responsiveness',
  'Standardized Processes'
];

export const TRANSPORT_MODES = [
  {
    id: 'ocean',
    name: 'OCEAN',
    tagline: 'FCL & LCL Deep Sea Freight',
    description: 'Containerized vessel booking, container tracking, port demurrages management, and electronic Bill of Lading filing.',
    features: ['Direct ocean liner EDI', 'Demurrage & detention calculator', 'Automated VGM generation']
  },
  {
    id: 'air',
    name: 'AIR',
    tagline: 'IATA Cargo & Express Air Freight',
    description: 'Time-critical air freight coordination with chargeable weight calculators, e-AWB compliance, and airport handling.',
    features: ['e-AWB integration', 'ULD container allocation', 'Airport ground handling alerts']
  },
  {
    id: 'road',
    name: 'ROAD',
    tagline: 'FTL, LTL & Drayage Haulage',
    description: 'Cross-border trucking, port drayage dispatch, digital proof of delivery (e-POD), and telematics driver integrations.',
    features: ['Real-time driver e-POD', 'Dynamic drayage scheduling', 'GPS toll fee automation']
  },
  {
    id: 'rail',
    name: 'RAIL',
    tagline: 'Intermodal Freight & Block Trains',
    description: 'Heavy haul intermodal container rail routing, transshipment yard coordination, and dry port staging.',
    features: ['Intermodal ramp management', 'Wagon load balancing', 'Dry port customs clearance']
  }
];
