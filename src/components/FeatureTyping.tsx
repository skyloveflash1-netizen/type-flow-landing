import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Gauge, Target, Volume2 } from 'lucide-react';

interface FeatureTypingProps {
  darkMode: boolean;
}

export default function FeatureTyping({ darkMode }: FeatureTypingProps) {
  const { t } = useI18n();

  const items = [
    { icon: Gauge, title: t.featTypingPoint1, desc: t.featTypingPoint1Desc },
    { icon: Target, title: t.featTypingPoint2, desc: t.featTypingPoint2Desc },
    { icon: Volume2, title: t.featTypingPoint3, desc: t.featTypingPoint3Desc },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Left: Screenshot, Right: Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              {darkMode ? (
                <img src={import.meta.env.BASE_URL + 'screenshots/dark/typing-practice.png'} alt="打字练习界面" className="w-full h-auto" />
              ) : (
                <img src={import.meta.env.BASE_URL + 'screenshots/light/typing-practice.png'} alt="打字练习界面" className="w-full h-auto" />
              )}
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-brand-500/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
              {t.featTypingTitle}
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t.featTypingDesc}
            </p>

            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
