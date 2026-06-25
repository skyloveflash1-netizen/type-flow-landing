export type Language = 'zh-CN' | 'zh-TW' | 'en';

export interface LandingDict {
  // Nav
  navFeatures: string;
  navDownload: string;

  // Hero
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroDesc: string;
  heroDescRotating: string[];
  heroCta: string;
  tryOnline: string;
  heroVersion: string;
  heroStats1: string;
  heroStats1Label: string;
  heroStats2: string;
  heroStats2Label: string;
  heroStats3: string;
  heroStats3Label: string;

  // Feature - Mode Selection
  featModeTitle: string;
  featModeDesc: string;
  featModeItem1: string;
  featModeItem1Desc: string;
  featModeItem2: string;
  featModeItem2Desc: string;
  featModeItem3: string;
  featModeItem3Desc: string;
  featModeItem4: string;
  featModeItem4Desc: string;

  // Feature - Key Practice
  featKeyTitle: string;
  featKeyDesc: string;
  featKeyPoint1: string;
  featKeyPoint1Desc: string;
  featKeyPoint2: string;
  featKeyPoint2Desc: string;
  featKeyPoint3: string;
  featKeyPoint3Desc: string;
  featKeyPoint4: string;
  featKeyPoint4Desc: string;

  // Feature - Typing Practice
  featTypingTitle: string;
  featTypingDesc: string;
  featTypingPoint1: string;
  featTypingPoint1Desc: string;
  featTypingPoint2: string;
  featTypingPoint2Desc: string;
  featTypingPoint3: string;
  featTypingPoint3Desc: string;

  // Feature - Articles
  featArticleSelectTitle: string;
  featArticleSelectDesc: string;
  featArticleSelectPoint1: string;
  featArticleSelectPoint1Desc: string;
  featArticleSelectPoint2: string;
  featArticleSelectPoint2Desc: string;
  featArticleSelectPoint3: string;
  featArticleSelectPoint3Desc: string;

  featArticlePracticeTitle: string;
  featArticlePracticeDesc: string;
  featArticlePracticePoint1: string;
  featArticlePracticePoint1Desc: string;
  featArticlePracticePoint2: string;
  featArticlePracticePoint2Desc: string;
  featArticlePracticePoint3: string;
  featArticlePracticePoint3Desc: string;

  // Feature - Settings / Dark Mode
  featSettingsTitle: string;
  featSettingsDesc: string;
  featSettingsLight: string;
  featSettingsLightDesc: string;
  featSettingsDark: string;
  featSettingsDarkDesc: string;

  // Download
  downloadTitle: string;
  downloadDesc: string;
  downloadBtn: string;
  downloadComingSoon: string;
  downloadNote: string;
  downloadPlatformNote: string;
  linuxInstallTip: string;
  linuxInstallCmd: string;
  linuxDirectDownload: string;
  linuxDirectDownloadDesc: string;
  linuxOr: string;
  linuxCopyBtn: string;
  linuxCopied: string;
  downloadKeyboardNote: string;

  // Footer
  footerTagline: string;
  footerResources: string;
  footerConnect: string;
  footerLegal: string;
  footerPrivacy: string;
  footerTerms: string;
  footerCopyright: string;

  // Theme
  switchLight: string;
  switchDark: string;

  // Language
  languageLabel: string;
}

const zhCN: LandingDict = {
  navFeatures: '功能',
  navDownload: '下载',

  heroTitle: '从零开始，',
  heroTitleHighlight: '学会打字',
  heroSubtitle: '专为入门学习者打造，循序渐进掌握正确指法',
  heroDesc: '连接真实键盘，从基准键位开始，循序渐进掌握正确指法。',
  heroDescRotating: [
    '适合零基础入门，也适合进阶提高',
    '从键位练习开始，20个关卡循序突破',
    '单词、语句、文章，三种模式逐步提升',
    '实时速度显示，让每一次进步都看得见',
    '平板接键盘、电脑，随时随地都能练',
    '给孩子一个简单纯粹的练习环境',
  ],
  heroCta: '免费下载',
  tryOnline: '在线试用',
  heroVersion: 'v1.0.0 · 完全免费',
  heroStats1: '20+',
  heroStats1Label: '键位关卡',
  heroStats2: '4',
  heroStats2Label: '练习模式',
  heroStats3: '6',
  heroStats3Label: '支持平台',

  featModeTitle: '四种练习模式',
  featModeDesc: '从入门到精通，覆盖打字学习的每一个阶段',
  featModeItem1: '单词练习',
  featModeItem1Desc: '高频核心词汇，建立肌肉记忆，让每个字母都成为本能。',
  featModeItem2: '语句练习',
  featModeItem2Desc: '完整句子输入，在流畅的节奏中提升连贯打字能力。',
  featModeItem3: '文章练习',
  featModeItem3Desc: '长篇阅读输入，综合提升速度、准确率与耐力。',
  featModeItem4: '键位练习',
  featModeItem4Desc: '新手必练，20个关卡循序渐进，建立正确指法。',

  featKeyTitle: '键位练习 · 20个渐进关卡',
  featKeyDesc: '从基准键位 F/J 开始，逐键突破上排、下排，最终掌握全部 26 个字母的正确指法。',
  featKeyPoint1: '基准键位',
  featKeyPoint1Desc: 'F/J 定位键开始，建立手指归位习惯',
  featKeyPoint2: '上排延伸',
  featKeyPoint2Desc: 'QWERT YUIOP，食指到小指逐个突破',
  featKeyPoint3: '下排延伸',
  featKeyPoint3Desc: 'ZXCVB NM,./，巩固下排键位记忆',
  featKeyPoint4: '全字母挑战',
  featKeyPoint4Desc: '26个字母自由组合，检验综合水平',

  featTypingTitle: '沉浸式打字体验',
  featTypingDesc: '实时 WPM 速度显示、准确率统计、进度追踪，让每一次练习都有明确目标。',
  featTypingPoint1: '实时 WPM',
  featTypingPoint1Desc: '即时显示打字速度，见证每一次进步',
  featTypingPoint2: '准确率追踪',
  featTypingPoint2Desc: '正确/错误字符高亮区分，精准定位薄弱键位',
  featTypingPoint3: '语音朗读',
  featTypingPoint3Desc: '单词练习时自动朗读，多感官强化记忆',

  featArticleSelectTitle: '文章选择 · 自由导入',
  featArticleSelectDesc: '内置多篇精选英文文章，支持粘贴自定义内容，自动分段，让练习素材取之不尽。',
  featArticleSelectPoint1: '内置文章',
  featArticleSelectPoint1Desc: '科技、阅读、环保、脑科学等多个主题',
  featArticleSelectPoint2: '自由导入',
  featArticleSelectPoint2Desc: '粘贴任意英文内容，自动分段，即时练习',
  featArticleSelectPoint3: '进度保存',
  featArticleSelectPoint3Desc: '记录每篇文章的练习历史，随时继续',

  featArticlePracticeTitle: '文章练习 · 长篇输入',
  featArticlePracticeDesc: '沉浸式长篇阅读输入，在完整语境中综合提升速度、准确率与耐力。',
  featArticlePracticePoint1: '实时统计',
  featArticlePracticePoint1Desc: 'WPM 速度、准确率、进度百分比实时更新',
  featArticlePracticePoint2: '分屏对照',
  featArticlePracticePoint2Desc: '上排原文对照，下排打字输入，视觉流畅',
  featArticlePracticePoint3: '段落跳转',
  featArticlePracticePoint3Desc: '支持分段练习，完成后自动进入下一段',

  featSettingsTitle: '亮色 & 暗色主题',
  featSettingsDesc: '支持亮色/暗色模式一键切换，适配不同光线环境，保护视力。',
  featSettingsLight: '亮色模式',
  featSettingsLightDesc: '简洁清爽的白色主题，适合白天使用',
  featSettingsDark: '暗色模式',
  featSettingsDarkDesc: '深邃护眼的暗色主题，适合夜间练习',

  downloadTitle: '开始你的打字之旅',
  downloadDesc: 'TypeFlow 完全免费，持续更新中。选择你的平台开始练习。',
  downloadBtn: '下载',
  downloadComingSoon: '即将上线',
  downloadNote: 'Windows / macOS / Linux / Android 版本已发布',
  downloadPlatformNote: 'iPad / iOS 正在开发中',
  linuxInstallTip: 'AppImage 适用于所有 Linux 发行版。deb 包适用于 Ubuntu 22.04+、Debian 12+、Linux Mint 21+ 等（x86_64）',
  linuxInstallCmd: '一键安装命令',
  downloadKeyboardNote: '所有平台均需外接真实键盘使用',

  footerTagline: '让打字练习变得简单而高效',
  footerResources: '资源',
  footerConnect: '联系我们',
  footerLegal: '法律',
  footerPrivacy: '隐私政策',
  footerTerms: '服务条款',
  footerCopyright: '© 2026 TypeFlow',

  switchLight: '切换亮色模式',
  switchDark: '切换暗色模式',

  languageLabel: '语言',
};

const zhTW: LandingDict = {
  ...zhCN,
  heroTitle: '從零開始，',
  heroTitleHighlight: '學會打字',
  heroSubtitle: '專為入門學習者打造，循序漸進掌握正確指法',
  heroDesc: '連接真實鍵盤，從基準鍵位開始，循序漸進掌握正確指法。',
  heroDescRotating: [
    '適合零基礎入門，也適合進階提高',
    '從鍵位練習開始，20個關卡循序突破',
    '單詞、語句、文章，三種模式逐步提升',
    '即時速度顯示，讓每一次進步都看得見',
    '平板接鍵盤、電腦，隨時隨地都能練',
    '給孩子一個簡單純粹的練習環境',
  ],
  heroCta: '免費下載',
  tryOnline: '線上試用',
  heroVersion: 'v1.0.0 · 完全免費',
  heroStats1: '20+',
  heroStats1Label: '鍵位關卡',
  heroStats2: '4',
  heroStats2Label: '練習模式',
  heroStats3: '6',
  heroStats3Label: '支援平台',

  featModeTitle: '四種練習模式',
  featModeDesc: '從入門到精通，覆蓋打字學習的每一個階段',
  featModeItem1: '單詞練習',
  featModeItem1Desc: '高頻核心詞彙，建立肌肉記憶，讓每個字母都成為本能。',
  featModeItem2: '語句練習',
  featModeItem2Desc: '完整句子輸入，在流暢的節奏中提升連貫打字能力。',
  featModeItem3: '文章練習',
  featModeItem3Desc: '長篇閱讀輸入，綜合提升速度、準確率與耐力。',
  featModeItem4: '鍵位練習',
  featModeItem4Desc: '新手必練，20個關卡循序漸進，建立正確指法。',

  featKeyTitle: '鍵位練習 · 20個漸進關卡',
  featKeyDesc: '從基準鍵位 F/J 開始，逐鍵突破上排、下排，最終掌握全部 26 個字母的正確指法。',
  featKeyPoint1: '基準鍵位',
  featKeyPoint1Desc: 'F/J 定位鍵開始，建立手指歸位習慣',
  featKeyPoint2: '上排延伸',
  featKeyPoint2Desc: 'QWERT YUIOP，食指到小指逐個突破',
  featKeyPoint3: '下排延伸',
  featKeyPoint3Desc: 'ZXCVB NM,./，鞏固下排鍵位記憶',
  featKeyPoint4: '全字母挑戰',
  featKeyPoint4Desc: '26個字母自由組合，檢驗綜合水平',

  featTypingTitle: '沉浸式打字體驗',
  featTypingDesc: '即時 WPM 速度顯示、準確率統計、進度追蹤，讓每一次練習都有明確目標。',
  featTypingPoint1: '即時 WPM',
  featTypingPoint1Desc: '即時顯示打字速度，見證每一次進步',
  featTypingPoint2: '準確率追蹤',
  featTypingPoint2Desc: '正確/錯誤字元高亮區分，精準定位薄弱鍵位',
  featTypingPoint3: '語音朗讀',
  featTypingPoint3Desc: '單詞練習時自動朗讀，多感官強化記憶',

  featArticleSelectTitle: '文章選擇 · 自由匯入',
  featArticleSelectDesc: '內建多篇精選英文文章，支援貼上自訂內容，自動分段，讓練習素材取之不盡。',
  featArticleSelectPoint1: '內建文章',
  featArticleSelectPoint1Desc: '科技、閱讀、環保、腦科學等多個主題',
  featArticleSelectPoint2: '自由匯入',
  featArticleSelectPoint2Desc: '貼上任意英文內容，自動分段，即時練習',
  featArticleSelectPoint3: '進度儲存',
  featArticleSelectPoint3Desc: '記錄每篇文章的練習歷史，隨時繼續',

  featArticlePracticeTitle: '文章練習 · 長篇輸入',
  featArticlePracticeDesc: '沉浸式長篇閱讀輸入，在完整語境中綜合提升速度、準確率與耐力。',
  featArticlePracticePoint1: '即時統計',
  featArticlePracticePoint1Desc: 'WPM 速度、準確率、進度百分比即時更新',
  featArticlePracticePoint2: '分屏對照',
  featArticlePracticePoint2Desc: '上排原文對照，下排打字輸入，視覺流暢',
  featArticlePracticePoint3: '段落跳轉',
  featArticlePracticePoint3Desc: '支援分段練習，完成後自動進入下一段',

  featSettingsTitle: '亮色 & 暗色主題',
  featSettingsDesc: '支援亮色/暗色模式一鍵切換，適配不同光線環境，保護視力。',
  featSettingsLight: '亮色模式',
  featSettingsLightDesc: '簡潔清爽的白色主題，適合白天使用',
  featSettingsDark: '暗色模式',
  featSettingsDarkDesc: '深邃護眼的暗色主題，適合夜間練習',

  downloadTitle: '開始你的打字之旅',
  downloadDesc: 'TypeFlow 完全免費，持續更新中。選擇你的平台開始練習。',
  downloadBtn: '下載',
  downloadComingSoon: '即將上線',
  downloadNote: 'Windows / macOS / Linux / Android 版本已發佈',
  downloadPlatformNote: 'iPad / iOS 正在開發中',
  linuxInstallTip: 'AppImage 適用於所有 Linux 發行版。deb 包適用於 Ubuntu 22.04+、Debian 12+、Linux Mint 21+ 等（x86_64）',
  linuxInstallCmd: '一鍵安裝命令',
  downloadKeyboardNote: '所有平台均需外接真實鍵盤使用',

  footerTagline: '讓打字練習變得簡單而高效',
  footerResources: '資源',
  footerConnect: '聯絡我們',
  footerLegal: '法律',
  footerPrivacy: '隱私政策',
  footerTerms: '服務條款',
  footerCopyright: '© 2026 TypeFlow',

  switchLight: '切換亮色模式',
  switchDark: '切換暗色模式',

  languageLabel: '語言',
};

const en: LandingDict = {
  navFeatures: 'Features',
  navDownload: 'Download',

  heroTitle: 'Learn Typing',
  heroTitleHighlight: 'From Scratch',
  heroSubtitle: 'Built for beginners — master proper finger placement step by step',
  heroDesc: 'Connect a real keyboard. Start from the home row and build proper finger habits step by step.',
  heroDescRotating: [
    'Perfect for absolute beginners and improvers',
    'Start with key practice, 20 levels to master',
    'Word, sentence, article — three modes to grow',
    'Real-time speed tracking to see every gain',
    'Works on PC, tablet + keyboard, anywhere',
    'A clean, distraction-free environment for kids',
  ],
  heroCta: 'Download Free',
  tryOnline: 'Try Online',
  heroVersion: 'v1.0.0 · Free',
  heroStats1: '20+',
  heroStats1Label: 'Key Levels',
  heroStats2: '4',
  heroStats2Label: 'Modes',
  heroStats3: '6',
  heroStats3Label: 'Platforms',

  featModeTitle: 'Four Practice Modes',
  featModeDesc: 'From beginner to mastery, covering every stage of typing learning',
  featModeItem1: 'Word Practice',
  featModeItem1Desc: 'High-frequency vocabulary to build muscle memory from the ground up.',
  featModeItem2: 'Sentence Practice',
  featModeItem2Desc: 'Complete sentences to improve flow and coherent typing ability.',
  featModeItem3: 'Article Practice',
  featModeItem3Desc: 'Long-form reading input to boost speed, accuracy, and endurance.',
  featModeItem4: 'Key Practice',
  featModeItem4Desc: 'Essential for beginners. 20 progressive levels to master proper fingering.',

  featKeyTitle: 'Key Practice · 20 Progressive Levels',
  featKeyDesc: 'Start from F/J home keys, progressively master upper row, lower row, and finally all 26 letters with correct finger placement.',
  featKeyPoint1: 'Home Row',
  featKeyPoint1Desc: 'Start with F/J anchor keys to build finger homing habits',
  featKeyPoint2: 'Upper Row',
  featKeyPoint2Desc: 'QWERT YUIOP, break through from index to pinky',
  featKeyPoint3: 'Lower Row',
  featKeyPoint3Desc: 'ZXCVB NM,./, reinforce lower row key memory',
  featKeyPoint4: 'All Letters',
  featKeyPoint4Desc: '26 letters in random combinations to test your skills',

  featTypingTitle: 'Immersive Typing Experience',
  featTypingDesc: 'Real-time WPM display, accuracy tracking, and progress monitoring give every practice session a clear goal.',
  featTypingPoint1: 'Live WPM',
  featTypingPoint1Desc: 'Instant speed display to witness every improvement',
  featTypingPoint2: 'Accuracy Tracking',
  featTypingPoint2Desc: 'Correct/error character highlighting to pinpoint weak keys',
  featTypingPoint3: 'Voice Reading',
  featTypingPoint3Desc: 'Auto-read completed words for multi-sensory memory reinforcement',

  featArticleSelectTitle: 'Article Select · Free Import',
  featArticleSelectDesc: 'Built-in curated English articles with support for custom content paste and auto-segmentation. Endless practice material.',
  featArticleSelectPoint1: 'Built-in Articles',
  featArticleSelectPoint1Desc: 'Topics covering tech, reading, environment, brain science, and more',
  featArticleSelectPoint2: 'Free Import',
  featArticleSelectPoint2Desc: 'Paste any English content, auto-segmented for instant practice',
  featArticleSelectPoint3: 'Progress Saving',
  featArticleSelectPoint3Desc: 'Track practice history for each article, resume anytime',

  featArticlePracticeTitle: 'Article Practice · Long-form Input',
  featArticlePracticeDesc: 'Immersive long-form reading input. Comprehensively improve speed, accuracy, and endurance in full context.',
  featArticlePracticePoint1: 'Live Stats',
  featArticlePracticePoint1Desc: 'WPM, accuracy, and progress updated in real-time',
  featArticlePracticePoint2: 'Split View',
  featArticlePracticePoint2Desc: 'Original text on top, typing area below for smooth visual flow',
  featArticlePracticePoint3: 'Section Jump',
  featArticlePracticePoint3Desc: 'Practice by sections, auto-advance to the next when done',

  featSettingsTitle: 'Light & Dark Themes',
  featSettingsDesc: 'One-click toggle between light and dark modes, adapting to any lighting environment while protecting your eyes.',
  featSettingsLight: 'Light Mode',
  featSettingsLightDesc: 'Clean and crisp white theme, ideal for daytime use',
  featSettingsDark: 'Dark Mode',
  featSettingsDarkDesc: 'Deep, eye-friendly dark theme, perfect for nighttime practice',

  downloadTitle: 'Start Your Typing Journey',
  downloadDesc: 'TypeFlow is completely free and continuously updated. Choose your platform and start practicing.',
  downloadBtn: 'Download',
  downloadComingSoon: 'Coming Soon',
  downloadNote: 'Windows / macOS / Linux / Android versions available',
  downloadPlatformNote: 'iPad / iOS coming soon',
  linuxInstallTip: 'AppImage works on all Linux distros. deb for Ubuntu 22.04+, Debian 12+, Linux Mint 21+, etc. (x86_64)',
  linuxInstallCmd: 'Install command',
  downloadKeyboardNote: 'A physical keyboard is required on all platforms',

  footerTagline: 'Making typing practice simple and efficient',
  footerResources: 'Resources',
  footerConnect: 'Connect',
  footerLegal: 'Legal',
  footerPrivacy: 'Privacy Policy',
  footerTerms: 'Terms of Service',
  footerCopyright: '© 2026 TypeFlow',

  switchLight: 'Switch to Light',
  switchDark: 'Switch to Dark',

  languageLabel: 'Language',
};

export const translations: Record<Language, LandingDict> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en,
};

export const languageNames: Record<Language, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English',
};
