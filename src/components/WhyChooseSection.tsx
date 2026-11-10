/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, HeartHandshake, ShieldCheck, ArrowLeftRight, Check, X } from 'lucide-react';
import { PACKAGING_COMPARISONS } from '../data/projectData';
import { playPopSound } from '../utils/soundEffects';

interface WhyChooseSectionProps {
  soundEnabled: boolean;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ soundEnabled }) => {
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [selectedComparisonIndex, setSelectedComparisonIndex] = useState(0);

  return (
    <section id="why-fruvita" className="py-20 relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Mascot Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>رؤيتنا ورسالتنا من وراء الاختيار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            ليه اخترنا فروفيتا بالذات؟
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-medium">
            حكاية فكرة بدأت من ملاحظة ذكية في السوق، وتحولت لمشروع علمي متكامل لحماية صحة أطفالنا وتقديم تجربة تفاعلية مبهجة.
          </p>
        </div>

        {/* The Two Main Storytelling Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Panel One */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/60 border-2 border-amber-300 shadow-md hover:shadow-lg transition-all text-right space-y-6 relative group">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300 text-amber-900 flex items-center justify-center font-bold text-xl">
                01
              </span>
              <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-xl">
                🧒
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              ليه اخترنا المنتج ده؟
            </h3>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                اخترنا عصير المانجو لأنه منتج موجه بشكل أساسي للأطفال، وده خلانا نركز على احتياجاتهم في سهولة الاستخدام والحفاظ على سلامة المنتج.
              </p>
              <p>
                ومن خلال فحص العبوة الأصلية، لقينا فرصة حقيقية لتطبيق الجوانب العلمية والعملية لتطوير المنتجات الغذائية.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-amber-900 bg-amber-100/70 p-3 rounded-xl border border-amber-200">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>التركيز الأساسي: أمان فوهة الشرب، مقاومة الصدمات، ووضوح المعلومات الغذائية.</span>
            </div>
          </div>

          {/* Panel Two */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50/60 border-2 border-orange-300 shadow-md hover:shadow-lg transition-all text-right space-y-6 relative group">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-orange-400/20 border border-orange-300 text-orange-900 flex items-center justify-center font-bold text-xl">
                02
              </span>
              <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-xl">
                🌱
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              إحنا عايزين نسيب أثر إزاي؟
            </h3>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                عايزين نثبت إن التطوير مش مجرد تغيير شكل العبوة أو الاسم؛ لكنه تحسين في المتانة ونظام الغلق والحماية، واستكمال البيانات الغذائية، وتقديم هوية تسويقية أكثر تميزًا.
              </p>
              <p>
                هدفنا تجربة أكثر كفاءة وجودة وجاذبية للمستهلك.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-orange-950 bg-orange-100/70 p-3 rounded-xl border border-orange-200">
              <HeartHandshake className="w-4 h-4 text-orange-700 shrink-0" />
              <span>الهدف الأكاديمي: سد الفجوة بين علوم الأغذية وتصميم الهوية الاستهلاكية الجذابة.</span>
            </div>
          </div>
        </div>

        {/* Interactive Before vs After Visual Comparison Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
                <ArrowLeftRight className="w-3.5 h-3.5 text-amber-700" />
                <span>مقارنة علمية تطبيقية من واقع التقرير الجامعي</span>
              </div>
              <h3 className="text-2xl font-black text-stone-900">
                العبوة الأصلية (قبل) مقابل عبوة فروفيتا (بعد التطوير)
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-medium bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
              اضغط على أي ميزة للمقارنة التفصيلية
            </span>
          </div>

          {/* Interactive Feature Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {PACKAGING_COMPARISONS.map((comp, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (soundEnabled) playPopSound();
                  setSelectedComparisonIndex(idx);
                }}
                className={`p-3 rounded-2xl text-xs font-bold text-right transition-all cursor-pointer border ${
                  selectedComparisonIndex === idx
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-102'
                    : 'bg-amber-50/70 text-stone-700 border-amber-200 hover:bg-amber-100'
                }`}
              >
                {comp.feature}
              </button>
            ))}
          </div>

          {/* Comparison Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Before (Original) */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-right space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <X className="w-3.5 h-3.5" />
                  <span>قبل التطوير (لذيذ وروعة)</span>
                </span>
                <span className="text-xs text-stone-500 font-medium">العبوة القديمة</span>
              </div>

              <div className="h-44 flex items-center justify-center p-2 bg-white rounded-xl border border-stone-200 overflow-hidden">
                <img
                  src="/product/lazez_old_bottle.jpg"
                  alt="العبوة الأصلية قبل التطوير"
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain"
                />
              </div>

              <p className="text-sm text-stone-700 leading-relaxed font-medium">
                {PACKAGING_COMPARISONS[selectedComparisonIndex].before}
              </p>
            </div>

            {/* After (Fruvita) */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border-2 border-amber-300 text-right space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>بعد التطوير (عبوة Fruvita)</span>
                </span>
                <span className="text-xs text-amber-700 font-bold">بمقرر التطوير والتسويق</span>
              </div>

              <div className="h-44 flex items-center justify-center p-2 bg-white rounded-xl border border-amber-200 overflow-hidden">
                <img
                  src="/product/fruvita_new_bottles.jpg"
                  alt="عبوة فروفيتا المطورة"
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain"
                />
              </div>

              <p className="text-sm text-amber-950 leading-relaxed font-bold">
                {PACKAGING_COMPARISONS[selectedComparisonIndex].after}
              </p>
            </div>
          </div>

          {/* Scientific Impact */}
          <div className="mt-5 p-4 rounded-xl bg-orange-50 border border-orange-200 text-right flex items-center gap-3">
            <span className="text-lg">🔬</span>
            <p className="text-xs sm:text-sm text-orange-950 font-semibold leading-relaxed">
              <span className="font-extrabold text-orange-800">الأثر العلمي المباشر: </span>
              {PACKAGING_COMPARISONS[selectedComparisonIndex].scientificImpact}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
