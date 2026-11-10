/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { InteractiveHub } from './components/InteractiveHub';
import { TeamSection } from './components/TeamSection';
import { AdvertisementSection } from './components/AdvertisementSection';
import { ThankYouSection } from './components/ThankYouSection';
import { Footer } from './components/Footer';
import { FloatingMascot } from './components/FloatingMascot';
import { ReportViewerModal } from './components/ReportViewerModal';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedHubTab, setSelectedHubTab] = useState<'team' | 'ad' | 'thanks'>('team');
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (sectionId === 'team' || sectionId === 'ad' || sectionId === 'thanks') {
      setSelectedHubTab(sectionId as 'team' | 'ad' | 'thanks');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-stone-900 font-sans selection:bg-amber-400 selection:text-stone-900">
      {/* Top Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenReport={() => setIsReportModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Storytelling Sections */}
      <main className="flex-1">
        {/* 1. Hero Section - Welcome to Fruvita */}
        <HeroSection
          soundEnabled={soundEnabled}
          onStartStory={() => handleNavigateSection('intro')}
          onShowTeam={() => handleNavigateSection('team')}
        />

        {/* 2. Project Introduction Section */}
        <IntroductionSection soundEnabled={soundEnabled} />

        {/* 3. Why Did We Choose Fruvita? */}
        <WhyChooseSection soundEnabled={soundEnabled} />

        {/* 4. Interactive Navigation Hub (Three Choices) */}
        <InteractiveHub
          selectedTab={selectedHubTab}
          onSelectTab={setSelectedHubTab}
          soundEnabled={soundEnabled}
        />

        {/* 5. First Interactive Section - Meet Our Team */}
        <TeamSection soundEnabled={soundEnabled} />

        {/* 6. Second Interactive Section - Product Advertisement */}
        <AdvertisementSection soundEnabled={soundEnabled} />

        {/* 7. Third Interactive Section - Thank You Message */}
        <ThankYouSection />
      </main>

      {/* Interactive Mascot Floating Companion */}
      <FloatingMascot
        soundEnabled={soundEnabled}
        onNavigateSection={handleNavigateSection}
      />

      {/* Report Laboratory Modal */}
      <ReportViewerModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* Website Footer */}
      <Footer
        soundEnabled={soundEnabled}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
