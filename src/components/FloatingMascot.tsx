/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Sparkles, MessageCircle } from 'lucide-react';
import { MASCOT_QUOTES } from '../data/projectData';
import { playPopSound } from '../utils/soundEffects';

interface FloatingMascotProps {
  soundEnabled: boolean;
  onNavigateSection: (id: string) => void;
}

export const FloatingMascot: React.FC<FloatingMascotProps> = ({
  soundEnabled,
  onNavigateSection,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);

  const handleMascotClick = () => {
    if (soundEnabled) playPopSound();
    setIsWiggling(true);
    setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    setTimeout(() => setIsWiggling(false), 500);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2 select-none">
      {/* Speech Bubble */}
      {isOpen && (
        <div className="relative max-w-xs sm:max-w-sm p-4 rounded-2xl bg-white border-2 border-amber-300 shadow-xl text-right animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 left-2 text-stone-400 hover:text-stone-700 w-5 h-5 flex items-center justify-center text-xs cursor-pointer"
            title="إغلاق كلام مانجو"
          >
            ✕
          </button>

          <div className="flex items-start gap-2.5">
            <span className="text-xl shrink-0">🥭</span>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-orange-600">مانجو صاحبة الحكاية:</span>
              <p className="text-xs text-stone-800 leading-relaxed font-semibold">
                {MASCOT_QUOTES[quoteIndex]}
              </p>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-amber-100 flex items-center justify-between text-[10px] text-amber-800 font-bold">
            <button
              onClick={handleMascotClick}
              className="text-orange-600 hover:text-orange-700 cursor-pointer"
            >
              قولي حاجة تانية! ✨
            </button>
            <button
              onClick={() => onNavigateSection('team')}
              className="text-amber-800 hover:underline cursor-pointer"
            >
              شوفوا فريقنا 👩🎓
            </button>
          </div>

          {/* Speech bubble tail pointer */}
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b-2 border-l-2 border-amber-300 transform -rotate-45" />
        </div>
      )}

      {/* Mascot Button Trigger */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleMascotClick}
          className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 p-1 shadow-2xl border-2 border-white hover:scale-110 transition-all cursor-pointer ${
            isWiggling ? 'scale-115 rotate-6' : ''
          }`}
          title="اضغط لتتكلم مع مانجو!"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/mascot/mango_mascot.png"
              alt="مانجو صاحبة الحكاية"
              referrerPolicy="no-referrer"
              className="w-14 h-14 object-cover"
            />
          </div>
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-600 text-white text-[10px] font-black flex items-center justify-center border border-white">
            !
          </span>
        </button>

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white/90 backdrop-blur-xs text-amber-950 text-xs font-bold py-1.5 px-3 rounded-full border border-amber-300 shadow-md hover:bg-amber-100 cursor-pointer"
          >
            اسمع مانجو 🥭
          </button>
        )}
      </div>
    </div>
  );
};
