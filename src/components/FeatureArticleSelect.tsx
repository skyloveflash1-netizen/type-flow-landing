import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Library, Upload, History, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureArticleSelectProps {
  darkMode: boolean;
}

const lightImgs = ['article-select.png', 'article-practice.png'];
const darkImgs = ['article-select.png', 'article-practice.png'];
const TOTAL = 2;

export default function FeatureArticleSelect({ darkMode }: FeatureArticleSelectProps) {
  const { t } = useI18n();
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchRef = useRef<{ startX: number; startY: number } | null>(null);
  const autoTimer = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((next: number) => {
    if (transitioning) return;
    const target = ((next % TOTAL) + TOTAL) % TOTAL;
    if (target === slide) return;
    setTransitioning(true);
    setSlide(target);
    setTimeout(() => setTransitioning(false), 500);
  }, [transitioning, slide]);

  // Auto-switch every 4s
  useEffect(() => {
    autoTimer.current = setInterval(() => goTo(slide + 1), 4000);
    return () => clearInterval(autoTimer.current);
  }, [slide, goTo]);

  // Touch / mouse drag
  const handleStart = useCallback((clientX: number) => {
    touchRef.current = { startX: clientX, startY: clientX };
  }, []);

  const handleEnd = useCallback((clientX: number) => {
    if (!touchRef.current) return;
    const dx = clientX - touchRef.current.startX;
    touchRef.current = null;
    if (Math.abs(dx) > 50) {
      clearInterval(autoTimer.current);
      autoTimer.current = setInterval(() => goTo(slide + 1), 4000);
      goTo(dx > 0 ? slide - 1 : slide + 1);
    }
  }, [slide, goTo]);

  const items = [
    { icon: Library, title: t.featArticleSelectPoint1, desc: t.featArticleSelectPoint1Desc },
    { icon: Upload, title: t.featArticleSelectPoint2, desc: t.featArticleSelectPoint2Desc },
    { icon: History, title: t.featArticleSelectPoint3, desc: t.featArticleSelectPoint3Desc },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
              {t.featArticleSelectTitle}
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t.featArticleSelectDesc}
            </p>

            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative group">
            <div
              className="relative rounded-2xl overflow-hidden screenshot-shadow select-none cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
              onMouseLeave={() => { touchRef.current = null; }}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            >
              {/* Slides container with transition */}
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {lightImgs.map((img, i) => (
                    <img
                      key={i}
                      src={import.meta.env.BASE_URL + 'screenshots/light/' + img}
                      alt={`文章练习 ${i + 1}`}
                      className="w-full h-auto shrink-0 block dark:hidden"
                      draggable={false}
                    />
                  ))}
                  {darkImgs.map((img, i) => (
                    <img
                      key={i}
                      src={import.meta.env.BASE_URL + 'screenshots/dark/' + img}
                      alt={`文章练习 ${i + 1}`}
                      className="w-full h-auto shrink-0 hidden dark:block"
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              {/* Arrow buttons - visible on hover */}
              <button
                onClick={() => goTo(slide - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-slate-700"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <button
                onClick={() => goTo(slide + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-slate-700"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
            </div>

            {/* Slide dots */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: TOTAL }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slide ? 'w-6 bg-purple-500' : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
