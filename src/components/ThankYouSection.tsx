/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Sparkles, Award, BookOpen } from 'lucide-react';
import { PROFESSORS, UNIVERSITY_INFO } from '../data/projectData';

export const ThankYouSection: React.FC = () => {
  return (
    <section id="thanks" className="py-24 bg-gradient-to-b from-amber-50/80 via-amber-100/40 to-amber-50/90 relative overflow-hidden">
      {/* Subtle decorative golden leaf elements */}
      <div className="absolute top-10 right-10 text-4xl opacity-20 pointer-events-none select-none">
        🌿
      </div>
      <div className="absolute bottom-12 left-10 text-5xl opacity-20 pointer-events-none select-none">
        🥭
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warm cream container with golden borders */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-amber-300 shadow-xl text-center space-y-12 relative">
          {/* Subtle golden corner flourishes */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-400 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-400 rounded-bl-2xl pointer-events-none" />

          {/* Heading & Heartfelt Message */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold">
              <Heart className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>تحية وفاء وتقدير لأعضاء هيئة التدريس</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 tracking-tight">
              شكرًا من القلب 💛
            </h2>

            <p className="text-stone-700 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              كل الشكر والتقدير لدكاترتنا الأفاضل على دعمهم وتوجيههم، وعلى كل معلومة وخطوة ساعدتنا في إنجاز مشروعنا.
              <br className="hidden sm:inline" />
              بفضل دعمكم، كل فكرة ممكن تتحول لأثر جميل.
            </p>
          </div>

          {/* Professors Academic Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            {PROFESSORS.map((prof, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-gradient-to-b from-amber-50/70 to-white border-2 border-amber-200/90 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-2xl bg-amber-400/20 text-amber-900 border border-amber-300 flex items-center justify-center font-black text-sm">
                      {prof.title}
                    </span>
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-amber-700">{prof.title} /</p>
                    <h3 className="text-lg font-black text-stone-900 group-hover:text-amber-800 transition-colors">
                      {prof.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    {prof.roleDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-amber-100 text-[11px] font-bold text-amber-900">
                  {prof.department}
                </div>
              </div>
            ))}
          </div>

          {/* Final Heartfelt Arabic Signature */}
          <div className="pt-8 border-t border-amber-200 space-y-3">
            <p className="text-xl sm:text-2xl font-black text-amber-900">
              مع خالص الشكر والتقدير من فريق فروفيتا 🌷
            </p>
            <p className="text-xs text-stone-500 font-medium">
              {UNIVERSITY_INFO.year} · {UNIVERSITY_INFO.department} · {UNIVERSITY_INFO.faculty} · {UNIVERSITY_INFO.university}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
