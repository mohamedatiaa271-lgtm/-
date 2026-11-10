/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, FileText, Sparkles, Layers } from 'lucide-react';
import { SCIENTIFIC_RECOMMENDATIONS, UNIVERSITY_INFO } from '../data/projectData';

interface ReportViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportViewerModal: React.FC<ReportViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tables' | 'recommendations' | 'specs'>('tables');
  const [selectedTable, setSelectedTable] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col border-2 border-amber-300 shadow-2xl text-right animate-fadeIn overflow-hidden">
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">
              الملخص الأكاديمي لتقرير مشروع التخرج 📑
            </h3>
            <p className="text-xs text-amber-100 font-medium">
              {UNIVERSITY_INFO.reportTitle} · {UNIVERSITY_INFO.course}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="p-4 bg-amber-50 border-b border-amber-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('tables')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'tables'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
            >
              جداول الفحص المعملي (1 - 5)
            </button>
            <button
              onClick={() => setActiveTab('recommendations')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'recommendations'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
            >
              التوصيات المقترحة (9 توصيات)
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
            >
              مواصفات عبوة فروفيتا الجديدة
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'tables' && (
            <div className="space-y-6">
              {/* Table Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 1, label: 'جدول (1): فحص العبوة الأولية' },
                  { id: 2, label: 'جدول (2): تقييم مادة التعبئة' },
                  { id: 3, label: 'جدول (3): تحليل البطاقة الغذائية' },
                  { id: 4, label: 'جدول (4): الصلاحية والتخزين' },
                  { id: 5, label: 'جدول (5): تقييم الإعلان' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTable(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedTable === t.id
                        ? 'bg-amber-500 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Table 1 */}
              {selectedTable === 1 && (
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-amber-100 p-3 font-bold text-amber-950 text-sm">
                    جدول (1): البيانات الأولية وفحص العبوة الأصلية
                  </div>
                  <table className="w-full text-xs text-right divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="p-3">بند الفحص</th>
                        <th className="p-3">النتيجة</th>
                        <th className="p-3">الملاحظات العلمية</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr>
                        <td className="p-3 font-semibold">اسم المنتج</td>
                        <td className="p-3">لذيذ وروعة</td>
                        <td className="p-3 text-rose-700">اسم تجاري ضعيف جدًا لا يمكن من خلاله جذب المستهلك</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">الوزن الصافي</td>
                        <td className="p-3">أقل من 200 مل</td>
                        <td className="p-3">الوزن المدون على العبوة</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">نوع العبوة</td>
                        <td className="p-3">بلاستيك رقيق</td>
                        <td className="p-3 text-rose-700">قابل للخدش وللتمزق مع أقل صدمة</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">سلامة اللحام والغلق</td>
                        <td className="p-3">متوسطة</td>
                        <td className="p-3 text-rose-700">لا يوجد غطاء بلاستيك لفوهة الزجاجة مما يتيح تراكم البكتيريا</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">تاريخ الإنتاج والصلاحية</td>
                        <td className="p-3">2026/10 (صلاحية 6 شهور)</td>
                        <td className="p-3 text-rose-700">تاريخ الإنتاج مدون في جزء مبهم وغير واضح</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Table 2 */}
              {selectedTable === 2 && (
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-amber-100 p-3 font-bold text-amber-950 text-sm">
                    جدول (2): تقييم مادة التعبئة والتغليف واختيار البديل
                  </div>
                  <table className="w-full text-xs text-right divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="p-3">عنصر التقييم</th>
                        <th className="p-3">النتيجة الحالية</th>
                        <th className="p-3">التطوير والبديل المقترح</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr>
                        <td className="p-3 font-semibold">مادة التعبئة المستخدمة</td>
                        <td className="p-3 text-rose-700">بلاستيك رديء</td>
                        <td className="p-3 font-bold text-emerald-700">بلاستيك سميك PET غذائي آمن</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">الحماية من الأكسجين والرطوبة</td>
                        <td className="p-3 text-rose-700">عدم توافر حماية كافية</td>
                        <td className="p-3 text-emerald-700">عزل ممتاز للرطوبة وتثبيط الأكسدة</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">حماية المنتج أثناء التداول</td>
                        <td className="p-3 text-rose-700">عدم توافر حماية كافية</td>
                        <td className="p-3 text-emerald-700">إضافة أضالع وحلقات تقوية لمقاومة الصدمات</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">سبب اختيار المادة البديلة</td>
                        <td className="p-3" colSpan={2}>
                          <span className="font-bold text-amber-900">
                            لزيادة مستوى الأمان الصحي، تحسين جودة العبوة، وضمان سلامة الطفل.
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Table 3 */}
              {selectedTable === 3 && (
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-amber-100 p-3 font-bold text-amber-950 text-sm">
                    جدول (3): تحليل البطاقة الغذائية للمنتج
                  </div>
                  <table className="w-full text-xs text-right divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="p-3">البيانات المطلوب فحصها</th>
                        <th className="p-3">التوفر</th>
                        <th className="p-3">ملاحظات فريق البحث</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr>
                        <td className="p-3 font-semibold">المعلومات الغذائية (Nutrition Facts)</td>
                        <td className="p-3 text-rose-600 font-bold">لا</td>
                        <td className="p-3 text-rose-700">يجب وجود جدول يوضح السعرات والسكريات (تمت إضافته في Fruvita)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">مسببات الحساسية</td>
                        <td className="p-3 text-emerald-600 font-bold">نعم</td>
                        <td className="p-3">تحتوي على مصدر للفينيل ألانين (تم إبرازه بوضوح)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">الباركود الدولي</td>
                        <td className="p-3 text-rose-600 font-bold">لا</td>
                        <td className="p-3 text-rose-700">يجب وضع باركود على البطاقة لتسهيل التسويق والتتبع</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Table 4 */}
              {selectedTable === 4 && (
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-amber-100 p-3 font-bold text-amber-950 text-sm">
                    جدول (4): دراسة تاريخ الصلاحية وسالمة التخزين
                  </div>
                  <table className="w-full text-xs text-right divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="p-3">المصطلح العلمي</th>
                        <th className="p-3">التعريف الأكاديمي</th>
                        <th className="p-3">تطبيقه على منتج Fruvita</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr>
                        <td className="p-3 font-semibold">العمر التخزيني (Shelf life)</td>
                        <td className="p-3">التاريخ المستقبلي الذي بعده يفقد المنتج الغذائي جودته</td>
                        <td className="p-3 font-bold text-amber-900">تاريخ الإنتاج 2026/10 إلى انتهاء 2027/4 (6 أشهر)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">ظروف التخزين (Storage Condition)</td>
                        <td className="p-3">المعايير البيئية اللازمة لحفظ الجودة الميكروبيولوجية</td>
                        <td className="p-3">مكان جاف وبارد بعيدًا عن الشمس المباشرة، وحفظه بالثلاجة بعد الفتح</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Table 5 */}
              {selectedTable === 5 && (
                <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-amber-100 p-3 font-bold text-amber-950 text-sm">
                    جدول (5): تقييم الإعلان (الإعلان القديم vs الإعلان الجديد Fruvita)
                  </div>
                  <table className="w-full text-xs text-right divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="p-3">عنصر التقييم</th>
                        <th className="p-3">الإعلان القديم (لذيذ وروعة)</th>
                        <th className="p-3">الإعلان الجديد (Fruvita)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr>
                        <td className="p-3 font-semibold">الرسالة الإعلانية</td>
                        <td className="p-3 text-rose-700">افتقار للجاذبية والمحتوى التفاعلي الموجه للأطفال</td>
                        <td className="p-3 text-emerald-800 font-bold">افتحها.. وعيش مغامرة المانجو! + شخصية مانجو</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">المميزات المذكورة</td>
                        <td className="p-3">عروض تجارية وكميات كراتين وهدايا</td>
                        <td className="p-3 font-bold text-emerald-800">لذيذ ومنعش · مناسب للأطفال · معبأ بعناية فائقة</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-3">
              <h4 className="text-base font-black text-amber-950">
                التوصيات التسع المقترحة لتطوير المنتج وفقًا للتقرير:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {SCIENTIFIC_RECOMMENDATIONS.map((rec, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-semibold">
                      {rec}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                  <span className="text-xs font-bold text-amber-800">المقاسات الهندسية:</span>
                  <ul className="text-xs text-stone-700 space-y-1 font-medium">
                    <li>• الارتفاع: 13 إلى 14 سم (مناسب لحقائب الأطفال)</li>
                    <li>• القطر: 5 إلى 6 سم (ملائم تمامًا لقبضة يد الطفل)</li>
                    <li>• سعة العبوة: 200 مل صافي للاستهلاك الفردي</li>
                    <li>• محيط الملصق: 16 إلى 17 سم وارتفاع 7 إلى 8 سم</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-2">
                  <span className="text-xs font-bold text-orange-900">نظام الغلق والأمان:</span>
                  <ul className="text-xs text-stone-700 space-y-1 font-medium">
                    <li>• غطاء رياضي برتقالي شفاف (Sport Cap)</li>
                    <li>• حلقة أمان مانعة للتسريب والتلاعب المسبق</li>
                    <li>• غطاء خارجي واقٍ لفوهة الشرب ضد الميكروبات</li>
                    <li>• أضالع وحلقات تقوية لامتصاص الصدمات</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <p className="text-xs text-stone-600 leading-relaxed">
                  تم التقييم والتوثيق بواسطة طالبات سكشن (4) – الفرقة الرابعة بكلية الاقتصاد المنزلي، جامعة العاصمة،
                  للعام الجامعي 2026/2027 تحت إشراف نخبة أساتذة التغذية وعلوم الأطعمة.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
