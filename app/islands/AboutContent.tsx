// app/islands/AboutContent.tsx
import { usePageLang } from '../hooks/pageLang'; import { translate } from '../utils/i18n';
import { styleInlineCodeToHtml } from '../utils/textFormatters'; // ★ 新しい関数をインポート
import type { AboutData } from '../types/about';
import type { ProfileData } from '../types/profile'; // ProfileDataの型定義パスを確認
import { generalMessages, aboutPageStrings } from '../locales/translations';
import type { LocalizedString } from '../types/common'; // または適切な場所から

type AboutContentProps = {
  aboutData: AboutData;
  profile: Pick<ProfileData, 'social' | 'name'>; // ★ contact も profile から取得するなら追加
};

const AboutContent = ({ aboutData, profile }: AboutContentProps) => {
  const { lang } = usePageLang();

  const policyQuote = generalMessages.homeDescription2
    ? translate(generalMessages.homeDescription2, lang)
    : "Policy quote missing";

  // 翻訳とインラインコードスタイル適用をまとめたヘルパー
  const formatHtml = (textInput: LocalizedString | string | undefined): string => {
    if (!textInput) return "";
    const translated = typeof textInput === 'string' ? textInput : translate(textInput, lang);
    return styleInlineCodeToHtml(translated);
  };

  return (
    <section class="mt-8 space-y-8 text-gray-300">
      {/* 私についてセクション */}
      <article>
        <h2 class="text-2xl font-semibold text-gray-100" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.title) }} />
        <div class="mt-4 space-y-4">
          <p dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.intro1) }} />
          <p class="mt-6 text-lg text-center">
            「{policyQuote}」<span dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.policySuffix) }} />
          </p>
          <p dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.neovimStory) }} />
        </div>
      </article>

      {/* 経歴セクション */}
      <article>
        <h2 class="text-2xl font-semibold text-gray-100 mt-8" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.career.title) }} />
        <div class="mt-4 space-y-4">
          {aboutData.career.paragraphs.map((p, index) => (
            <p key={`career-p-${index}`} dangerouslySetInnerHTML={{ __html: formatHtml(p) }} />
          ))}
        </div>
      </article>

      {/* 最後にセクション */}
      <article>
        <h2 class="text-2xl font-semibold text-gray-100 mt-8" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.finally.title) }} />
        <div class="mt-4">
          <p>
            <span dangerouslySetInnerHTML={{ __html: formatHtml(aboutPageStrings.finalParagraphPart1) }} />
            <a href="/blog" class="text-blue-400 underline hover:text-blue-300">
              {formatHtml(aboutPageStrings.myBlogLinkText)}
            </a>
            <span dangerouslySetInnerHTML={{ __html: formatHtml(aboutPageStrings.finalParagraphPart2) }} />
            {profile.social?.qiita?.url && profile.social?.github?.id && ( // ★ github.idも存在確認
              <>
                <a href={profile.social.qiita.url} class="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  {formatHtml(aboutPageStrings.qiitaUserPrefix)}{profile.social.github.id}
                </a>
                <span dangerouslySetInnerHTML={{ __html: formatHtml(aboutPageStrings.finalParagraphPart3) }} />
              </>
            )}
          </p>
          <p class="mt-2">
            <span dangerouslySetInnerHTML={{ __html: formatHtml(aboutPageStrings.finalParagraphPart4) }} />
            <a href="/projects" class="text-blue-400 underline hover:text-blue-300">
              {formatHtml(aboutPageStrings.projectsLinkText)}
            </a>
            <span dangerouslySetInnerHTML={{ __html: formatHtml(aboutPageStrings.finalParagraphPart5) }} />
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutContent;
