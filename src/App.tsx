import React, { useState, useEffect, useCallback } from 'react';
import { I18nProvider } from './i18n/I18nContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureMode from './components/FeatureMode';
import FeatureKeyPractice from './components/FeatureKeyPractice';
import FeatureTyping from './components/FeatureTyping';
import FeatureArticleSelect from './components/FeatureArticleSelect';
import FeatureSettings from './components/FeatureSettings';
import Download from './components/Download';
import Footer from './components/Footer';

const APP_STORAGE_KEY = 'typing-practice-v2';

function syncDarkModeToApp(dark: boolean) {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    if (!data.state) data.state = {};
    if (!data.state.settings) data.state.settings = {};
    data.state.settings.darkMode = dark;
    // 确保 version 字段存在，否则 web app 的 Zustand 可能无法正确读取
    if (data.version === undefined) data.version = 0;
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    // 优先读取 app 的持久化设置（app 用 settings.darkMode boolean）
    try {
      const raw = localStorage.getItem(APP_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.state?.settings?.darkMode !== undefined) {
          return parsed.state.settings.darkMode;
        }
      }
    } catch { /* ignore */ }
    const saved = localStorage.getItem('landing-theme');
    if (saved !== null) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('landing-theme', darkMode ? 'dark' : 'light');
    // 注意：不再在 useEffect 中自动写入 app storage！
    // 只有当用户主动切换时才写入（在 toggleDark 中处理），
    // 避免 mount 时用系统默认值覆盖用户已有的设置。
  }, [darkMode]);

  const toggleDark = useCallback(() => {
    setDarkMode((v) => {
      const next = !v;
      // 只有用户主动切换时才同步到 app 存储
      syncDarkModeToApp(next);
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero />
        <FeatureMode darkMode={darkMode} />
        <FeatureKeyPractice darkMode={darkMode} />
        <FeatureTyping darkMode={darkMode} />
        <FeatureArticleSelect darkMode={darkMode} />
        <FeatureSettings darkMode={darkMode} />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
