import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Printer, BookOpen } from 'lucide-react';

interface BrochurePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochurePreviewModal: React.FC<BrochurePreviewModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 8;

  if (!isOpen) return null;

  const pagesInfo = [
    { title: 'Executive Summary & Global Vision', desc: 'Transforming freight forwarding into an agile, cloud-native enterprise operations engine.' },
    { title: 'Shipment Management Lifecycle', desc: 'Deep dive into multi-modal planning, container milestone telemetry, and exception management.' },
    { title: 'Freight Tariff & Dynamic Procurement', desc: 'Contracted ocean & air tariffs, spot rate procurement, and automated carrier selection.' },
    { title: 'Customer & Quotation CRM Engine', desc: 'Instant multi-modal quotes, surcharge management, and branded web proposals.' },
    { title: 'Master Data Hub & Trade Lanes', desc: 'UN/LOCODE standardization, carrier registries, and index-linked bunker formulas.' },
    { title: 'ERP Agnostic & SAP S/4HANA Deployments', desc: 'Architecture topologies for Oracle, Microsoft, Zoho, SAP, and ERPNext.' },
    { title: 'Demurrage, Detention & Financial Ledger', desc: 'Multi-currency invoicing, VAT/GST cross-border compliance, and net margin analytics.' },
    { title: 'Implementation Roadmap & Contact', desc: '30-day proof of concept timeline, migration services, and global support contracts.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0c2340] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                NRS Consulting · Complete 8-Page Freight Suite Brochure
              </h3>
              <p className="text-xs text-slate-300">
                Official Enterprise Solution Brief (2026 Edition)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              title="Print Brochure"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              title="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Content View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl bg-white border border-slate-200 shadow-xl rounded-xl p-8 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  NRS Consulting Solution Brief
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  PAGE {currentPage} OF {totalPages}
                </span>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                Chapter {currentPage}
              </span>

              <h2 className="text-2xl font-black text-[#0c2340] mt-3">
                {pagesInfo[currentPage - 1].title}
              </h2>

              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {pagesInfo[currentPage - 1].desc}
              </p>

              <div className="mt-6 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Full operational architecture diagrams and multi-modal schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Certified SAP S/4HANA &amp; ERP bi-directional integration benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Real-time EDI 301, 304, 310, 315 &amp; IATA e-AWB protocol tables</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>nrsconsulting.in</span>
              <span>Proprietary &amp; Confidential</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous Page</span>
            </button>
            <span className="text-xs font-semibold text-slate-600 px-2">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Next Page</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              alert('The full 8-page NRS Consulting Freight Forwarding PDF solution document has been prepared for download.');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#005e6b] hover:bg-[#004e59] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Full PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
