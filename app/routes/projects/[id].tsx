import { createRoute } from 'honox/factory';
import profile from '../../../data/profile.json';
import { allProjectsData, type ProjectInfo } from '../projects';

const generateId = (title: string): string => title.toLowerCase().replace(/\s+/g, '-');
const getProjectById = (id: string): ProjectInfo | undefined => {
  return allProjectsData.find(p => generateId(p.title) === id);
}
const getOgDescription = (desc: string | any): string => {
  if (typeof desc === 'string') {
    return desc.substring(0, 150) + '...';
  }
  return "プロジェクトの詳細情報です。";
}


export default createRoute(async (c) => {
  const id = c.req.param('id');
  const project = getProjectById(id);

  if (!project) {
    return c.notFound();
  }

  const projectUrl = `${profile.og.url}/projects/${id}`;

  const baseUrl = profile.og.url;
  const targetUrl = new URL('/projects', baseUrl); // ベースURLとパスを結合
  targetUrl.hash = id;                           // ハッシュには id を設定
  const redirectUrl = targetUrl.toString();      // 文字列に変換
  // ★★★ ここまで修正 ★★★

  c.set('pageTitle', `${profile.name} - Project: ${project.title}`);
  c.set('metaTags', [
    { property: 'og:title', content: project.title },
    { property: 'og:description', content: getOgDescription(project.description) },
    { property: 'og:url', content: projectUrl },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: profile.og.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: project.title },
    { name: 'twitter:description', content: getOgDescription(project.description) },
    { name: 'twitter:image', content: profile.og.image },
  ]);

  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 class="text-3xl font-bold">{project.title}</h1>
        <p class="mt-4">プロジェクトのページにリダイレクトします...</p>
        <p class="mt-8">
          <a href={redirectUrl}>リダイレクトされない場合はこちらをクリック</a>
        </p>
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.location.replace('${redirectUrl}');
        ` }} />
    </>
  );
});
