// Translation data - English and Japanese only
const translations = {
    en: {
        appName: "Katari",
        navFeatures: "Features",
        navHowItWorks: "How It Works",
        navLanguages: "Languages",
        navPricing: "Pricing",
        navContact: "Contact",
        downloadApp: "Download App",
        heroTitle: "Master Language Through<br>Detailed Explanations",
        heroSubtitle: "Transform casual conversation into professional communication. Practice expressing complex ideas with AI-powered feedback.",
        getOnGooglePlay: "Get it on Google Play",
        androidOnly: "Currently available for Android devices",
        
        // Features
        featuresTitle: "Why Choose Katari?",
        featuresSubtitle: "Everything you need to master professional communication",
        feature1Title: "AI-Powered Feedback",
        feature1Desc: "Get instant, contextual feedback on grammar, vocabulary, and expression quality from advanced AI",
        feature2Title: "Structured Learning",
        feature2Desc: "4-step proven method: Question → Note → Express → Evaluate",
        feature3Title: "Voice Recognition",
        feature3Desc: "Practice speaking naturally with advanced speech-to-text technology",
        feature4Title: "Native Language Notes",
        feature4Desc: "Organize your thoughts in your native language before expressing them",
        feature5Title: "Progress Tracking",
        feature5Desc: "Monitor your improvement with detailed history and self-evaluation",
        feature6Title: "Customizable Learning",
        feature6Desc: "Adjust difficulty, conversation style, and topics to match your goals",
        
        // How it works
        howTitle: "How It Works",
        howSubtitle: "Simple, effective, proven",
        step1Title: "Choose a Question",
        step1Desc: "Select from various topics and difficulty levels, or let the AI suggest questions based on your preferences",
        step2Title: "Organize Your Thoughts",
        step2Desc: "Take notes in your native language to structure key points before expressing them in your target language",
        step3Title: "Express in Target Language",
        step3Desc: "Type or speak your detailed explanation in the language you're learning with voice recognition support",
        step4Title: "Get Feedback & Self-Evaluate",
        step4Desc: "Review AI suggestions and rate your own performance to accelerate your learning journey",
        
        // Languages
        languagesTitle: "65+ Languages Supported",
        languagesSubtitle: "Learn any major language with comprehensive support",
        langCatMajor: "Major Languages",
        langCatEuropean: "European Languages",
        langCatAsian: "Asian Languages",
        langCatOther: "Other Languages",
        
        // Language names
        langEnUS: "English (US)",
        langEnGB: "English (UK)",
        langJa: "Japanese",
        langKo: "Korean",
        langZhCN: "Chinese (Simplified)",
        langZhTW: "Chinese (Traditional)",
        langDe: "German",
        langFr: "French",
        langEs: "Spanish",
        langIt: "Italian",
        langPt: "Portuguese",
        langRu: "Russian",
        langNl: "Dutch",
        langPl: "Polish",
        langSv: "Swedish",
        langDa: "Danish",
        langNo: "Norwegian",
        langFi: "Finnish",
        langTr: "Turkish",
        langEl: "Greek",
        langCs: "Czech",
        langHu: "Hungarian",
        langTh: "Thai",
        langVi: "Vietnamese",
        langId: "Indonesian",
        langTl: "Filipino",
        langHi: "Hindi",
        langTa: "Tamil",
        langBn: "Bengali",
        langUr: "Urdu",
        langAr: "Arabic",
        langHe: "Hebrew",
        langFa: "Persian",
        langAf: "Afrikaans",
        langSw: "Swahili",
        andMore: "...and 40+ more",
        
        // Pricing
        pricingTitle: "Simple, Transparent Pricing",
        pricingSubtitle: "Start free, upgrade anytime",
        planFree: "Free Plan",
        planPremium: "Premium",
        perMonth: "/month",
        recommended: "Recommended",
        freeFeat1: "Unlimited search & note-taking",
        freeFeat2: "Basic flashcard practice",
        freeFeat3: "View latest record only",
        freeFeat4: "Voice recognition",
        freeFeat5: "All core features",
        premFeat1: "Unlimited decks (Free: 2)",
        premFeat2: "Unlimited words per deck (Free: 50)",
        premFeat3: "Unlimited search history (Free: 50)",
        pricingNote: "All plans include voice recognition and core learning features. Upgrade anytime from within the app.",
        
        // Contact
        contactTitle: "Get In Touch",
        contactEmail: "Email:",
        contactSupport: "Support:",
        contactBusiness: "Business Inquiries:",

        // Commerce Disclosure
        commerceTitle: "Commerce Disclosure",
        commerce1Title: "Business Operator",
        commerce2Title: "Representative",
        commerce3Title: "Address",
        commerce3Content: "Will be disclosed without delay upon request",
        commerce4Title: "Phone Number",
        commerce4Content: "Will be disclosed without delay upon request",
        commerce5Title: "Email Address",
        commerce6Title: "Price",
        commerce6Content: "Premium Plan: ¥290/month (Japan) / $2/month (US)<br>Free Plan: ¥0",
        commerce7Title: "Additional Fees",
        commerce7Content: "Internet connection and data charges are the customer's responsibility.",
        commerce8Title: "Payment Methods",
        commerce8Content: "Credit card, debit card, Google Play credit, and carrier billing through Google Play Store",
        commerce9Title: "Payment Timing",
        commerce9Content: "At subscription registration and monthly auto-renewal",
        commerce10Title: "Service Delivery",
        commerce10Content: "Immediately available after payment confirmation",
        commerce11Title: "Returns and Cancellations",
        commerce11Content: "Due to the nature of digital content, returns and refunds are not available after service use begins. Refund requests may be submitted within 48 hours of purchase according to Google Play Store's refund policy. For technical issues preventing service use, please contact support@tommy-tech.net.",
        commerce12Title: "System Requirements",
        commerce12Content: "Android 8.0 or later smartphone/tablet<br>Internet connection required",
        
        // Terms
        termsTitle: "Terms of Service",
        termsLastUpdated: "Last Updated: 2025/11/12",
        terms1Title: "1. Acceptance of Terms",
        terms1Content: "By accessing and using Katari, you accept and agree to be bound by these Terms of Service.",
        terms2Title: "2. Subscription & Payment",
        terms2Content: "Premium subscriptions are billed monthly. Pricing varies by region: $2/month (US) or ¥290/month (Japan). You may cancel at any time through the Stripe customer portal. All payments are processed securely through Stripe.",
        terms2aTitle: "2.1 Pricing and Fees",
        terms2aItem1: "Premium Plan: $2 USD per month (United States) or ¥290 JPY per month (Japan)",
        terms2aItem2: "Free Plan: $0 - includes 3 AI evaluations per day with basic features",
        terms2aItem3: "All prices are in the currency shown and include applicable taxes where required by law",
        terms2aItem4: "Subscription fees are non-refundable except as required by law or as specified in our refund policy",
        terms2bTitle: "2.2 Billing and Renewal",
        terms2bItem1: "Subscriptions automatically renew monthly until cancelled",
        terms2bItem2: "You will be charged on the same day each month as your initial subscription date",
        terms2bItem3: "Payment is processed through Stripe's secure payment system",
        terms2bItem4: "Price changes will be notified 30 days in advance",
        terms2bItem5: "Cancellation takes effect at the end of your current billing period",
        terms3Title: "3. User Accounts",
        terms3Content: "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.",
        terms3aTitle: "3.1 Account Deletion",
        terms3aContent: "You have the right to delete your account at any time. Account deletion can be performed directly within the app:",
        terms3aItem1: "Go to Settings → Account → Delete Account",
        terms3aItem2: "All your data will be permanently deleted within 30 days",
        terms3aItem3: "Any active subscriptions will be automatically cancelled",
        terms3aItem4: "This action cannot be undone",
        terms3aItem5: "If you cannot delete your account through the app, please contact support@tommy-tech.net for assistance",
        terms4Title: "4. Refund Policy",
        terms4Content: "Due to the digital nature of our service, refunds are generally not available once you begin using the service. If you experience technical issues that prevent you from using the service, please contact support@tommy-tech.net before cancelling your subscription.",
        terms4aTitle: "4.1 Refund Eligibility",
        terms4aItem1: "Refunds may be considered on a case-by-case basis for technical issues that prevent service usage",
        terms4aItem2: "Refund requests must be submitted within 7 days of the charge",
        terms4aItem3: "Refund requests should be sent to support@tommy-tech.net with a detailed explanation",
        terms4aItem4: "Refunds are processed within 5-10 business days if approved",
        terms4aItem5: "No partial refunds are provided for unused portions of a billing period after cancellation",
        terms5Title: "5. Cancellation",
        terms5Content: "You may cancel your subscription at any time through the Stripe customer portal accessible from your account settings. Your access will continue until the end of your current billing period.",
        terms5aTitle: "5.1 How to Cancel",
        terms5aItem1: "Log in to your Katari account",
        terms5aItem2: "Go to Account Settings → Subscription",
        terms5aItem3: "Click 'Manage Subscription' to access the Stripe customer portal",
        terms5aItem4: "Click 'Cancel subscription' and confirm",
        terms5aItem5: "Your access will continue until the end of your current billing period",
        terms5aItem6: "No refunds will be provided for the remaining days of the current billing period",
        terms6Title: "6. Service Availability",
        terms6Content: "While we strive to provide continuous service availability, we do not guarantee uninterrupted access. Service may be temporarily unavailable due to maintenance, updates, or unforeseen technical issues.",
        terms7Title: "7. Customer Support",
        terms7Content: "For questions about billing, subscriptions, or technical issues, please contact our support team at support@katari-app.com. We aim to respond within 24-48 hours during business days.",
        contactUs: "Contact us:",
        
        // Privacy
        privacyTitle: "Privacy Policy",
        privacyLastUpdated: "Last Updated: 2025/11/12",
        privacy1Title: "1. Information We Collect",
        privacy1Content: "We collect information you provide directly (email, name, practice data) and automatically (device info, usage data).",
        privacy1aTitle: "1.1 Audio Recording",
        privacy1aContent: "When you use the voice recognition feature, we collect and process audio recordings of your speech. This audio data is:",
        privacy1aItem1: "Used solely to convert your speech to text for language learning purposes",
        privacy1aItem2: "Processed through Google Cloud Speech-to-Text API",
        privacy1aItem3: "Not stored permanently on our servers after transcription",
        privacy1aItem4: "Not shared with third parties except for the transcription service",
        privacy1aItem5: "Can be disabled at any time by not using the voice input feature",
        privacy1aTitle: "1.1 Audio Recording",
        privacy1aContent: "When you use the voice recognition feature, we collect and process audio recordings of your speech. This audio data is:",
        privacy1aItem1: "Used solely to convert your speech to text for language learning purposes",
        privacy1aItem2: "Processed through Google Cloud Speech-to-Text API",
        privacy1aItem3: "Not stored permanently on our servers after transcription",
        privacy1aItem4: "Not shared with third parties except for the transcription service",
        privacy1aItem5: "Can be disabled at any time by not using the voice input feature",
        privacy2Title: "2. How We Use Your Information",
        privacy2Content: "We use your information to provide the service, improve features, and provide customer support. Your practice data is used to generate AI feedback.",
        privacy3Title: "3. Data Security",
        privacy3Content: "We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest using Firebase security.",
        privacy4Title: "4. Data Retention",
        privacy4aTitle: "4.1 Account Deletion and Data Removal",
        privacy4aContent: "You can delete your account at any time directly from the app settings. When you delete your account:",
        privacy4aItem1: "All your personal information (email, name, practice data, and history) will be permanently deleted",
        privacy4aItem2: "This action is irreversible and cannot be undone",
        privacy4aItem3: "Your subscription will be automatically cancelled",
        privacy4aItem4: "Data deletion is processed immediately and completed within 30 days",
        privacy4bTitle: "How to Delete Your Account",
        privacy4bItem1: "Open the Katari app",
        privacy4bItem2: "Go to Settings → Account",
        privacy4bItem3: "Scroll down and tap \"Delete Account\"",
        privacy4bItem4: "Confirm your decision",
        privacy4bItem5: "If you encounter any issues, please contact support@tommy-tech.net",
        privacy4Content: "We retain your data while your account is active. You may request deletion at any time by contacting support.",
        privacy5Title: "5. Third-Party Services",
        privacy5Content: "We use Google Cloud Platform for AI services, Firebase for data storage, and Stripe for secure payment processing. Stripe may collect and process payment information according to their privacy policy.",
        privacyContact: "Privacy inquiries:",
        
        // Footer
        footerProduct: "Product",
        footerLegal: "Legal",
        footerDownload: "Download",
        footerTagline: "Master language through detailed explanations",
        footerRights: "All rights reserved.",
        googlePlay: "Google Play"
    },
    ja: {
        appName: "Katari",
        navFeatures: "機能",
        navHowItWorks: "使い方",
        navLanguages: "対応言語",
        navPricing: "料金",
        navContact: "お問い合わせ",
        downloadApp: "アプリをダウンロード",
        heroTitle: "説明力を鍛えて<br>言語をマスター",
        heroSubtitle: "カジュアルな会話スキルをプロフェッショナルなコミュニケーション力に変換。AIフィードバックで複雑なアイデアを表現する練習ができます。",
        getOnGooglePlay: "Google Playで入手",
        androidOnly: "現在Androidデバイスで利用可能",
        
        // Features
        featuresTitle: "Katariを選ぶ理由",
        featuresSubtitle: "プロフェッショナルなコミュニケーションをマスターするために必要なすべて",
        feature1Title: "AI搭載フィードバック",
        feature1Desc: "高度なAIから文法、語彙、表現の質について即座に文脈に沿ったフィードバックを受け取れます",
        feature2Title: "体系的な学習",
        feature2Desc: "実証済みの4ステップ方法：質問 → メモ → 表現 → 評価",
        feature3Title: "音声認識",
        feature3Desc: "高度な音声認識技術で自然な話し方を練習できます",
        feature4Title: "母国語でのメモ",
        feature4Desc: "表現する前に母国語で考えを整理できます",
        feature5Title: "進捗管理",
        feature5Desc: "詳細な履歴と自己評価で上達を追跡できます",
        feature6Title: "カスタマイズ可能な学習",
        feature6Desc: "難易度、会話スタイル、トピックを目標に合わせて調整できます",
        
        // How it works
        howTitle: "使い方",
        howSubtitle: "シンプル、効果的、実証済み",
        step1Title: "質問を選ぶ",
        step1Desc: "様々なトピックと難易度から選ぶか、好みに基づいてAIが質問を提案します",
        step2Title: "考えを整理する",
        step2Desc: "目標言語で表現する前に、母国語でメモを取り要点を構造化します",
        step3Title: "目標言語で表現する",
        step3Desc: "音声認識サポートで、学習中の言語で話すことができます",
        step4Title: "フィードバックを受けて自己評価する",
        step4Desc: "AIの提案を確認し、自分のパフォーマンスを評価して学習を加速させます",
        
        // Languages
        languagesTitle: "65以上の言語に対応",
        languagesSubtitle: "包括的なサポートで主要な言語を学習",
        langCatMajor: "主要言語",
        langCatEuropean: "ヨーロッパ言語",
        langCatAsian: "アジア言語",
        langCatOther: "その他の言語",
        
        // Language names
        langEnUS: "英語（米国）",
        langEnGB: "英語（英国）",
        langJa: "日本語",
        langKo: "韓国語",
        langZhCN: "中国語（簡体字）",
        langZhTW: "中国語（繁体字）",
        langDe: "ドイツ語",
        langFr: "フランス語",
        langEs: "スペイン語",
        langIt: "イタリア語",
        langPt: "ポルトガル語",
        langRu: "ロシア語",
        langNl: "オランダ語",
        langPl: "ポーランド語",
        langSv: "スウェーデン語",
        langDa: "デンマーク語",
        langNo: "ノルウェー語",
        langFi: "フィンランド語",
        langTr: "トルコ語",
        langEl: "ギリシャ語",
        langCs: "チェコ語",
        langHu: "ハンガリー語",
        langTh: "タイ語",
        langVi: "ベトナム語",
        langId: "インドネシア語",
        langTl: "フィリピン語",
        langHi: "ヒンディー語",
        langTa: "タミル語",
        langBn: "ベンガル語",
        langUr: "ウルドゥー語",
        langAr: "アラビア語",
        langHe: "ヘブライ語",
        langFa: "ペルシャ語",
        langAf: "アフリカーンス語",
        langSw: "スワヒリ語",
        andMore: "...他40以上",
        
        // Pricing
        pricingTitle: "シンプルで透明な料金",
        pricingSubtitle: "無料で始めて、いつでもアップグレード",
        planFree: "無料プラン",
        planPremium: "プレミアム",
        perMonth: "/月",
        recommended: "おすすめ",
        freeFeat1: "無制限の検索とメモ機能",
        freeFeat2: "フラッシュカード練習",
        freeFeat3: "最新の記録のみ表示",
        freeFeat4: "音声認識",
        freeFeat5: "すべてのコア機能",
        // Pricing section - Premium features
        premFeat1: "無制限のデッキ作成（無料版：2）",
        premFeat2: "デッキあたり無制限の単語（無料版：50）",
        premFeat3: "無制限の検索履歴（無料版：50）",
        pricingNote: "すべてのプランに音声認識とコア学習機能が含まれます。アプリ内からいつでもアップグレードできます。",
        
        // Contact
        contactTitle: "お問い合わせ",
        contactEmail: "メール：",
        contactSupport: "サポート：",
        contactBusiness: "ビジネスに関するお問い合わせ：",

        // Commerce Disclosure
        commerceTitle: "特定商取引法に基づく表記",
        commerce1Title: "販売業者",
        commerce2Title: "運営責任者",
        commerce3Title: "所在地",
        commerce3Content: "請求があった場合には遅滞なく開示いたします",
        commerce4Title: "電話番号",
        commerce4Content: "請求があった場合には遅滞なく開示いたします",
        commerce5Title: "メールアドレス",
        commerce6Title: "販売価格",
        commerce6Content: "プレミアムプラン: 月額290円（日本）/ 月額2米ドル（米国）<br>無料プラン: 0円",
        commerce7Title: "商品代金以外の必要料金",
        commerce7Content: "インターネット接続料金、通信料金はお客様のご負担となります。",
        commerce8Title: "支払方法",
        commerce8Content: "Stripe決済システムを通じたクレジットカード決済（Visa、Mastercard、American Express、JCB等）、デビットカード決済",
        commerce9Title: "支払時期",
        commerce9Content: "サブスクリプション登録時および毎月の自動更新時（登録日と同日）",
        commerce10Title: "サービスの提供時期",
        commerce10Content: "決済完了後、即時利用可能",
        commerce11Title: "返品・キャンセルについて",
        commerce11Content: "デジタルコンテンツの性質上、サービス利用開始後の返品・返金は原則として承っておりません。サブスクリプションはいつでもキャンセル可能で、キャンセル後は次回請求日からサービスが停止します。技術的な問題でサービスが利用できない場合は、support@tommy-tech.netまでお問い合わせください。",

        // Terms
        termsTitle: "利用規約",
        termsLastUpdated: "最終更新日：2025/11/12",
        terms1Title: "1. 規約の承認",
        terms1Content: "Katariにアクセスして使用することで、本利用規約に同意したものとみなされます。",
        terms2Title: "2. サブスクリプションと支払い",
        terms2Content: "プレミアムサブスクリプションは月額¥290で請求されます。Stripeカスタマーポータルからいつでもキャンセルできます。すべての支払いはStripeを通じて安全に処理されます。",
        terms2aTitle: "2.1 料金と費用",
        terms2aItem1: "プレミアムプラン: 月額2米ドル（米国）または月額290円（日本）",
        terms2aItem2: "無料プラン: 0円 - 1日3回のAI評価と基本機能を含む",
        terms2aItem3: "すべての価格は表示通貨で、法律で義務付けられている場合は適用税を含みます",
        terms2aItem4: "サブスクリプション料金は、法律で義務付けられている場合または返金ポリシーに規定されている場合を除き、返金不可です",
        terms2bItem2: "初回登録日と同じ日に毎月課金されます",
        terms2bItem3: "支払いはStripeの安全な決済システムを通じて処理されます",
        terms2bItem4: "価格変更は30日前に通知されます",
        terms2bItem5: "キャンセルは現在の請求期間の終了時に有効になります",
        terms2bTitle: "2.2 請求と更新",
        terms2bItem1: "サブスクリプションはキャンセルされるまで毎月自動更新されます",
        terms3Title: "3. ユーザーアカウント",
        terms3Content: "アカウント認証情報の機密性を維持し、アカウント下のすべての活動に責任を負います。",
        terms3aTitle: "3.1 アカウント削除",
        terms3aContent: "いつでもアカウントを削除する権利があります。アカウント削除はアプリ内から直接実行できます:",
        terms3aItem1: "設定 → アカウント → アカウントを削除 に移動します",
        terms3aItem2: "すべてのデータは30日以内に完全に削除されます",
        terms3aItem3: "アクティブなサブスクリプションは自動的にキャンセルされます",
        terms3aItem4: "この操作は取り消すことができません",
        terms3aItem5: "アプリからアカウントを削除できない場合は、support@tommy-tech.net までお問い合わせください",
        terms4Title: "4. 返金ポリシー",
        terms4Content: "デジタルサービスの性質上、サービス利用開始後の返金は原則として対応できません。サービスを利用できない技術的な問題が発生した場合は、サブスクリプションをキャンセルする前にsupport@tommy-tech.netまでご連絡ください。",
        terms4aTitle: "4.1 返金資格",
        terms4aItem1: "サービス利用を妨げる技術的な問題がある場合、個別に返金を検討いたします",
        terms4aItem2: "返金申請は課金日から7日以内に提出する必要があります",
        terms4aItem3: "返金申請は詳細な説明とともにsupport@tommy-tech.netまでメールでお送りください",
        terms4aItem4: "承認された場合、5〜10営業日以内に返金処理されます",
        terms4aItem5: "キャンセル後の請求期間の未使用部分に対する部分返金は行いません",
        terms5Title: "5. キャンセル",
        terms5aTitle: "5.1 キャンセル方法",
        terms5Content: "Stripeカスタマーポータルからいつでもサブスクリプションをキャンセルできます。アカウント設定からアクセス可能です。アクセスは現在の請求期間の終了まで継続します。",
        terms5aItem1: "Katariアカウントにログインします",
        terms5aItem2: "アカウント設定 → サブスクリプション に移動します",
        terms5aItem3: "「サブスクリプション管理」をクリックしてStripeカスタマーポータルにアクセスします",
        terms5aItem4: "「サブスクリプションをキャンセル」をクリックして確認します",
        terms5aItem5: "現在の請求期間の終了までアクセスは継続します",
        terms5aItem6: "現在の請求期間の残りの日数に対する返金は行いません",
        terms6Title: "6. サービスの可用性",
        terms6Content: "継続的なサービスの提供に努めますが、中断のないアクセスを保証するものではありません。サービスは、メンテナンス、更新、または予期せぬ技術的な問題により一時的に利用できなくなる場合があります。",
        terms7Title: "7. カスタマーサポート",
        terms7Content: "請求、サブスクリプション、または技術的な問題に関するご質問は、サポートチーム（support@tommy-tech.net）にご連絡ください。営業日には24～48時間以内の返信を目指しています。",
        contactUs: "お問い合わせ：",
        
        // Privacy
        privacyTitle: "プライバシーポリシー",
        privacyLastUpdated: "最終更新日：2025/11/12",
        privacy1Title: "1. 収集する情報",
        privacy1aTitle: "1.1 音声録音について",
        privacy1aContent: "音声認識機能を使用する際、お客様の音声を録音し処理します。この音声データは：",
        privacy1aItem1: "言語学習目的でお客様の音声をテキストに変換するためにのみ使用されます",
        privacy1aItem2: "Google Cloud Speech-to-Text APIを通じて処理されます",
        privacy1aItem3: "文字起こし後、当社のサーバーに永続的に保存されません",
        privacy1aItem4: "文字起こしサービス以外の第三者と共有されません",
        privacy1aItem5: "音声入力機能を使用しないことで、いつでも無効にできます",
        privacy1Content: "直接提供された情報（メール、名前、練習データ）と自動的に収集される情報（デバイス情報、使用データ）を収集します。",
        privacy2Title: "2. 情報の使用方法",
        privacy2Content: "サービスの提供、機能の改善、カスタマーサポートの提供のために情報を使用します。練習データはAIフィードバックの生成に使用されます。",
        privacy3Title: "3. データセキュリティ",
        privacy3Content: "業界標準のセキュリティ対策を実装してデータを保護しています。すべてのデータはFirebaseセキュリティを使用して転送中および保存時に暗号化されます。",
        privacy4Title: "4. データ保持",
        privacy4aTitle: "4.1 アカウント削除とデータ消去",
        privacy4aContent: "アプリの設定からいつでもアカウントを削除できます。アカウントを削除すると:",
        privacy4aItem1: "すべての個人情報（メール、名前、練習データ、履歴）が完全に削除されます",
        privacy4aItem2: "この操作は取り消すことができません",
        privacy4aItem3: "サブスクリプションは自動的にキャンセルされます",
        privacy4aItem4: "データ削除は即座に処理され、30日以内に完了します",
        privacy4bTitle: "アカウント削除方法",
        privacy4bItem1: "Katariアプリを開きます",
        privacy4bItem2: "設定 → アカウント に移動します",
        privacy4bItem3: "下にスクロールして「アカウントを削除」をタップします",
        privacy4bItem4: "削除を確認します",
        privacy4bItem5: "問題が発生した場合は、support@toFmmy-tech.net までご連絡ください",
        privacy4Content: "アカウントがアクティブな間、データを保持します。いつでもサポートに連絡して削除をリクエストできます。",
        privacy5Title: "5. サードパーティサービス",
        privacy5Content: "AIサービスにはGoogle Cloud Platform、データストレージにはFirebase、支払い処理にはStripeを使用しています。Stripeは同社のプライバシーポリシーに従って支払い情報を収集・処理する場合があります。",
        privacyContact: "プライバシーに関するお問い合わせ：",
        
        // Footer
        footerProduct: "製品",
        footerLegal: "法的情報",
        footerDownload: "ダウンロード",
        footerTagline: "説明力を鍛えて言語をマスター",
        footerRights: "無断転載禁止。",
        googlePlay: "Google Play"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'ja') {
        currentLanguage = 'ja';
        document.getElementById('languageSelect').value = 'ja';
        updateContent();
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.feature-card, .step, .pricing-card, .language-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
}

// Update content based on selected language
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });

    // Update premium price based on language
    const priceElement = document.getElementById('premiumPrice');
    if (priceElement) {
        if (currentLanguage === 'ja') {
            priceElement.innerHTML = `
                <span class="price-currency">¥</span>
                <span class="price-amount">290</span>
                <span class="price-period">/月</span>
            `;
        } else {
            priceElement.innerHTML = `
                <span class="price-currency">$</span>
                <span class="price-amount">2</span>
                <span class="price-period">/month</span>
            `;
        }
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Add sticky navbar effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    console.log('Event tracked:', category, action, label);
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'Click', this.getAttribute('href'));
        });
    });
    
    document.querySelectorAll('.btn-primary, .btn-hero').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'Click', this.textContent);
        });
    });
});