import type { Language } from '../i18n/translations';

const langFolder: Record<Language, string> = {
  'zh-CN': 'cn',
  'zh-TW': 'tw',
  en: 'en',
};

export function screenshotPath(lang: Language, theme: 'light' | 'dark', filename: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}screenshots/${langFolder[lang]}/${theme}/${filename}`;
}
