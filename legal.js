// legal.js
// 法的ページ（特定商取引法・利用規約・プライバシーポリシー）共通スクリプト
// メインページと同じ言語検出・切替ロジックを共有する

let currentLanguage = 'en';

/** ブラウザ言語から初期言語を判定 */
function detectLanguage() {
    const lang = navigator.language || navigator.userLanguage || '';
    return lang.startsWith('ja') ? 'ja' : 'en';
}

/** 言語を切り替えて翻訳を反映 */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;

    const select = document.getElementById('languageSelect');
    if (select) select.value = lang;

    document.documentElement.lang = lang;
    updateContent();

    try {
        localStorage.setItem('tangoLang', lang);
    } catch (e) {}
}

/** data-i18n属性を持つ全要素に翻訳テキストを反映 */
function updateContent() {
    const t = TRANSLATIONS[currentLanguage];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
}

/** フッターの年号を自動設定 */
function setCurrentYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
}

/** 初期化 */
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = 'en';
    try {
        savedLang = localStorage.getItem('tangoLang') || detectLanguage();
    } catch (e) {
        savedLang = detectLanguage();
    }

    setLanguage(savedLang);

    // Lucideアイコン生成
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    setCurrentYear();
});
