import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Keyboard } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-700/40 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                <Keyboard className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-800 dark:text-white">TypeFlow</span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
              {t.footerTagline}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-white mb-3">{t.footerResources}</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-xs text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors">{t.navFeatures}</a>
              <a href="#download" className="block text-xs text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors">{t.navDownload}</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-white mb-3">{t.footerConnect}</h4>
            <div className="space-y-2">
              <a href="mailto:skyloveflash@163.com" className="block text-xs text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors">Email</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-white mb-3">{t.footerLegal}</h4>
            <div className="space-y-2">
              <a href="#" className="block text-xs text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors">{t.footerPrivacy}</a>
              <a href="#" className="block text-xs text-slate-400 dark:text-slate-500 hover:text-brand-500 transition-colors">{t.footerTerms}</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center pt-6 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-400 dark:text-slate-500">{t.footerCopyright}</span>
        </div>
      </div>
    </footer>
  );
}
