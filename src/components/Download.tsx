import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Monitor, Apple, Terminal, Tablet, Smartphone, Download as DownloadIcon, Clock, Copy, Check, X } from 'lucide-react';

export default function Download() {
  const { t } = useI18n();
  const [linuxOpen, setLinuxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const linuxDownloadUrl = 'https://github.com/skyloveflash1-netizen/type-flow-landing/releases/download/v1.0.0/TypeFlow_1.0.0_amd64.deb';
  const linuxInstallCmd = 'wget https://github.com/skyloveflash1-netizen/type-flow-landing/releases/download/v1.0.0/TypeFlow_1.0.0_amd64.deb && sudo dpkg -i TypeFlow_1.0.0_amd64.deb && sudo apt-get install -f';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linuxInstallCmd);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = linuxInstallCmd;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms = [
    { icon: Monitor, label: 'Windows', id: 'windows', available: true, color: 'text-blue-500', url: 'https://github.com/skyloveflash1-netizen/type-flow-landing/releases/download/v1.0.0/typeflow.zip', isLinux: false },
    { icon: Apple, label: 'macOS', id: 'mac', available: false, color: 'text-slate-600 dark:text-slate-300', url: '', isLinux: false },
    { icon: Terminal, label: 'Linux', id: 'linux', available: true, color: 'text-orange-500', url: '', isLinux: true },
    { icon: Smartphone, label: 'Android', id: 'android', available: true, color: 'text-emerald-500', url: 'https://github.com/skyloveflash1-netizen/type-flow-landing/releases/download/v1.0.0/TypeFlow_1.0.0_android.apk', isLinux: false },
    { icon: Tablet, label: 'iPad', id: 'ipad', available: false, color: 'text-slate-600 dark:text-slate-300', url: '', isLinux: false },
    { icon: Tablet, label: 'Android Pad', id: 'android-pad', available: false, color: 'text-slate-600 dark:text-slate-300', url: '', isLinux: false },
    { icon: Smartphone, label: 'iOS', id: 'ios', available: false, color: 'text-slate-600 dark:text-slate-300', url: '', isLinux: false },
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
                  p.isLinux ? (
                    <button
                      onClick={() => setLinuxOpen(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25"
                    >
                      <DownloadIcon className="w-3.5 h-3.5" />
                      {t.downloadBtn}
                    </button>
                  ) : (
                    <a
                      href={p.url}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25"
                    >
                      <DownloadIcon className="w-3.5 h-3.5" />
                      {t.downloadBtn}
                    </a>
                  )
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

        <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
          {t.downloadNote} · {t.downloadPlatformNote}
        </p>
        <p className="text-xs text-amber-500 dark:text-amber-400 font-medium">
          ⚠ {t.downloadKeyboardNote}
        </p>

        {/* Linux Popover */}
        {linuxOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setLinuxOpen(false)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200/60 dark:border-slate-700/40 w-full max-w-sm overflow-hidden animate-in fade-in zoom-in">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-slate-800 dark:text-white text-sm">Linux</span>
                  </div>
                  <button
                    onClick={() => setLinuxOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  {/* System info */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.linuxInstallTip}
                  </p>

                  {/* Option 1: Direct download */}
                  <a
                    href={linuxDownloadUrl}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 hover:bg-brand-50 dark:hover:bg-brand-500/10 border border-slate-100 dark:border-slate-700/30 hover:border-brand-200 dark:hover:border-brand-500/20 transition-all group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                      <DownloadIcon className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        直接下载 .deb 包
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        下载后手动安装
                      </div>
                    </div>
                  </a>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700/50" />
                    <span className="text-xs text-slate-400 dark:text-slate-500">或者</span>
                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700/50" />
                  </div>

                  {/* Option 2: Copy command */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">一键安装命令</span>
                      <button
                        onClick={handleCopy}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          copied
                            ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400'
                            : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 hover:bg-brand-100 dark:hover:bg-brand-500/20 hover:text-brand-600 dark:hover:text-brand-400'
                        }`}
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3" />
                            已复制
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            复制
                          </>
                        )}
                      </button>
                    </div>
                    <code className="block text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-3 py-2 rounded-lg font-mono select-all leading-relaxed overflow-x-auto whitespace-nowrap">
                      {linuxInstallCmd}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
