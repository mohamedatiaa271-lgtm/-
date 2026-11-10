/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowDown, Users, Heart, ChevronDown, CheckCircle } from 'lucide-react';
import { MASCOT_QUOTES, UNIVERSITY_INFO } from '../data/projectData';
import { playPopSound, playChimeSound, playSplashSound } from '../utils/soundEffects';

interface HeroSectionProps {
  soundEnabled: boolean;
  onStartStory: () => void;
  onShowTeam: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  soundEnabled,
  onStartStory,
  onShowTeam,
}) => {
  const [showIdentityMessage, setShowIdentityMessage] = useState(false);
  const [mascotQuoteIndex, setMascotQuoteIndex] = useState(0);
  const [mascotWiggle, setMascotWiggle] = useState(false);

  const handleMascotClick = () => {
    if (soundEnabled) playPopSound();
    setMascotWiggle(true);
    setMascotQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    setTimeout(() => setMascotWiggle(false), 600);
  };

  const handleWhoAreWeClick = () => {
    if (soundEnabled) playChimeSound();
    setShowIdentityMessage(true);
  };

  return (
    <section id="hero" className="relative pt-8 pb-20 overflow-hidden">
      {/* Background radial gradients for warm mango atmosphere */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic context banner */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-2xl py-2.5 px-5 backdrop-blur-xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
            <span>{UNIVERSITY_INFO.university}</span>
            <span className="text-amber-400">·</span>
            <span>{UNIVERSITY_INFO.faculty}</span>
            <span className="text-amber-400">·</span>
            <span className="font-bold text-amber-950">{UNIVERSITY_INFO.section}</span>
          </div>
          <div className="text-xs text-amber-800 font-semibold bg-white/70 py-1 px-3 rounded-lg border border-amber-200">
            {UNIVERSITY_INFO.course} · 2026/2027
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Right Column (Arabic RTL: Headline and Story Intro) */}
          <div className="lg:col-span-7 text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs md:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-orange-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>مشروع تخرج الفرقة الرابعة – قسم التغذية وعلوم الأطعمة</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.25]">
                أهلًا بيكم في عالم <span className="bg-gradient-to-l from-orange-600 via-amber-600 to-amber-500 bg-clip-text text-transparent">فروفيتا!</span> 🥭
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-amber-800">
                حكاية مانجو… وأثر بنسيبه
              </p>
            </div>

            {/* Mascot Interactive Egyptian Arabic Speech Bubble */}
            <div
              onClick={handleMascotClick}
              className="relative p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 rounded-3xl border-2 border-amber-300 shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Little speech bubble tail */}
              <div className="absolute -bottom-3 right-12 w-6 h-6 bg-white border-b-2 border-r-2 border-amber-300 transform rotate-45" />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🥭
                </div>
                <div className="space-y-2 flex-1 text-right">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-md">
                      كلام مانجو صاحبة الحكاية ✨ (اضغط لتغيير الحوار)
                    </span>
                    <span className="text-[11px] text-stone-500">لهجة مصرية ودودة</span>
                  </div>
                  <p className="text-stone-800 text-base sm:text-lg font-medium leading-relaxed">
                    {mascotQuoteIndex === 0 ? (
                      <>
                        <span className="font-bold text-amber-950">"هاي! أنا مانجو، صاحبة الحكاية! 🥭</span>
                        <br />
                        تعالوا نعرفكم إحنا مين، وليه اخترنا عصير المانجو علشان نطوره، وإزاي ممكن فكرة صغيرة تعمل أثر كبير."
                      </>
                    ) : (
                      <span className="text-amber-950 font-semibold">{MASCOT_QUOTES[mascotQuoteIndex]}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Identity Message (Shown on secondary button click) */}
            {showIdentityMessage && (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 shadow-md transition-all animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-base sm:text-lg font-bold">
                      إحنا طالبات الفرقة الرابعة بقسم التغذية وعلوم الأطعمة، جامعة العاصمة، سكشن 4.
                    </p>
                    <p className="text-xs text-emerald-800 mt-1">
                      سعداء بزيارتكم ومعرفتكم برؤيتنا في إعادة ابتكار المنتج الغذائي!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (soundEnabled) playSplashSound();
                  onStartStory();
                }}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>يلا نبدأ الحكاية</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>

              <button
                onClick={handleWhoAreWeClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-amber-100/60 text-amber-950 font-bold text-base border-2 border-amber-300 hover:border-amber-400 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Users className="w-5 h-5 text-amber-700" />
                <span>عايز تعرف إحنا مين؟</span>
              </button>

              <button
                onClick={() => {
                  if (soundEnabled) playPopSound();
                  onShowTeam();
                }}
                className="text-stone-600 hover:text-amber-800 text-sm font-semibold underline underline-offset-4 decoration-amber-300 hover:decoration-amber-500 cursor-pointer transition-colors"
              >
                الذهاب مباشرة لبطاقات الطالبات 👩🎓
              </button>
            </div>
          </div>

          {/* Left Column (Mascot Visual Stage) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-4 bg-gradient-to-br from-amber-300/40 via-orange-400/30 to-amber-200/20 rounded-full blur-2xl animate-glow" />

              {/* Decorative fruit splash circles */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-amber-200/80 border border-amber-300 shadow-sm flex items-center justify-center text-3xl rotate-12 animate-float">
                🥭
              </div>
              <div className="absolute -bottom-2 -left-2 w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 shadow-sm flex items-center justify-center text-2xl -rotate-12">
                🌱
              </div>

              {/* 3D Mango Mascot Portrait Frame */}
              <div
                onClick={handleMascotClick}
                className={`relative w-72 sm:w-84 aspect-square rounded-3xl bg-gradient-to-b from-amber-100 to-orange-100 p-3 shadow-2xl border-4 border-white cursor-pointer transition-all duration-300 hover:scale-105 ${
                  mascotWiggle ? 'scale-110 -rotate-3' : ''
                }`}
                title="اضغط على مانجو للتفاعل وسماع كلماتها!"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-amber-200/40 to-orange-200/60 relative flex items-center justify-center">
                  <img
                    src="/mascot/mango_mascot.png"
                    alt="صديقتنا مانجو - مجسم ثلاثي الأبعاد"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold py-1.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5">
                    <span>صديقتنا مانجو (المقدمة والمرشدة)</span>
                    <span className="text-amber-300">★</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-500 mt-2 font-medium">
              💡 اضغط على "مانجو" في أي وقت علشان تسمع حكايات وكواليس من المشروع
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
