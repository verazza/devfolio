import type { LocalizedString } from '../types/common';

export const otherDictionary: Record<string, LocalizedString> = {
  // add below When you want to write furigana for Japanese words
  // "": {
  //   "ja": "",
  //   "en": ""
  // }
};

export const generalMessages: Record<string, LocalizedString> = {
  "homeTitle": {
    "ja": "ホーム",
    "en": "Home",
  },
  "homeDescription": {
    "ja": "verazzaって？",
    "en": "Who is verazza?",
  },
  "homeDescription2": {
    "ja": "VSCodeは使わずCLIライク",
    "en": "CLI-like without VSCode",
  },
  "homeDescription3": {
    "ja": "NeovimとCLIを愛するフルスタックエンジニアです。安全性・再現性・効率性を大切にしながら、堅牢な開発環境とウェブサービスを構築しています。",
    "en": "I am a full stack engineer who loves Neovim and CLI. I build robust development environments and web services while valuing safety, reproducibility, and efficiency.",
  },
  "aboutTitle": {
    "ja": "私について",
    "en": "About Me",
  },
  "aboutDescription": {
    "ja": "私の自己紹介や経歴をお届けします。",
    "en": "I would like to introduce myself and my background.",
  },
  "projectsTitle": {
    "ja": "プロジェクト",
    "en": "Projects",
  },
  "projectsDescription": {
    "ja": "過去のプロジェクトや実績などを紹介します。",
    "en": "Past projects and achievements are presented here.",
  },
  "servicesTitle": {
    "ja": "サービス",
    "en": "Services",
  },
  "servicesDescription": {
    "ja": "技術提供・運営しているサービス一覧",
    "en": "List of services provided and operated by Technology"
  },
  "contactTitle": {
    "ja": "コンタクト",
    "en": "Contact",
  },
  "contactDescription": {
    "ja": "連絡や問い合わせは以下からお願いします。",
    "en": "Please contact us using the information below.",
  },
  "emailLabel": {
    "ja": "メール",
    "en": "Email",
  },
  "tableOfContentsTitle": {
    "ja": "目次",
    "en": "Table of Contents",
  },
  "AboutMeLabel": {
    "ja": "verazzaとは",
    "en": "Who is verazza?",
  },
  "AboutPolicyLable": {
    "ja": "プログラミングにおけるポリシー",
    "en": "verazza's policy on programming",
  },
  "AboutBackgrounds": {
    "ja": "プログラミングを始めてから今に至るまで",
    "en": "From the time I started programming until now"
  },
  "AboutLastLabel": {
    "ja": "最後に",
    "en": "Finally"
  },
  nextButtonText: { ja: "次に進む", en: "Next", },
  nextPagePrefix: { ja: "次は:", en: "Next:" },
  prevButtonText: { ja: "前に戻る", en: "Previous" },
  prevPagePrefix: { ja: "前は:", en: "Previous:" },
};

export const servicesPageStrings = {
  techBlogTitle: { ja: "📝 技術ブログ", en: "📝 Tech Blog" },
  techBlogDescription1: { ja: "CLI中心の開発環境、セキュリティ、ツール活用に関する技術記事を不定期に発信中です。", en: "Irregularly publishing technical articles on CLI-centric development environments, security, and tool utilization." },
  techBlogDescription2: { ja: "Qiitaでも同じく発信しています。", en: "Also publishing on Qiita." },
  readBlog: { ja: "ブログを読む", en: "Read Blog" },
  readQiita: { ja: "Qiitaでブログを読む", en: "Read Blog on Qiita" },
  or: { ja: "もしくは", en: "or" },
  kishaxTitle: { ja: "🎮 Kishax - Minecraft Server", en: "🎮 Kishax - Minecraft Server" },
  kishaxDescription1: { ja: "Java版と統合版の両方に対応した、小規模で安全なコミュニティサーバーです。", en: "A small and secure community server supporting both Java and Bedrock Editions." },
  kishaxDescription2: { ja: "ガイドや説明文などが英語にも対応していて、日本以外の海外の人でも安心して入れます。", en: "Guides and descriptions are also available in English, allowing international players to join with peace of mind." },
  kishaxDescription3: { ja: "独自プラグインやKishaxアカウント連携により、BOT対策やセキュリティも強化したり、プレイヤーが好きなときにサーバーを起動できる環境が整っています。", en: "Custom plugins and Kishax account integration enhance anti-bot measures and security, providing an environment where players can start the server whenever they like." },
  kishaxFeature1: { ja: "英語対応でグローバル", en: "English support for global access" },
  kishaxFeature2: { ja: "いつでも専用のサーバーを起動可能（サバイバル、MOD、マップ等）", en: "Start a dedicated server anytime (Survival, MODs, Maps, etc.)" },
  kishaxFeature3: { ja: "学生や20代中心のフレンドリーなコミュニティ", en: "A friendly community centered around students and young adults" },
  kishaxFeature4: { ja: "統合版プレイヤーも参加可能", en: "Bedrock Edition players can also join" },
  kishaxFeature5: { ja: "開発者・運営メンバー募集中", en: "Recruiting developers and operation members" },
  kishaxPortalSite: { ja: "編集中のポータルサイト: ", en: "Portal site (under construction): " },
  kishaxDiscord: { ja: "Discordサーバー: ", en: "Discord Server: " },
  joinHere: { ja: "参加はこちら", en: "Join Here" },
};

export const projectPageStrings = { // 新しいオブジェクトとして定義するか、generalMessagesに追加
  viewOnGithub: { ja: "GitHubで見る", en: "View on GitHub" },
  moreInfoPrefix: { ja: "詳しくは、", en: "For more details, check " },
  moreInfoCheck: { ja: "詳しくは、 {githubProfileLink} をチェック。", en: "For more details, check {githubProfileLink}." },
  viewSite: { ja: "サイトを見る", en: "View Site" }, // liveLink用

  // ★ kishaxプロジェクト詳細用に追加
  kishaxAuthDetailPrefix: {
    ja: "認証ユーザーは、",
    en: "Authenticated users are those who have logged into the login page of "
  },
  kishaxAuthDetailSuffix: {
    ja: "のログインページにログインしたユーザーが該当します。",
    en: "." // 英語の場合はリンクの後にピリオドが自然かもしれません
  }
};

export const aboutPageStrings = {
  myBlogLinkText: { ja: "私のブログ", en: "my blog" },
  qiitaUserPrefix: { ja: "Qiita-@", en: "Qiita-@" }, // ユーザー名は profile.json から
  projectsLinkText: { ja: "PROJECTS", en: "PROJECTS" },

  finalParagraphPart1: { ja: "今では自分でブログなども書いて情報発信をしています。ぜひ興味のある方は、", en: "I now also write and publish information through my blog and other means. If you are interested, please take a look at " },
  finalParagraphPart2: { ja: " を見てみてください。", en: ". " }, // &nbsp; は JSX 側で調整
  finalParagraphPart3: { ja: " でも同様に配信しています。", en: " where I also publish similar content." }, // &nbsp; は JSX 側で調整
  finalParagraphPart4: { ja: "また、上で話した、私が育てたエディターNeovimの設定やプロジェクトやプロジェクト要項は、", en: "Also, the Neovim editor settings I've cultivated, projects, and project outlines I mentioned earlier can be found at " },
  finalParagraphPart5: { ja: " で確認できます。", en: "." } // &nbsp; は JSX 側で調整
};
