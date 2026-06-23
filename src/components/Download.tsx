import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Monitor, Apple, Terminal, Tablet, Smartphone, Download as DownloadIcon, Clock } from 'lucide-react';

export default function Download() {
  const { t } = useI18n();

  const platforms = [
    { icon: Monitor, label: 'Windows', id: 'windows', available: true, color: 'text-blue-500' },
    { icon: Apple, label: 'macOS', id: 'mac', available: false, color: 'text-slate-600 dark:text-slate-300' },
    { icon: Terminal, label: 'Linux', id: 'linux', available: false, color: 'text-orange-500' },
    { icon: Tablet, label: 'Android Pad', id: 'android-pad', available: false, color: 'text-emerald-500' },
    { icon: Tablet, label: 'iPad', id: 'ipad', available: false, color: 'text-slate-600 dark:text-slate-300' },
    { icon: Smartphone, label: 'Android', id: 'android', available: false, color: 'text-emerald-500' },
    { icon: Smartphone, label: 'iOS', id: 'ios', available: false, color: 'text-slate-600 dark:text-slate-300' },
  ];

  return (
    <section id="download" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-4">
          {t.downloadTitle}
        </h2>
        <p className="text-base text-slate-400 dark:text-slate-500 max-w-lg mx-auto mb-12">
          {t.downloadDesc}
        </p>

        {/* Platform cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {platforms.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl border transition-all duration-300 ${
                p.available
                  ? 'bg-white dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/40 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-brand-500/5 cursor-pointer'
                  : 'bg-slate-50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-700/30 opacity-60'
              }`}
            >
              <div className="p-5 flex flex-col items-center text-center">
                <p.icon className={`w-8 h-8 mb-3 ${p.color}`} />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                  {p.label}
                </span>
                {p.available ? (
                  <a
                    href="https://github.com/skyloveflash1-netizen/type-flow-landing/releases/download/v1.0.0/typeflow.zip"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25"
                  >
                    <DownloadIcon className="w-3.5 h-3.5" />
                    {t.downloadBtn}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-xs rounded-xl">
                    <Clock className="w-3.5 h-3.5" />
                    {t.downloadComingSoon}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          {t.downloadNote} · {t.downloadPlatformNote}
        </p>
      </div>
    </section>
  );
}
