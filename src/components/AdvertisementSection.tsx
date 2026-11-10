/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Film, Play, Sparkles, Image as ImageIcon, Link as LinkIcon, AlertCircle, CheckCircle, Volume2 } from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

interface AdvertisementSectionProps {
  soundEnabled: boolean;
}

export const AdvertisementSection: React.FC<AdvertisementSectionProps> = ({ soundEnabled }) => {
  // Video state (can be a YouTube embed or mp4 video, or default to teaser state)
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);
  const [inputUrlValue, setInputUrlValue] = useState<string>('');
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  const handlePlayClick = () => {
    if (soundEnabled) playPopSound();
    setIsPlaying(true);
  };

  const handleSaveVideoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrlValue.trim()) {
      let finalUrl = inputUrlValue.trim();
      // Handle YouTube watch links to embed format
      if (finalUrl.includes('youtube.com/watch?v=')) {
        const videoId = finalUrl.split('watch?v=')[1]?.split('&')[0];
        if (videoId) {
          finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
      } else if (finalUrl.includes('youtu.be/')) {
        const videoId = finalUrl.split('youtu.be/')[1]?.split('?')[0];
        if (videoId) {
          finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
      }
      setVideoUrl(finalUrl);
      setIsPlaying(true);
      setShowUrlInput(false);
      if (soundEnabled) playChimeSound();
    }
  };

  return (
    <section id="ad" className="py-20 bg-white border-b border-amber-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Description */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold">
            <Film className="w-4 h-4 text-orange-600" />
            <span>الحملة الترويجية والإعلانية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            يلا نشوف إعلان فروفيتا!
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-semibold">
            استمتعوا بمشاهدة إعلان منتجنا، وشوفوا إزاي فروفيتا بتجمع بين الطعم المميز والتطوير والإبداع.
          </p>
        </div>

        {/* Video Player & Marketing Flyer Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main 16:9 Video Area */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-stone-900 border-4 border-amber-300 shadow-2xl group">
              {isPlaying && videoUrl ? (
                // If user provided a video URL (e.g. YouTube or mp4)
                videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={videoUrl}
                    title="إعلان عصير فروفيتا"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                // Custom mango-themed thumbnail area with play button & official prompt message
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
                  {/* Background Campaign Flyer Image with Scrim */}
                  <img
                    src="/product/fruvita_flyer.jpg"
                    alt="فلاير إعلان فروفيتا"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 filter blur-[1px] group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-stone-900/40" />

                  {/* Content on top of thumbnail */}
                  <div className="relative z-10 space-y-4 max-w-md">
                    {/* Notice message from prompt requirements */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/90 text-stone-950 font-bold text-sm shadow-md backdrop-blur-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>الفيديو الإعلاني هيتضاف قريبًا</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      افتحها.. وعيش مغامرة المانجو! 🥭
                    </h3>

                    <p className="text-amber-200 text-xs sm:text-sm font-medium">
                      الحملة التسويقية لمنتج Fruvita MediMedi – مذاق المانجو المنعش
                    </p>

                    {/* Prominent Play Button */}
                    <div className="pt-2">
                      <button
                        onClick={handlePlayClick}
                        className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-4 border-white/80 mx-auto"
                        title="تشغيل العرض الترويجي"
                      >
                        <Play className="w-8 h-8 sm:w-9 sm:h-9 mr-1 fill-white" />
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-300">
                      اضغط لمشاهدة تفاصيل الحملة وتحديث رابط الفيديو
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Video URL Updater Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-right">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-950 font-bold">
                <LinkIcon className="w-4 h-4 text-amber-700" />
                <span>إمكانية تحديث رابط الفيديو الإعلاني:</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  {showUrlInput ? 'إلغاء' : 'إضافة رابط فيديو خارجي (YouTube / MP4)'}
                </button>
                <button
                  onClick={() => setShowFlyerModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>تكبير الفلاير</span>
                </button>
              </div>

              {showUrlInput && (
                <form onSubmit={handleSaveVideoUrl} className="w-full mt-3 flex items-center gap-2">
                  <input
                    type="url"
                    value={inputUrlValue}
                    onChange={(e) => setInputUrlValue(e.target.value)}
                    placeholder="ضع رابط يوتيوب أو ملف MP4 هنا..."
                    dir="ltr"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    حفظ وتشغيل
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Marketing Flyer & Campaign Details Column */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <div className="p-6 rounded-3xl bg-amber-50/80 border-2 border-amber-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-black text-stone-900">
                  فلاير الحملة الإعلانية 🎨
                </h4>
                <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md">
                  Fruvita MediMedi
                </span>
              </div>

              <div
                onClick={() => setShowFlyerModal(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md cursor-pointer group"
              >
                <img
                  src="/product/fruvita_flyer.jpg"
                  alt="فلاير الحملة الإعلانية لمنتج فروفيتا"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                  اضغط للتكبير الكامل
                </div>
              </div>

              {/* Campaign Key Selling Points from Report */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-amber-950">أبرز ركائز الحملة التسويقية:</p>
                <div className="space-y-1.5 text-xs text-stone-700 font-medium">
                  <div className="flex items-center gap-2 bg-white/70 p-2 rounded-xl border border-amber-200/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>الرسالة الإعلانية: افتحها.. وعيش مغامرة المانجو!</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 p-2 rounded-xl border border-amber-200/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>مزايا المنتج: طعم لذيذ ومنعش · مناسب للأطفال · معبأ بعناية</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 p-2 rounded-xl border border-amber-200/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>حجم العبوة: 200 مل مناسب لقبضة يد الطفل والاستهلاك الفردي</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flyer Lightbox Modal */}
      {showFlyerModal && (
        <div
          onClick={() => setShowFlyerModal(false)}
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-3 max-w-xl w-full max-h-[90vh] overflow-hidden flex flex-col items-center border-4 border-amber-400 shadow-2xl relative"
          >
            <button
              onClick={() => setShowFlyerModal(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 cursor-pointer"
            >
              ✕
            </button>
            <img
              src="/product/fruvita_flyer.jpg"
              alt="فلاير الحملة الإعلانية الكامل"
              referrerPolicy="no-referrer"
              className="max-h-[82vh] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
