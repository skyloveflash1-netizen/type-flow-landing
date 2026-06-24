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

const APP_STORAGE_KEY = 'typing-practice-v2';

function readAppLang(): Language | null {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const lang = parsed?.state?.settings?.language;
      if (lang && ['zh-CN', 'zh-TW', 'en'].includes(lang)) return lang;
    }
  } catch { /* ignore */ }
  return null;
}

function writeAppLang(lang: Language) {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    if (!data.state) data.state = {};
    if (!data.state.settings) data.state.settings = {};
    data.state.settings.language = lang;
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return readAppLang() || (localStorage.getItem('landing-lang') as Language) || detectLanguage();
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem('landing-lang', l);
    writeAppLang(l);
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
