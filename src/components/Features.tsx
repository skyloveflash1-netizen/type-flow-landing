import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import {
  BookOpen,
  FileText,
  Keyboard,
  BarChart3,
  Palette,
  Type,
} from 'lucide-react';

export default function Features() {
  const { t } = useI18n();

  const features = [
    {
      icon: Type,
      color: 'emerald',
      title: t.featWordTitle,
      desc: t.featWordDesc,
    },
    {
      icon: FileText,
      color: 'brand',
      title: t.featSentenceTitle,
      desc: t.featSentenceDesc,
    },
    {
      icon: BookOpen,
      color: 'purple',
      title: t.featArticleTitle,
      desc: t.featArticleDesc,
    },
    {
      icon: Keyboard,
      color: 'orange',
      title: t.featKeyTitle,
      desc: t.featKeyDesc,
    },
    {
      icon: BarChart3,
      color: 'amber',
      title: t.featStatsTitle,
      desc: t.featStatsDesc,
    },
    {
      icon: Palette,
      color: 'indigo',
      title: t.featThemeTitle,
      desc: t.featThemeDesc,
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; darkBg: string; darkBorder: string }> = {
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      darkBg: 'dark:bg-emerald-500/10',
      darkBorder: 'dark:border-emerald-500/20',
    },
    brand: {
      bg: 'bg-brand-50',
      text: 'text-brand-600',
      border: 'border-brand-200',
      darkBg: 'dark:bg-brand-500/10',
      darkBorder: 'dark:border-brand-500/20',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      darkBg: 'dark:bg-purple-500/10',
      darkBorder: 'dark:border-purple-500/20',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      darkBg: 'dark:bg-orange-500/10',
      darkBorder: 'dark:border-orange-500/20',
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      darkBg: 'dark:bg-amber-500/10',
      darkBorder: 'dark:border-amber-500/20',
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      darkBg: 'dark:bg-indigo-500/10',
      darkBorder: 'dark:border-indigo-500/20',
    },
  };

  return (
    <section id="features" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-500 max-w-xl mx-auto leading-relaxed">
            {t.featuresDesc}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat) => {
            const c = colorClasses[feat.color];
            return (
              <div
                key={feat.title}
                className="group relative bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.darkBg} border ${c.border} ${c.darkBorder} flex items-center justify-center mb-4`}>
                  <feat.icon className={`w-5.5 h-5.5 ${c.text}`} />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
