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
 * 日本語: ¥350/月（固定）
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
// 【フロー】
// ホーム画面 → ホームの検索バーでタイピング → 画面遷移 → 上部バーに完成クエリ表示 → 結果表示

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

// デモに使うDOM要素（一度だけ取得してキャッシュ）
let elHome, elSearchScreen, elSearchText, elLoading, elResult;
let elWord, elReading, elDef, elHint, elHintBox, elExample;
let elHomeInput, elHomeTyped, elHomeCursor, elHomePlaceholder;

/** DOM要素をキャッシュする */
function cacheDemoElements() {
    elHome             = document.getElementById('demoHome');
    elSearchScreen     = document.getElementById('demoSearchScreen');
    elSearchText       = document.getElementById('demoSearchText');
    elLoading          = document.getElementById('demoLoading');
    elResult           = document.getElementById('demoResult');
    elWord             = document.getElementById('demoWord');
    elReading          = document.getElementById('demoReading');
    elDef              = document.getElementById('demoDef');
    elHint             = document.getElementById('demoHint');
    elHintBox          = document.getElementById('demoHintBox');
    elExample          = document.getElementById('demoExample');
    // ホーム画面の入力要素
    elHomeInput        = document.getElementById('demoHomeInput');
    elHomeTyped        = document.getElementById('demoHomeTyped');
    elHomeCursor       = document.getElementById('demoHomeCursor');
    elHomePlaceholder  = document.getElementById('demoHomePlaceholder');
}

// ===== 画面表示制御 =====

/** ホーム画面を表示し、検索画面を隠す */
function showHomeScreen() {
    if (elHome)         elHome.style.display         = 'flex';
    if (elSearchScreen) elSearchScreen.style.display = 'none';
}

/**
 * 検索画面へ遷移する
 * 上部バーには完成したクエリをそのままセット（タイピングなし）
 * @param {string} query - 表示するクエリテキスト
 */
function transitionToSearchScreen(query) {
    if (elHome)         elHome.style.display         = 'none';
    if (elSearchScreen) elSearchScreen.style.display = 'flex';
    // 上部バーに完成クエリを一括セット
    if (elSearchText)   elSearchText.textContent     = query;
    // ローディングと結果をリセット
    if (elLoading)      elLoading.classList.remove('visible');
    if (elResult)       elResult.classList.remove('visible');
}

// ===== ホーム画面入力操作 =====

/** ホーム入力欄を初期状態（プレースホルダー表示）にリセットする */
function resetHomeInput() {
    if (elHomeTyped)       elHomeTyped.textContent  = '';
    if (elHomePlaceholder) elHomePlaceholder.style.display = 'inline';
    if (elHomeCursor)      elHomeCursor.style.display      = 'none';
    if (elHomeInput)       elHomeInput.classList.remove('active');
}

/** ホーム入力欄をアクティブ状態にする（青いフォーカスボーダー） */
function activateHomeInput() {
    if (elHomePlaceholder) elHomePlaceholder.style.display = 'none';
    if (elHomeCursor)      elHomeCursor.style.display      = 'inline';
    if (elHomeInput)       elHomeInput.classList.add('active');
}

/**
 * ホーム画面の検索バーに1文字ずつタイピングアニメーションを行う
 * @param {string}   text   - タイプするテキスト
 * @param {Function} onDone - 完了コールバック
 */
function typeInHomeInput(text, onDone) {
    if (!elHomeTyped) { onDone(); return; }

    let i = 0;
    function typeChar() {
        if (i < text.length) {
            elHomeTyped.textContent += text[i];
            i++;
            demoTimer = setTimeout(typeChar, 58);
        } else {
            onDone();
        }
    }
    typeChar();
}

// ===== 結果表示 =====

/** ローディングドットを表示したあとに結果カードをフェードインさせる */
function showLoadingThenResult(example) {
    if (elLoading) elLoading.classList.add('visible');

    demoTimer = setTimeout(() => {
        if (elLoading) elLoading.classList.remove('visible');

        // 結果データをセット
        if (elWord)    elWord.textContent    = example.word;
        if (elReading) elReading.textContent = example.reading;
        if (elDef)     elDef.textContent     = example.def;
        if (elHint)    elHint.textContent    = example.hint;
        if (elExample) elExample.textContent = example.example;

        if (elResult) elResult.classList.add('visible');

        // 2.5秒後に次のサイクルへ
        demoTimer = setTimeout(nextCycle, 2500);
    }, 750);
}

/** 結果を消してホームへ戻り、次の例へ */
function nextCycle() {
    if (elResult) elResult.classList.remove('visible');

    demoTimer = setTimeout(() => {
        demoIndex = (demoIndex + 1) % DEMO_EXAMPLES.length;
        runDemo();
    }, 500);
}

/**
 * デモの1サイクルを実行する
 * 【フロー】ホーム表示 → ホーム入力でタイピング → 画面遷移 → ローディング → 結果表示
 */
function runDemo() {
    const example = DEMO_EXAMPLES[demoIndex];

    // 1. ホーム画面を表示・入力リセット
    showHomeScreen();
    resetHomeInput();

    // 2. 1秒後にホームの検索バーでタイピング開始
    demoTimer = setTimeout(() => {
        activateHomeInput();

        typeInHomeInput(example.query, () => {
            // 3. タイピング完了後、0.45秒待って画面遷移（「検索した」感を演出）
            demoTimer = setTimeout(() => {

                // 4. 検索画面へ遷移（上部バーに完成クエリを表示）
                transitionToSearchScreen(example.query);

                // 5. 画面遷移から0.3秒後にローディング開始
                demoTimer = setTimeout(() => {
                    showLoadingThenResult(example);
                }, 300);

            }, 450);
        });
    }, 1000);
}

/** デモアニメーションのエントリーポイント */
function startDemo() {
    cacheDemoElements();
    if (!elHome) return; // デモ要素がなければスキップ
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
