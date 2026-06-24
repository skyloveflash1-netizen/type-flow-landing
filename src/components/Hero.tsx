import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { screenshotPath } from '../utils/screenshots';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
  const { t, lang } = useI18n();
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const items = t.heroDescRotating || [];

  useEffect(() => {
    if (items.length === 0) return;
    const current = items[rotatingIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRotatingIndex((prev) => (prev + 1) % items.length);
        }
      }
    };

    const speed = isDeleting ? 30 : displayText.length === current.length ? 2000 : 50 + Math.random() * 40;
    const timer = setTimeout(tick, isDeleting && displayText.length === 0 ? 300 : speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, rotatingIndex, items]);

  // Reset on language change
  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setRotatingIndex(0);
  }, [t.heroDescRotating]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-400/20 dark:bg-brand-600/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="relative max-w-[1400px] mx-auto">
          {/* Wide screen: big screenshot overlapping from right */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[68%] max-w-[1050px] animate-scale-in z-0 pointer-events-none select-none" style={{ animationDelay: '0.1s' }}>
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              <img
                src={screenshotPath(lang, 'light', 'home.png')}
                alt=""
                className="w-full h-auto block dark:hidden"
                loading="eager"
              />
              <img
                src={screenshotPath(lang, 'dark', 'home.png')}
                alt=""
                className="w-full h-auto hidden dark:block"
                loading="eager"
              />
            </div>
            {/* Gradient fade on left edge for text readability */}
            <div className="absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white dark:from-slate-900 via-white/30 dark:via-slate-900/30 to-transparent pointer-events-none" />
          </div>

          {/* Text content */}
          <div className="relative z-10 lg:max-w-[38%]">
            <div className="animate-fade-in mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-brand-200/60 dark:border-brand-500/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">{t.heroVersion}</span>
            </div>

            <h1 className="animate-slide-up text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="text-slate-800 dark:text-white">{t.heroTitle}</span>
              <br />
              <span className="hero-gradient">{t.heroTitleHighlight}</span>
            </h1>

            <p className="animate-slide-up text-sm font-semibold text-brand-500 dark:text-brand-400 mb-4" style={{ animationDelay: '0.1s' }}>
              {t.heroSubtitle}
            </p>

            <p className="animate-slide-up text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-3" style={{ animationDelay: '0.15s' }}>
              {t.heroDesc}
            </p>

            {/* Rotating typewriter effect */}
            <div className="animate-slide-up flex items-center gap-2 mb-8" style={{ animationDelay: '0.15s' }}>
              <span className="inline-block w-1.5 h-5 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-base text-slate-600 dark:text-slate-300 leading-relaxed min-h-[1.75rem]">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-brand-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </div>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-3" style={{ animationDelay: '0.2s' }}>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                <ArrowDown className="w-4 h-4" />
                {t.heroCta}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}app/`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-brand-600 dark:text-brand-400 font-semibold rounded-2xl border border-brand-200 dark:border-brand-500/20 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                <Play className="w-4 h-4" />
                在线试用
              </a>
            </div>

            <div className="animate-fade-in mt-12 flex gap-10" style={{ animationDelay: '0.3s' }}>
              {[
                { value: t.heroStats1, label: t.heroStats1Label },
                { value: t.heroStats2, label: t.heroStats2Label },
                { value: t.heroStats3, label: t.heroStats3Label },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-mono text-slate-800 dark:text-white tabular-nums">{stat.value}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Narrow screen: screenshot below text */}
        <div className="lg:hidden mt-10 animate-scale-in relative" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl overflow-hidden screenshot-shadow max-w-lg mx-auto">
            <img
              src={screenshotPath(lang, 'light', 'home.png')}
              alt="TypeFlow 首页"
              className="w-full h-auto block dark:hidden"
              loading="eager"
            />
            <img
              src={screenshotPath(lang, 'dark', 'home.png')}
              alt="TypeFlow Home"
              className="w-full h-auto hidden dark:block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
