/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Sparkles, GraduationCap, Award, Search, X } from 'lucide-react';
import { STUDENTS_WITH_PHOTOS, ALL_SECTION_STUDENTS, TeamMember, UNIVERSITY_INFO } from '../data/projectData';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface TeamSectionProps {
  soundEnabled: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ soundEnabled }) => {
  const [viewMode, setViewMode] = useState<'photos' | 'all'>('photos');
  const [selectedStudent, setSelectedStudent] = useState<TeamMember | null>(null);

  const displayList = viewMode === 'photos' ? STUDENTS_WITH_PHOTOS : ALL_SECTION_STUDENTS;

  const handleStudentClick = (student: TeamMember) => {
    if (soundEnabled) playPopSound();
    setSelectedStudent(student);
  };

  return (
    <section id="team" className="py-20 bg-amber-50/50 border-b border-amber-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold">
            <GraduationCap className="w-4 h-4 text-amber-800" />
            <span>فريق العمل الأكاديمي والبحثي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            مين إحنا؟
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-semibold">
            إحنا طالبات الفرقة الرابعة بقسم التغذية وعلوم الأطعمة، جامعة العاصمة، سكشن 4.
            جمعنا بين المعرفة العلمية والإبداع علشان نطور منتج غذائي ونقدمه بشكل مختلف.
          </p>

          {/* View toggle (Students with photos vs All 15 Section Members) */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="inline-flex p-1 bg-white rounded-2xl border border-amber-300 shadow-xs">
              <button
                onClick={() => {
                  if (soundEnabled) playPopSound();
                  setViewMode('photos');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  viewMode === 'photos'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                طالبات الفريق بالصور الشخصية ({STUDENTS_WITH_PHOTOS.length})
              </button>
              <button
                onClick={() => {
                  if (soundEnabled) playPopSound();
                  setViewMode('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  viewMode === 'all'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                فريق سكشن 4 بالكامل وفقًا للتقرير ({ALL_SECTION_STUDENTS.length} طالبة)
              </button>
            </div>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayList.map((student, index) => (
            <div
              key={student.id}
              onClick={() => handleStudentClick(student)}
              className="group bg-white rounded-3xl p-6 border-2 border-amber-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Card order badge */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center border border-amber-300">
                {index + 1}
              </div>

              {/* Circular / softly rounded photo frame */}
              <div className="relative mb-5">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-amber-200 p-1 shadow-md group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-amber-50 border-2 border-white flex items-center justify-center">
                    {student.hasPhoto && student.photo ? (
                      <img
                        src={student.photo}
                        alt={student.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-amber-800 text-3xl font-black">
                        {student.name.split(' ')[0][0]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle verified badge */}
                <div className="absolute bottom-0 left-2 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs border-2 border-white">
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Student Details */}
              <div className="space-y-1.5 w-full">
                <h3 className="text-xl font-black text-stone-900 group-hover:text-amber-700 transition-colors">
                  {student.name}
                </h3>

                {student.englishName && (
                  <p className="text-xs text-stone-500 font-sans tracking-wide">
                    {student.englishName}
                  </p>
                )}

                <div className="pt-2">
                  <span className="inline-block text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-xl">
                    {student.role}
                  </span>
                </div>

                <p className="text-[11px] text-stone-500 pt-1 font-medium">
                  {student.faculty}
                </p>
              </div>

              {/* Interactive prompt */}
              <div className="mt-4 pt-3 border-t border-amber-100 w-full flex items-center justify-center gap-1.5 text-xs text-amber-700 font-semibold opacity-90 group-hover:opacity-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>اضغط لمعاينة البطاقة والتفاصيل</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Section Footer */}
        <div className="mt-14 pt-8 border-t border-amber-300 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-bold text-amber-950 bg-amber-200/60 py-3 px-6 rounded-2xl border border-amber-300 shadow-xs">
            <span>الفرقة الرابعة</span>
            <span className="text-amber-500">·</span>
            <span>قسم التغذية وعلوم الأطعمة</span>
            <span className="text-amber-500">·</span>
            <span>جامعة العاصمة</span>
            <span className="text-amber-500">·</span>
            <span className="text-amber-800">سكشن 4</span>
          </div>
        </div>
      </div>

      {/* Student Modal Details */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-right border-2 border-amber-300 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-orange-500 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white flex items-center justify-center">
                  {selectedStudent.hasPhoto && selectedStudent.photo ? (
                    <img
                      src={selectedStudent.photo}
                      alt={selectedStudent.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl font-black text-amber-800">
                      {selectedStudent.name.split(' ')[0][0]}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-stone-900">{selectedStudent.name}</h3>
                {selectedStudent.englishName && (
                  <p className="text-xs text-stone-500 font-sans mt-0.5">{selectedStudent.englishName}</p>
                )}
                <span className="inline-block mt-2 text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
                  {selectedStudent.role}
                </span>
              </div>

              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 w-full text-right space-y-2">
                <p className="text-xs font-bold text-amber-900">
                  🏛️ الكلية والقسم: {selectedStudent.faculty} – جامعة العاصمة
                </p>
                {selectedStudent.funFact && (
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    ✨ <span className="font-bold">المساهمة في المشروع:</span> {selectedStudent.funFact}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
