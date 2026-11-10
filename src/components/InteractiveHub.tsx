/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Film, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface InteractiveHubProps {
  selectedTab: 'team' | 'ad' | 'thanks';
  onSelectTab: (tab: 'team' | 'ad' | 'thanks') => void;
  soundEnabled: boolean;
}

export const InteractiveHub: React.FC<InteractiveHubProps> = ({
  selectedTab,
  onSelectTab,
  soundEnabled,
}) => {
  const options = [
    {
      id: 'team' as const,
      title: 'إحنا مين؟ 👩🎓',
      subtitle: 'طالبات سكشن 4 وبطاقات الفريق الكاملة مع الصور والمهام',
      icon: Users,
      gradient: 'from-amber-400 to-orange-500',
      borderActive: 'border-amber-500 ring-4 ring-amber-300 shadow-xl',
      badge: 'فريق العمل والبحث',
    },
    {
      id: 'ad' as const,
      title: 'شوفوا إعلاننا 🎬',
      subtitle: 'فيديو الحملة الإعلانية وتصميم الفلاير والهوية البصرية',
      icon: Film,
      gradient: 'from-orange-500 to-red-500',
      borderActive: 'border-orange-500 ring-4 ring-orange-300 shadow-xl',
      badge: 'الحملة التسويقية',
    },
    {
      id: 'thanks' as const,
      title: 'رسالة شكر 💛',
      subtitle: 'تقدير واعتزاز لأساتذتنا ودكاترتنا الأفاضل وتوجيهاتهم القيمة',
      icon: Heart,
      gradient: 'from-amber-400 to-yellow-500',
      borderActive: 'border-yellow-500 ring-4 ring-yellow-300 shadow-xl',
      badge: 'وفاء وتقدير',
    },
  ];

  const handleCardClick = (id: 'team' | 'ad' | 'thanks') => {
    if (soundEnabled) {
      if (id === 'thanks') playChimeSound();
      else playPopSound();
    }
    onSelectTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="interactive-hub" className="py-16 bg-gradient-to-b from-amber-50/60 to-white/90 border-t border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>بوابة الاستكشاف التفاعلية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            اختاروا تعرفوا إيه عننا؟
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium">
            اضغطوا على أي اختيار من التلاتة علشان تفتحوا القسم الخاص بيه فورًا:
          </p>
        </div>

        {/* 3 Main Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedTab === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleCardClick(option.id)}
                className={`group p-8 rounded-3xl bg-white border-2 text-right transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
                  isSelected
                    ? option.borderActive + ' -translate-y-1'
                    : 'border-amber-200 hover:border-amber-400 shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${option.gradient}`} />
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-full">
                      {option.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 group-hover:text-amber-700 transition-colors">
                    {option.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed font-medium">
                    {option.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
                  <span>{isSelected ? 'أنت تتصفح هذا القسم حاليًا' : 'اضغط للعرض المباشر'}</span>
                  <ArrowLeft className={`w-4 h-4 transform group-hover:-translate-x-1 transition-transform ${isSelected ? 'text-amber-600' : 'text-stone-400'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
