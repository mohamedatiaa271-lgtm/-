/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Lightbulb, Target, Sparkles, Check, Smile, Compass, Layers } from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface IntroductionSectionProps {
  soundEnabled: boolean;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ soundEnabled }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isStickerPeeled, setIsStickerPeeled] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'لاحظنا 🔍',
      headline: 'تشخيص العبوة السابقة بدقة',
      description:
        'إن العبوة الأصلية محتاجة تحسين في المتانة والغلق والحماية، وكمان بعض البيانات الأساسية على الملصق كانت ناقصة أو غير واضحة.',
      accent: 'border-amber-300 hover:border-amber-500 bg-amber-50/50',
      icon: Eye,
      details: [
        'انبعاج في جسم العبوة بسبب رقة مادة البلاستيك المستخدمة.',
        'عدم وجود غطاء واقٍ لفوهة الشرب يتيح تراكم البكتيريا والأتربة.',
        'غياب جدول القيمة الغذائية ورقم التشغيلة وتاريخ الإنتاج الواضح.',
      ],
    },
    {
      id: 2,
      title: 'فكرنا 💡',
      headline: 'هندسة الحلول الإبداعية',
      description:
        'إزاي نطور تجربة المنتج من خلال عبوة أقوى، وغطاء رياضي آمن، وتصميم بصري حيوي يلفت انتباه الأطفال.',
      accent: 'border-orange-300 hover:border-orange-500 bg-orange-50/50',
      icon: Lightbulb,
      details: [
        'اختيار مادة PET الغذائية عالية المتانة مع أضالع تدعيم لمنع الانبعاج.',
        'نظام غطاء رياضي شفاف (Sport Cap) مع حلقة أمان مانعة للتسريب.',
        'ابتكار شخصية كرتونية استوائية ورسائل مرحة تدعم تعلق الطفل بالمنتج.',
      ],
    },
    {
      id: 3,
      title: 'هدفنا 🌱',
      headline: 'الأثر الإيجابي والمستدام',
      description:
        'نقدم تجربة أفضل للمستهلك، ونربط جودة المنتج بتصميم واضح وجذاب، ونسيب أثر إيجابي من خلال التطوير العلمي والتسويقي.',
      accent: 'border-emerald-300 hover:border-emerald-500 bg-emerald-50/50',
      icon: Target,
      details: [
        'تطبيق القواعد العلمية لعلوم وتكنولوجيا الأغذية في ضبط التعبئة والتغليف.',
        'توفير بيانات غذائية شفافة ودقيقة للمستهلكين وأولياء الأمور.',
        'تحويل استهلاك العصير إلى تجربة تفاعلية مليئة بالبهجة والسلامة.',
      ],
    },
  ];

  const handleCardClick = (id: number) => {
    if (soundEnabled) playPopSound();
    setActiveCard(activeCard === id ? null : id);
  };

  const handlePeelToggle = () => {
    if (soundEnabled) playChimeSound();
    setIsStickerPeeled(!isStickerPeeled);
  };

  return (
    <section id="intro" className="py-20 bg-white/70 border-y border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>حكاية التطوير من الفكرة للتنفيذ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            مش مجرد عصير… دي حكاية تطوير
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
            مشروعنا في مقرر تطوير وتسويق المنتجات الغذائية بيركز على إعادة التفكير في منتج عصير المانجو،
            وتطوير العبوة والهوية التسويقية علشان تكون أكثر أمانًا وجاذبية وسهولة في الاستخدام، خصوصًا للأطفال.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeCard === card.id;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`p-7 rounded-3xl border-2 transition-all duration-300 cursor-pointer text-right flex flex-col justify-between ${
                  card.accent
                } ${isSelected ? 'ring-4 ring-amber-400 shadow-xl -translate-y-1' : 'shadow-sm hover:shadow-md hover:-translate-y-0.5'}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-stone-900">{card.title}</span>
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-xs border border-amber-200/80 flex items-center justify-center text-amber-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-amber-800">{card.headline}</p>

                  <p className="text-stone-700 text-base leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-200/60">
                  <button className="text-xs font-bold text-amber-900 flex items-center justify-between w-full">
                    <span>{isSelected ? 'إخفاء التفاصيل العلمية' : 'اضغط لقراءة التفاصيل'}</span>
                    <span className="text-amber-600">{isSelected ? '▲' : '▼'}</span>
                  </button>

                  {isSelected && (
                    <div className="mt-3 space-y-2 pt-2 text-xs text-stone-700 bg-white/80 p-3 rounded-xl border border-amber-200 animate-fadeIn">
                      {card.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Peelable Innovation Preview (Highlighting page 6 innovation) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-right space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>ابتكار تفاعلي للأطفال في العبوة الجديدة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                الملصق التفاعلي القابل للتقشير (Peel-Off Sticker)
              </h3>
              <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                في عبوة فروفيتا المطورة، صممنا ملصقًا ذكيًا يخفي خلفه رسائل تحفيزية وألعاب متاهة ورمز QR لالتقاط الصور
                ومشاركتها مع مانجو! جرب تقشر الملصق تفاعليًا وشوف المفاجأة:
              </p>
              <div className="pt-2">
                <button
                  onClick={handlePeelToggle}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-amber-100 text-amber-950 font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Smile className="w-4 h-4 text-orange-600" />
                  <span>{isStickerPeeled ? 'أعد إغلاق الملصق' : 'قشر الملصق دلوقتي! 👆'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={handlePeelToggle}
                className="relative w-64 h-44 rounded-2xl bg-white p-2 shadow-2xl cursor-pointer transform hover:scale-105 transition-all text-stone-900 overflow-hidden"
              >
                {!isStickerPeeled ? (
                  <div className="w-full h-full rounded-xl bg-amber-100 border-2 border-dashed border-amber-400 p-4 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-2xl">🏷️</span>
                    <p className="text-xs font-bold text-amber-950">اسحب مفاجأة مانجو مستنياك!</p>
                    <span className="text-[10px] text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-full">
                      اضغط للتقشير والفتح
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-200 to-amber-300 p-3 flex flex-col items-center justify-center text-center space-y-1.5 animate-fadeIn">
                    <span className="text-3xl">🌟</span>
                    <p className="text-sm font-black text-amber-950">
                      "ابتسم يا بطل! أنت نجم المانجو!"
                    </p>
                    <p className="text-[11px] text-amber-900 font-semibold">
                      Mango Star! اتصور مع مانجو وارفعها
                    </p>
                    <div className="text-[10px] bg-white/90 px-2 py-0.5 rounded text-stone-700 font-mono">
                      QR CODE: SCANNED ✓
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
