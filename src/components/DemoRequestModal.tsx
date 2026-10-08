import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  Ship, 
  Plane, 
  Truck, 
  Train, 
  Sparkles, 
  Building2, 
  Mail, 
  Phone, 
  User 
} from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  initialTopic = ''
}) => {
  const [companyType, setCompanyType] = useState('Freight Forwarder');
  const [modes, setModes] = useState<string[]>(['Ocean', 'Air']);
  const [volume, setVolume] = useState('50 - 250 shipments/mo');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(
    initialTopic ? `Interested in learning more about: ${initialTopic}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const toggleMode = (mode: string) => {
    setModes((prev) => 
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const generatedRef = `NRS-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0c2340] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/40 px-2 py-0.5 rounded border border-teal-500/20">
            NRS Consulting · Freight Solutions
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 text-white">
            Schedule Guided Platform Demo
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            See how our Cloud ERP digitizes your freight lifecycle from quotation to final proof of delivery.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Demo Scheduled Successfully!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. An NRS Consulting logistics solution architect will contact you at <strong className="text-slate-900">{email}</strong> within 1 business day.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-teal-800">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Business Segment:</span>
                  <span className="font-semibold text-slate-900">{companyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Modes:</span>
                  <span className="font-semibold text-slate-900">{modes.join(', ') || 'All modes'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#005e6b] hover:bg-[#004e59] text-white font-semibold text-xs rounded-lg shadow-sm transition-colors"
                >
                  Return to Landing Page
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Organization Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Organization Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Freight Forwarder', 'NVOCC', '3PL', '4PL'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setCompanyType(type)}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-semibold transition-all ${
                        companyType === type
                          ? 'bg-[#0c2340] text-white border-[#0c2340] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-modal operations */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Operating Transport Modes
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'Ocean', icon: Ship },
                    { id: 'Air', icon: Plane },
                    { id: 'Road', icon: Truck },
                    { id: 'Rail', icon: Train }
                  ].map((item) => {
                    const IconComp = item.icon;
                    const isSelected = modes.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleMode(item.id)}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg border text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-2xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 mb-1 ${isSelected ? 'text-teal-700' : 'text-slate-400'}`} />
                        <span>{item.id}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Volume Slider / Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Monthly Shipment Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 text-xs"
                >
                  <option value="Under 50 shipments/mo">&lt; 50 shipments / month</option>
                  <option value="50 - 250 shipments/mo">50 - 250 shipments / month</option>
                  <option value="250 - 1,000 shipments/mo">250 - 1,000 shipments / month</option>
                  <option value="Over 1,000 shipments/mo">1,000+ shipments / month (Enterprise)</option>
                </select>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Logistics"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>
              </div>

              {/* Operational Requirements Note */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Specific Requirements or Pain Points
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Current manual tracking overhead, EDI ocean booking integration..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#005e6b] hover:bg-[#004e59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Live Demonstration</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No credit card required · Free 30-day workflow audit included
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
