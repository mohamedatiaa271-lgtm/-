/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { playPopSound } from '../utils/soundEffects';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenReport: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  setSoundEnabled,
  onOpenReport,
  onNavigateSection,
}) => {
  const handleNavClick = (id: string) => {
    if (soundEnabled) playPopSound();
    onNavigateSection(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-amber-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark with mango mascot badge */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-right group cursor-pointer"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
              <img
                src="/mascot/mango_mascot.png"
                alt="فروفيتا مانجو"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">
              فروفيتا 🥭
            </span>
            <span className="text-[11px] font-medium text-amber-700/90 leading-none">
              حكاية مانجو… وأثر بنسيبه
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <button
            onClick={() => handleNavClick('intro')}
            className="hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-amber-500"
          >
            مشروعنا
          </button>
          <button
            onClick={() => handleNavClick('why-fruvita')}
            className="hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-amber-500"
          >
            ليه فروفيتا؟
          </button>
          <button
            onClick={() => handleNavClick('team')}
            className="hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-amber-500"
          >
            إحنا مين؟
          </button>
          <button
            onClick={() => handleNavClick('ad')}
            className="hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-amber-500"
          >
            شوفوا إعلاننا
          </button>
          <button
            onClick={() => handleNavClick('thanks')}
            className="hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 border-transparent hover:border-amber-500"
          >
            رسالة شكر
          </button>
        </nav>

        {/* Zone 3: Actions (Sound Toggle + Lab Report Deep-Dive Button) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              const newState = !soundEnabled;
              setSoundEnabled(newState);
              if (newState) playPopSound();
            }}
            title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
            className="w-10 h-10 rounded-xl bg-amber-100 hover:bg-amber-200/80 text-amber-900 flex items-center justify-center transition-all cursor-pointer border border-amber-300/60"
            aria-label="التحكم في الصوت"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-800" /> : <VolumeX className="w-5 h-5 text-stone-500" />}
          </button>

          <button
            onClick={() => {
              if (soundEnabled) playPopSound();
              onOpenReport();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 rounded-xl hover:from-amber-400 hover:to-orange-500 transition-all shadow-sm hover:shadow-md cursor-pointer border border-amber-300 whitespace-nowrap active:scale-95"
          >
            <BookOpen className="w-4 h-4" />
            <span>ملخص التقرير العلمي</span>
          </button>
        </div>
      </div>
    </header>
  );
};
