import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Sun, Moon } from 'lucide-react';

interface FeatureSettingsProps {
  darkMode: boolean;
}

export default function FeatureSettings({ darkMode }: FeatureSettingsProps) {
  const { t } = useI18n();
  const [showLight, setShowLight] = useState(!darkMode);

  // Sync with global theme
  useEffect(() => {
    setShowLight(!darkMode);
  }, [darkMode]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              {showLight ? (
                <img src={import.meta.env.BASE_URL + 'screenshots/light/settings.png'} alt="亮色模式设置" className="w-full h-auto animate-fade-in" />
              ) : (
                <img src={import.meta.env.BASE_URL + 'screenshots/dark/settings.png'} alt="暗色模式设置" className="w-full h-auto animate-fade-in" />
              )}
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-amber-500/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
              {t.featSettingsTitle}
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t.featSettingsDesc}
            </p>

            <div className="space-y-4">
              {/* Light card - clickable */}
              <button
                onClick={() => setShowLight(true)}
                className={`w-full text-left flex gap-4 items-start p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  showLight
                    ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30 ring-1 ring-amber-300 dark:ring-amber-500/30'
                    : 'bg-amber-50/50 dark:bg-amber-500/5 border-amber-200/50 dark:border-amber-500/10 hover:border-amber-300 dark:hover:border-amber-500/20'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/15 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-white mb-1">{t.featSettingsLight}</div>
                  <div className="text-sm text-slate-400 dark:text-slate-500">{t.featSettingsLightDesc}</div>
                </div>
                {/* Check indicator */}
                {showLight && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>

              {/* Dark card - clickable */}
              <button
                onClick={() => setShowLight(false)}
                className={`w-full text-left flex gap-4 items-start p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  !showLight
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-300 dark:border-indigo-500/30 ring-1 ring-indigo-300 dark:ring-indigo-500/30'
                    : 'bg-indigo-50/50 dark:bg-indigo-500/5 border-indigo-200/50 dark:border-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/20'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/15 flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-white mb-1">{t.featSettingsDark}</div>
                  <div className="text-sm text-slate-400 dark:text-slate-500">{t.featSettingsDarkDesc}</div>
                </div>
                {!showLight && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
