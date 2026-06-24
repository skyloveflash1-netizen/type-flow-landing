import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { screenshotPath } from '../utils/screenshots';
import { Library, Upload, History } from 'lucide-react';

interface FeatureArticlesProps {
  darkMode: boolean;
}

export default function FeatureArticles({ darkMode }: FeatureArticlesProps) {
  const { t, lang } = useI18n();

  const items = [
    { icon: Library, title: t.featArticlesPoint1, desc: t.featArticlesPoint1Desc },
    { icon: Upload, title: t.featArticlesPoint2, desc: t.featArticlesPoint2Desc },
    { icon: History, title: t.featArticlesPoint3, desc: t.featArticlesPoint3Desc },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Right: Screenshot, Left: Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
              {t.featArticlesTitle}
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t.featArticlesDesc}
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

          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow">
              <img src={screenshotPath(lang, darkMode ? 'dark' : 'light', 'article-select.png')} alt="文章练习" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
