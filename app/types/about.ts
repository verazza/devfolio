import type { LocalizedString } from './common'; // LocalizedStringを再利用 (パスを確認)

export interface AboutSectionContent {
  title: LocalizedString;
  paragraphs: LocalizedString[]; // 各段落をLocalizedStringの配列として扱う
  // 必要に応じてリストなども追加可能
}

export interface AboutMeContent extends Omit<AboutSectionContent, 'paragraphs'> {
  intro1: LocalizedString; // 「verazzaです...ポリシーは、」
  // generalMessages.homeDescription2 を参照する部分はIsland側で直接処理
  policySuffix: LocalizedString; // 「です。」
  neovimStory: LocalizedString; // Neovimに関する段落
}

export interface CareerContent extends Omit<AboutSectionContent, 'paragraphs'> {
  // 経歴の各時期やエピソードをオブジェクトの配列として持つことも可能
  // ここでは簡略化のため、段落の配列とする
  paragraphs: LocalizedString[];
}

export interface FinallyContent extends Omit<AboutSectionContent, 'paragraphs' | 'title'> {
  title: LocalizedString; // 「最後に」
  // リンクを含む段落はIsland側で組み立てるため、ここでは主要なテキストパーツのキーを持つ
  // 例: finalParagraphPart1, myBlogLinkText など (translations.tsで定義)
}

export interface AboutData {
  aboutMe: AboutMeContent;
  career: CareerContent;
  finally: FinallyContent;
}
