// app/islands/AboutContent.tsx
import { Fragment } from 'hono/jsx';
import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n'; // translate を直接使う箇所もあるため残す
import { formatHtml } from '../utils/textFormatters'; // ★ 修正された formatHtml を想定
import type { AboutData, Segment, KnownLinkIds, ParagraphStructure } from '../types/about'; // ParagraphStructureもインポート
import type { ProfileData } from '../types/profile';
import type { Language, LocalizedString } from '../types/common'; // LocalizedStringもインポート
import { generalMessages, aboutPageStrings } from '../locales/translations';

type AboutContentProps = {
  aboutData: AboutData;
  profile: Pick<ProfileData, 'social' | 'name'>; // contact は profile.json の social に含まれる想定
};

const AboutContent = ({ aboutData, profile }: AboutContentProps) => {
  const { lang } = usePageLang();

  const renderSegment = (segment: Segment, segmentIndex: number): any | string | null => { // langを引数から削除 (クロージャで上位のlangを参照)
    if (segment.type === 'text') {
      const translationKey = segment.key as keyof typeof aboutPageStrings;
      const textObject = aboutPageStrings[translationKey]; // 型は LocalizedString | undefined
      // formatHtml が LocalizedString | string | undefined を受け付けるようにする
      const textToShow = textObject ? formatHtml(textObject, lang) : `[Missing translation: ${segment.key}]`;
      return <span dangerouslySetInnerHTML={{ __html: textToShow }} />;
    } else if (segment.type === 'link') {
      switch (segment.linkId) { // ★ 'as KnownLinkIds' を削除
        case 'myBlog':
          return (
            <a href="/blog" class="text-blue-400 underline hover:text-blue-300">
              {formatHtml(aboutPageStrings.myBlogLinkText, lang)}
            </a>
          );
        case 'qiita':
          if (profile.social?.qiita?.url && profile.social?.github?.id) {
            return (
              <a href={profile.social.qiita.url} class="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                {formatHtml(aboutPageStrings.qiitaUserPrefix, lang)}{profile.social.github.id}
              </a>
            );
          }
          return null;
        case 'projects':
          return (
            <a href="/projects" class="text-blue-400 underline hover:text-blue-300">
              {formatHtml(aboutPageStrings.projectsLinkText, lang)}
            </a>
          );
        default:
          const exhaustiveCheck: never = segment.linkId;
          console.warn(`Unknown linkId: ${exhaustiveCheck}`);
          return <span>[Unknown Link]</span>;
      }
    }
    return null;
  };

  const policyQuote = generalMessages.homeDescription2
    ? translate(generalMessages.homeDescription2, lang) // policyQuoteはプレーンテキストと仮定
    : "Policy quote missing";

  return (
    <section class="mt-8 space-y-8 text-gray-300">
      <article>
        <h2 class="text-2xl font-semibold text-gray-100" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.title, lang) }} />
        <div class="mt-4 space-y-4">
          <p dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.intro1, lang) }} />
          <p class="mt-6 text-lg text-center">
            「{policyQuote}」<span dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.policySuffix, lang) }} />
          </p>
          <p dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.aboutMe.neovimStory, lang) }} />
        </div>
      </article>

      <article>
        <h2 class="text-2xl font-semibold text-gray-100 mt-8" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.career.title, lang) }} />
        <div class="mt-4 space-y-4">
          {aboutData.career.paragraphs.map((p, index) => (
            <p key={`career-p-${index}`} dangerouslySetInnerHTML={{ __html: formatHtml(p, lang) }} />
          ))}
        </div>
      </article>

      <article>
        <h2 class="text-2xl font-semibold text-gray-100 mt-8" dangerouslySetInnerHTML={{ __html: formatHtml(aboutData.finally.title, lang) }} />
        <div class="mt-4">
          {aboutData.finally.paragraphs.map((paragraph: ParagraphStructure, pIndex: number) => (
            <p key={`finally-p-${pIndex}`} class={pIndex > 0 ? "mt-2" : ""}>
              {paragraph.segments.map((segment: Segment, sIndex: number) => (
                // ★ renderSegment に lang を渡す (またはrenderSegmentがクロージャのlangを使うなら不要)
                // renderSegmentの定義からlangを削除したので、ここでは不要
                <Fragment key={`${pIndex}-${sIndex}`}>{renderSegment(segment, sIndex)}</Fragment>
              ))}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default AboutContent;
