import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { screenshotPath } from '../utils/screenshots';
import { CheckCircle2 } from 'lucide-react';

interface FeatureKeyPracticeProps {
  darkMode: boolean;
}

export default function FeatureKeyPractice({ darkMode }: FeatureKeyPracticeProps) {
  const { t, lang } = useI18n();

  const points = [
    { title: t.featKeyPoint1, desc: t.featKeyPoint1Desc },
    { title: t.featKeyPoint2, desc: t.featKeyPoint2Desc },
    { title: t.featKeyPoint3, desc: t.featKeyPoint3Desc },
    { title: t.featKeyPoint4, desc: t.featKeyPoint4Desc },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Right: Screenshot, Left: Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
              {t.featKeyTitle}
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t.featKeyDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">{p.title}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              <img src={screenshotPath(lang, darkMode ? 'dark' : 'light', 'level-select.png')} alt="键位练习关卡" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-orange-500/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
