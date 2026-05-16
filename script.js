// script.js
// メインページ用スクリプト
// - 言語の自動検出と切替
// - 翻訳テキストの反映
// - アプリUIを忠実に再現した検索デモアニメーション

// ===== 言語管理 =====

let currentLanguage = 'en';

/** ブラウザ言語を検出して日本語なら'ja'を返す */
function detectLanguage() {
    const lang = navigator.language || navigator.userLanguage || '';
    return lang.startsWith('ja') ? 'ja' : 'en';
}

/** 言語を切り替えて全ページに翻訳を適用する */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;

    // ドロップダウンと html 要素を同期
    const select = document.getElementById('languageSelect');
    if (select) select.value = lang;
    document.documentElement.lang = lang;

    updateContent();
    updatePricing();

    // 次回訪問用に保存
    try { localStorage.setItem('tangoLang', lang); } catch(e) {}
}

/** data-i18n属性を持つ全要素に翻訳テキストを適用 */
function updateContent() {
    const t = TRANSLATIONS[currentLanguage];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
}

/**
 * プレミアム料金表示を言語で切り替える
 * 日本語: ¥290/月（固定）
 * 英語: 金額を非表示にして「Price shown at checkout...」を表示
 */
function updatePricing() {
    const priceBlockEl  = document.getElementById('premiumPrice');
    const regionalNoteEl = document.getElementById('regionalNote');
    if (!priceBlockEl) return;

    if (currentLanguage === 'ja') {
        priceBlockEl.style.display = 'flex';
        if (regionalNoteEl) regionalNoteEl.style.display = 'none';
    } else {
        priceBlockEl.style.display = 'none';
        if (regionalNoteEl) {
            regionalNoteEl.style.display = 'block';
            regionalNoteEl.textContent = TRANSLATIONS.en.pricingRegionalNote;
        }
    }
}


// ===== 検索デモアニメーション =====
// アプリのUIを忠実に再現し、Tangoの多言語検索機能をわかりやすく見せる

// デモ例（アプリの実際の出力フォーマットに合わせたデータ）
const DEMO_EXAMPLES = [
    {
        query:   'stair in Spanish',
        word:    'escalera',
        reading: '/es.ka.ˈle.ra/',
        def:     'A noun meaning "staircase" in Spanish. Used for indoor or outdoor stairs in a building.',
        hint:    'Used when talking about stairs in buildings.',
        example: 'La escalera está a la derecha.'
    },
    {
        query:   'forgive in French',
        word:    'pardonner',
        reading: '/paʁ.dɔ.ne/',
        def:     'To forgive; to excuse someone for a fault or mistake.',
        hint:    'Used in both formal and informal situations.',
        example: 'Je te pardonne pour tout.'
    },
    {
        query:   'みかん 英語',
        word:    'mandarin',
        reading: '/ˈmæn.də.rɪn/',
        def:     'A small, sweet citrus fruit with a loose skin. Also called tangerine.',
        hint:    'Also referred to as "mandarin orange" in everyday speech.',
        example: 'I eat a mandarin every morning.'
    }
];

let demoIndex = 0;
let demoTimer = null;

// デモで使うDOM要素（初期化後にキャッシュする）
let elHome, elSearchScreen, elSearchText, elLoading, elResult;
let elWord, elReading, elDef, elHint, elHintBox, elExample;

/** DOM要素のキャッシュ */
function cacheDemoElements() {
    elHome         = document.getElementById('demoHome');
    elSearchScreen = document.getElementById('demoSearchScreen');
    elSearchText   = document.getElementById('demoSearchText');
    elLoading      = document.getElementById('demoLoading');
    elResult       = document.getElementById('demoResult');
    elWord         = document.getElementById('demoWord');
    elReading      = document.getElementById('demoReading');
    elDef          = document.getElementById('demoDef');
    elHint         = document.getElementById('demoHint');
    elHintBox      = document.getElementById('demoHintBox');
    elExample      = document.getElementById('demoExample');
}

/** ホーム画面を表示する */
function showHomeScreen() {
    if (!elHome || !elSearchScreen) return;
    elHome.style.display         = 'flex';
    elSearchScreen.style.display = 'none';
}

/** 検索・結果画面を表示する */
function showSearchScreen() {
    if (!elHome || !elSearchScreen) return;
    elHome.style.display         = 'none';
    elSearchScreen.style.display = 'flex';
    // 検索テキストと結果をリセット
    if (elSearchText) elSearchText.textContent = '';
    if (elLoading)  elLoading.classList.remove('visible');
    if (elResult)   elResult.classList.remove('visible');
}

/**
 * 検索テキストをタイピングアニメーションで表示する
 * @param {string}   text     - タイプするテキスト
 * @param {Function} onDone   - タイピング完了後のコールバック
 */
function typeText(text, onDone) {
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            if (elSearchText) elSearchText.textContent += text[i];
            i++;
            demoTimer = setTimeout(typeChar, 55);
        } else {
            onDone();
        }
    }
    typeChar();
}

/** ローディングドットを表示してから結果を表示する */
function showLoadingThenResult(example) {
    if (elLoading) elLoading.classList.add('visible');

    demoTimer = setTimeout(() => {
        // ローディングを消して結果カードを表示
        if (elLoading) elLoading.classList.remove('visible');

        // 結果データをセット
        if (elWord)    elWord.textContent    = example.word;
        if (elReading) elReading.textContent = example.reading;
        if (elDef)     elDef.textContent     = example.def;
        if (elHint)    elHint.textContent    = example.hint;
        if (elExample) elExample.textContent = example.example;

        // フェードイン
        if (elResult) elResult.classList.add('visible');

        // 2.5秒後に次のサイクルへ
        demoTimer = setTimeout(nextCycle, 2500);
    }, 750);
}

/** 次のデモ例に切り替える */
function nextCycle() {
    // 結果を消してホーム画面へ戻る
    if (elResult) elResult.classList.remove('visible');

    demoTimer = setTimeout(() => {
        demoIndex = (demoIndex + 1) % DEMO_EXAMPLES.length;
        runDemo();
    }, 500);
}

/**
 * デモの1サイクルを実行する
 * ホーム → 検索画面（タイピング） → ローディング → 結果表示 → 繰り返し
 */
function runDemo() {
    const example = DEMO_EXAMPLES[demoIndex];

    // ホーム画面を表示
    showHomeScreen();

    // 1.5秒後に検索画面へ切り替えてタイピング開始
    demoTimer = setTimeout(() => {
        showSearchScreen();

        demoTimer = setTimeout(() => {
            typeText(example.query, () => {
                // タイピング完了 → 300ms待ってからローディング
                demoTimer = setTimeout(() => {
                    showLoadingThenResult(example);
                }, 300);
            });
        }, 200);
    }, 1500);
}

/** デモアニメーションを開始する */
function startDemo() {
    cacheDemoElements();
    if (!elHome) return; // デモ要素がなければスキップ

    // 初期状態: ホーム画面を表示
    showHomeScreen();
    runDemo();
}


// ===== その他のユーティリティ =====

/** フッターの年号を自動設定 */
function setCurrentYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
}

/** スムーズスクロール */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/** IntersectionObserverでカードをフェードイン */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        }),
        { threshold: 0.15 }
    );
    document.querySelectorAll('.feature-card, .step, .community-inner, .pricing-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}


// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 言語: 保存済み → ブラウザ検出 → 英語 の優先順
    let lang = 'en';
    try { lang = localStorage.getItem('tangoLang') || detectLanguage(); } catch(e) { lang = detectLanguage(); }
    setLanguage(lang);

    // Lucideアイコンを生成（data-lucide属性をSVGに変換）
    lucide.createIcons();

    setCurrentYear();
    initSmoothScroll();
    initScrollAnimations();

    // デモアニメーション（少し遅らせてページ描画を優先）
    setTimeout(startDemo, 600);
});
