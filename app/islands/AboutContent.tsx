import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n';
import type { AboutData } from '../types/about';
import type { ProfileData } from '../types/profile'; // profile.json全体の型 (または必要な部分の型)
import { generalMessages, aboutPageStrings } from '../locales/translations';

type AboutContentProps = {
  aboutData: AboutData;
  profile: Pick<ProfileData, 'social' | 'name'>; // 必要なprofileの情報をPickで指定
};

const AboutContent = ({ aboutData, profile }: AboutContentProps) => {
  const { lang } = usePageLang();

  // generalMessages.homeDescription2 が未定義の場合のフォールバック
  const policyQuote = generalMessages.homeDescription2
    ? translate(generalMessages.homeDescription2, lang)
    : "Policy quote missing";

  return (
    <section class="mt-8 space-y-8"> {/* space-y-4 から調整 */}
      {/* 私についてセクション */}
      <article>
        <h2 class="text-2xl font-semibold">{translate(aboutData.aboutMe.title, lang)}</h2>
        <div class="mt-4 space-y-4 text-gray-300">
          <p dangerouslySetInnerHTML={{ __html: translate(aboutData.aboutMe.intro1, lang) }} />
          <p class="mt-6 text-lg text-center">
            「{policyQuote}」{translate(aboutData.aboutMe.policySuffix, lang)}
          </p>
          <p dangerouslySetInnerHTML={{ __html: translate(aboutData.aboutMe.neovimStory, lang) }} />
        </div>
      </article>

      {/* 経歴セクション */}
      <article>
        <h2 class="text-2xl font-semibold mt-8">{translate(aboutData.career.title, lang)}</h2>
        <div class="mt-4 space-y-4 text-gray-300">
          {aboutData.career.paragraphs.map((p, index) => (
            <p key={`career-p-${index}`} dangerouslySetInnerHTML={{ __html: translate(p, lang) }} />
          ))}
        </div>
      </article>

      {/* 最後にセクション */}
      <article>
        <h2 class="text-2xl font-semibold mt-8">{translate(aboutData.finally.title, lang)}</h2>
        <div class="mt-4 text-gray-300">
          <p>
            {translate(aboutPageStrings.finalParagraphPart1, lang)}
            <a href="/blog" class="text-blue-400 underline hover:text-blue-300">{translate(aboutPageStrings.myBlogLinkText, lang)}</a>
            <span dangerouslySetInnerHTML={{ __html: translate(aboutPageStrings.finalParagraphPart2, lang) }} /> {/* &nbsp; を含むため */}
            {profile.social?.qiita?.url && ( // QiitaのURLが存在すれば表示
              <>
                <a href={`${profile.social.qiita.url}/${profile.social.qiita.id}`} class="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  {translate(aboutPageStrings.qiitaUserPrefix, lang)}{profile.social.github.id} {/* profile.social.github.id は Qiita ID に適宜修正 */}
                </a>
                <span dangerouslySetInnerHTML={{ __html: translate(aboutPageStrings.finalParagraphPart3, lang) }} />
              </>
            )}
          </p>
          <p class="mt-2">
            {translate(aboutPageStrings.finalParagraphPart4, lang)}
            <a href="/projects" class="text-blue-400 underline hover:text-blue-300">{translate(aboutPageStrings.projectsLinkText, lang)}</a>
            <span dangerouslySetInnerHTML={{ __html: translate(aboutPageStrings.finalParagraphPart5, lang) }} />
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutContent;
