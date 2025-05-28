import { Fragment } from 'hono/jsx'; // Fragmentをインポート
import type { ProjectInfo } from '../types/projects';
import type { Language, LocalizedString } from '../types/common';
import { translate } from '../utils/i18n';
import { parseAndStyleInlineCode } from '../utils/textFormatters';
import { projectPageStrings } from '../locales/translations'; // projectPageStringsも必要なら

const GetGitUrlComponent = ({ githubId, repo }: { githubId: string, repo: string }) => {
  const gitUrl = `https://github.com/${githubId}/${repo}`;
  return <a href={gitUrl} class="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">{repo}</a>;
};

type ProjectItemProps = ProjectInfo & {
  lang: Language;
  githubId: string;
};

const FormattedTextRenderer = ({ text, lang }: { text: LocalizedString | undefined, lang: Language }) => {
  if (!text) return null;
  const translated = translate(text, lang);
  if (!translated || translated.trim() === "") return null;

  const parts = parseAndStyleInlineCode(translated);
  // ★ key を文字列に変換 (例: i.toString() または String(i))
  return <>{parts.map((part, i) => <Fragment key={String(i)}>{part}</Fragment>)}</>;
};

function ProjectItem({
  id, title, description, details, points, statement, githubRepoName, liveLink, detailsLinkRepo, lang, githubId
}: ProjectItemProps) {

  // ★ githubId と githubRepoName の両方が存在する場合のみURLを生成
  const githubProjectUrl = (githubId && githubRepoName)
    ? `https://github.com/${githubId}/${githubRepoName}`
    : undefined;

  return (
    <article id={id} class="mt-8 space-y-4 group relative pt-4 border-t border-gray-700 first:border-t-0 first:pt-0">
      <h3 class="text-2xl font-semibold flex items-center">
        <a href={`#${id}`} class="mr-2 text-xl text-gray-500 hover:text-blue-400 no-underline" aria-label={`Link to ${translate(title, lang)} section`}>
          🔗
        </a>
        <span>{translate(title, lang)}</span>
      </h3>
      <div class="text-gray-300 prose prose-invert prose-sm max-w-none space-y-3"> {/* 親のpタグに space-y-3 を適用 */}
        <p><FormattedTextRenderer text={description} lang={lang} /></p>

        {id === 'kishax' && detailsLinkRepo ? (
          <p>
            {translate(projectPageStrings.kishaxAuthDetailPrefix, lang)}
            <GetGitUrlComponent githubId={githubId} repo={detailsLinkRepo} />
            {translate(projectPageStrings.kishaxAuthDetailSuffix, lang)}
          </p>
        ) : (
          // detailsが存在し、翻訳後の文字列が空でない場合のみ <p> タグをレンダリング
          details && translate(details, lang).trim() &&
          <p><FormattedTextRenderer text={details} lang={lang} /></p>
        )}
      </div>
      <ul class="mt-2 list-disc list-inside text-gray-400 space-y-1">
        {points.map((point, index) => (
          <li key={`${id}-point-${index}`}>
            <FormattedTextRenderer text={point} lang={lang} />
          </li>
        ))}
      </ul>
      {/* statementが存在し、翻訳後の文字列が空でない場合のみ <p> タグをレンダリング */}
      {statement && translate(statement, lang).trim() && (
        <p class="mt-2 text-gray-400 italic">
          "<FormattedTextRenderer text={statement} lang={lang} />"
        </p>
      )}
      <div class="mt-4 space-x-4">
        {githubProjectUrl && (
          <a
            class="text-blue-400 underline hover:text-blue-300"
            href={githubProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate(projectPageStrings.viewOnGithub, lang)}
          </a>
        )}
        {liveLink && (
          <a
            class="text-green-400 underline hover:text-green-300"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate(projectPageStrings.viewSite || { ja: "サイトを見る", en: "View Site" }, lang)}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
