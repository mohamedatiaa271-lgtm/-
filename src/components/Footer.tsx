/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/projectData';
import { playPopSound } from '../utils/soundEffects';

interface FooterProps {
  soundEnabled: boolean;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ soundEnabled, onNavigateSection }) => {
  const scrollToTop = () => {
    if (soundEnabled) playPopSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-amber-100/90 via-amber-200/50 to-amber-200/90 border-t-2 border-amber-300 text-stone-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-amber-300/80">
          {/* Brand & Mascot */}
          <div className="flex items-center gap-4 text-right">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-md border-2 border-amber-300 flex items-center justify-center">
              <img
                src="/mascot/mango_mascot.png"
                alt="فروفيتا مانجو"
                referrerPolicy="no-referrer"
                className="w-11 h-11 object-contain animate-float"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black text-amber-950">
                فروفيتا – حكاية المانجو 🥭
              </h3>
              <p className="text-xs font-semibold text-amber-800">
                مشروع تطوير وتسويق المنتجات الغذائية
              </p>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-bold text-amber-950">
            <button
              onClick={() => onNavigateSection('intro')}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              عن المشروع
            </button>
            <span className="text-amber-400">·</span>
            <button
              onClick={() => onNavigateSection('why-fruvita')}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              ليه فروفيتا؟
            </button>
            <span className="text-amber-400">·</span>
            <button
              onClick={() => onNavigateSection('team')}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              إحنا مين؟ (الفريق)
            </button>
            <span className="text-amber-400">·</span>
            <button
              onClick={() => onNavigateSection('ad')}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              الإعلان
            </button>
            <span className="text-amber-400">·</span>
            <button
              onClick={() => onNavigateSection('thanks')}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              رسالة شكر
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 shadow-xs flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5"
            title="الرجوع لأعلى الصفحة"
          >
            <ArrowUp className="w-5 h-5 text-amber-800" />
          </button>
        </div>

        {/* Official Texts specified in Prompt */}
        <div className="text-center space-y-3">
          <p className="text-base sm:text-lg font-black text-amber-950">
            فروفيتا – مشروع تطوير وتسويق المنتجات الغذائية
          </p>
          <p className="text-sm sm:text-base font-bold text-stone-700">
            طالبات الفرقة الرابعة – قسم التغذية وعلوم الأطعمة – جامعة العاصمة – سكشن 4
          </p>
          <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-amber-800 font-medium">
            <span>تم إعداد هذا العمل الأكاديمي بكل حب وإتقان</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>للعام الجامعي 2026 / 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
