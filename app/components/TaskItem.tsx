import type { ProjectInfo } from '../types/projects';
import type { Language } from '../types/common';
import { translate } from '../utils/i18n';
import { projectPageStrings } from '../locales/translations'; // ★ projectPageStrings をインポート

const GetGitUrlComponent = ({ githubId, repo }: { githubId: string, repo: string }) => {
  const gitUrl = `https://github.com/${githubId}/${repo}`;
  return <a href={gitUrl} class="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">{repo}</a>;
};

type ProjectItemProps = ProjectInfo & {
  lang: Language;
  githubId: string;
};

function ProjectItem({
  id, title, description, details, points, statement, githubRepoName, liveLink, detailsLinkRepo, lang, githubId
}: ProjectItemProps) {
  const githubProjectUrl = githubRepoName ? `https://github.com/${githubId}/${githubRepoName}` : undefined;

  return (
    <article id={id} class="mt-8 space-y-4 group relative pt-4 border-t border-gray-700 first:border-t-0 first:pt-0">
      <h3 class="text-2xl font-semibold flex items-center">
        <a href={`#${id}`} class="mr-2 text-xl text-gray-500 hover:text-blue-400 no-underline" aria-label={`Link to ${translate(title, lang)} section`}>
          🔗
        </a>
        <span>{translate(title, lang)}</span>
      </h3>
      <div class="text-gray-300 prose prose-invert prose-sm max-w-none">
        <p>{translate(description, lang)}</p>

        {/* ★ kishaxプロジェクトの詳細表示を修正 */}
        {id === 'kishax' && detailsLinkRepo ? (
          <p>
            {translate(projectPageStrings.kishaxAuthDetailPrefix, lang)}
            <GetGitUrlComponent githubId={githubId} repo={detailsLinkRepo} />
            {translate(projectPageStrings.kishaxAuthDetailSuffix, lang)}
          </p>
        ) : (
          // kishax以外のプロジェクト、またはdetailsLinkRepoがない場合は通常のdetailsを表示
          <p>{translate(details, lang)}</p>
        )}
      </div>
      <ul class="mt-2 list-disc list-inside text-gray-400">
        {points.map((point, index) => (
          <li key={`${id}-point-${index}`}>{translate(point, lang)}</li>
        ))}
      </ul>
      {statement && translate(statement, lang) && (
        <p class="mt-2 text-gray-400 italic">"{translate(statement, lang)}"</p>
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
            {translate(projectPageStrings.viewSite, lang)}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
