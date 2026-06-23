import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Language, LandingDict } from './translations';
import { translations } from './translations';

interface I18nContextType {
  t: LandingDict;
  lang: Language;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'zh-CN';
  const lang = navigator.language || '';
  if (lang.startsWith('zh-TW') || lang.startsWith('zh-HK')) return 'zh-TW';
  if (lang.startsWith('zh')) return 'zh-CN';
  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('landing-lang');
    return (saved as Language) || detectLanguage();
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem('landing-lang', l);
  }, []);

  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
