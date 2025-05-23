// app/routes/projects/[id].tsx
import { createRoute } from 'honox/factory';
import profile from '../../../data/profile.json';

// ... (Project インターフェースと getProjectById 関数) ...
interface Project {
  id: string;
  title: string;
  description: string;
}
const getProjectById = (id: string): Project | undefined => {
  const allProjects: Project[] = [
    { id: 'bbs', title: 'BBS Project', description: '掲示板プロジェクトです。' },
    { id: 'mcp', title: 'MCP Project', description: 'MCPプロジェクトです。' },
  ];
  return allProjects.find(p => p.id === id);
}
// ...

export default createRoute(async (c) => {
  const id = c.req.param('id');
  const project = getProjectById(id);

  if (!project) {
    return c.notFound();
  }

  const projectUrl = `${profile.og.url}/projects/${project.id}`; // OGP用URL (これは問題ない場合が多い)

  // ★ URL オブジェクトを使ってリダイレクトURLを安全に生成
  const baseUrl = profile.og.url;
  const targetUrl = new URL('/projects', baseUrl); // ベースURLとパスを結合
  targetUrl.hash = project.id;                   // ハッシュを追加
  const redirectUrl = targetUrl.toString();      // 文字列に変換

  // ★ c.set() を使ってコンテキストに値を設定
  c.set('pageTitle', `${profile.name} - Project: ${project.title}`);
  c.set('metaTags', [
    { property: 'og:title', content: project.title },
    { property: 'og:description', content: project.description },
    { property: 'og:url', content: projectUrl },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: profile.og.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: project.title },
    { name: 'twitter:description', content: project.description },
    { name: 'twitter:image', content: profile.og.image },
  ]);

  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 class="text-3xl font-bold">{project.title}</h1>
        <p class="mt-4">{project.description}</p>
        <p class="mt-8">
          プロジェクトのページにリダイレクトします...
          <a href={redirectUrl}>リダイレクトされない場合はこちらをクリック</a>
        </p>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.location.replace('${redirectUrl}'); // ★ 正しく生成されたURLを使う
        ` }} />
    </>
  );
});
