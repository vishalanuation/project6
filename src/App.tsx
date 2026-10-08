import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { FullExactLandingPage } from './components/FullExactLandingPage';
import { DemoRequestModal } from './components/DemoRequestModal';
import { BrochurePreviewModal } from './components/BrochurePreviewModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('freight-forwarding');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState('');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);

    const targetIdMap: Record<string, string> = {
      'freight-forwarding': 'solution-freight',
      'multi-modal': 'solution-multimodal',
      'road-suite': 'solution-road',
      'rail-logistics': 'solution-rail',
      'warehousing-yard': 'solution-warehousing',
      'contact': 'contact-section'
    };

    const targetEl = document.getElementById(targetIdMap[navId] || navId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (topic?: string) => {
    setDemoTopic(topic || '');
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Header matching exact screenshot */}
      <HeaderNav
        activeNav={activeNav}
        onNavClick={handleNavClick}
        onRequestDemo={() => handleOpenDemo('General Inquiry')}
      />

      {/* Main Full Exact Landing Page */}
      <main className="flex-1 w-full">
        <FullExactLandingPage
          onRequestConsultation={handleOpenDemo}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* 8-Page Corporate Catalog Modal */}
      <BrochurePreviewModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Schedule Consultation Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialTopic={demoTopic}
      />
    </div>
  );
}
