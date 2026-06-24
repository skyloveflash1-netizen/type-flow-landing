import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { screenshotPath } from '../utils/screenshots';
import { Type, FileText, BookOpen, Keyboard } from 'lucide-react';

interface FeatureModeProps {
  darkMode: boolean;
}

export default function FeatureMode({ darkMode }: FeatureModeProps) {
  const { t, lang } = useI18n();

  const modes = [
    { icon: Type, color: 'emerald', title: t.featModeItem1, desc: t.featModeItem1Desc },
    { icon: FileText, color: 'brand', title: t.featModeItem2, desc: t.featModeItem2Desc },
    { icon: BookOpen, color: 'purple', title: t.featModeItem3, desc: t.featModeItem3Desc },
    { icon: Keyboard, color: 'orange', title: t.featModeItem4, desc: t.featModeItem4Desc },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; darkBg: string; darkBorder: string }> = {
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', darkBg: 'dark:bg-emerald-500/10', darkBorder: 'dark:border-emerald-500/20' },
    brand: { bg: 'bg-brand-50', text: 'text-brand-600', border: 'border-brand-200', darkBg: 'dark:bg-brand-500/10', darkBorder: 'dark:border-brand-500/20' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', darkBg: 'dark:bg-purple-500/10', darkBorder: 'dark:border-purple-500/20' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', darkBg: 'dark:bg-orange-500/10', darkBorder: 'dark:border-orange-500/20' },
  };

  return (
    <section id="features" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
            {t.featModeTitle}
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-500 max-w-xl mx-auto">
            {t.featModeDesc}
          </p>
        </div>

        {/* Left: Screenshot, Right: Mode cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Screenshot */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              <img src={screenshotPath(lang, darkMode ? 'dark' : 'light', 'mode-selection.png')} alt="练习模式选择" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500/10 rounded-2xl -z-10" />
          </div>

          {/* Mode cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {modes.map((mode) => {
              const c = colorMap[mode.color];
              return (
                <div
                  key={mode.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.darkBg} border ${c.border} ${c.darkBorder} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <mode.icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">{mode.title}</h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{mode.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
