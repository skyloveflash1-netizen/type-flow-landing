import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { languageNames, Language } from '../i18n/translations';
import { Sun, Moon, Globe, Keyboard, Play } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Keyboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
            TypeFlow
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t.navFeatures}</a>
          <a href="#download" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t.navDownload}</a>
          <a
            href={`${import.meta.env.BASE_URL}app/`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-xl transition-all hover:shadow-md hover:shadow-brand-500/25"
          >
            <Play className="w-3.5 h-3.5" />
            {t.tryOnline}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="appearance-none bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 pl-7 pr-6 py-2 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors outline-none"
            >
              {Object.entries(languageNames).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
            <Globe className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          </div>
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={darkMode ? t.switchLight : t.switchDark}
          >
            {darkMode ? (
              <Sun className="w-[18px] h-[18px] text-amber-400" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-slate-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
