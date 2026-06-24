import React, { useState, useCallback } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotsProps {
  darkMode: boolean;
}

// Screenshot filenames from the user's folder
const lightScreenshots = [
  'ScreenShot_2026-06-23_102934_110.png',
  'ScreenShot_2026-06-23_103114_617.png',
  'ScreenShot_2026-06-23_103140_127.png',
  'ScreenShot_2026-06-23_103205_668.png',
  'ScreenShot_2026-06-23_103221_780.png',
  'ScreenShot_2026-06-23_103234_214.png',
  'ScreenShot_2026-06-23_104234_686.png',
];

const darkScreenshots = [
  'ScreenShot_2026-06-23_102959_889.png',
  'ScreenShot_2026-06-23_103245_391.png',
  'ScreenShot_2026-06-23_103906_652.png',
  'ScreenShot_2026-06-23_103925_552.png',
  'ScreenShot_2026-06-23_103938_984.png',
  'ScreenShot_2026-06-23_103948_665.png',
  'ScreenShot_2026-06-23_104015_255.png',
];

export default function Screenshots({ darkMode }: ScreenshotsProps) {
  const { t, lang } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [tab, setTab] = useState<'light' | 'dark'>('light');

  const screenshots = tab === 'light' ? lightScreenshots : darkScreenshots;
  const total = screenshots.length;

  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  return (
    <section id="screenshots" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
            {t.screenshotsTitle}
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-500 max-w-xl mx-auto">
            {t.screenshotsDesc}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => { setTab('light'); setActiveIndex(0); }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === 'light'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {t.screenshotLight}
            </button>
            <button
              onClick={() => { setTab('dark'); setActiveIndex(0); }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === 'dark'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {t.screenshotDark}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
            <img
              src={`${import.meta.env.BASE_URL}screenshots/${lang === 'zh-CN' ? 'cn' : lang === 'zh-TW' ? 'tw' : 'en'}/${tab}/${screenshots[activeIndex]}`}
              alt={`${t.screenshotsTitle} ${activeIndex + 1}`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Navigation arrows */}
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-all"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-all"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? 'w-6 bg-brand-500'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-3">
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              {activeIndex + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
