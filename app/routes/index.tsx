import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import Footer from '../islands/Footer';

export default createRoute(async (c) => {
  const name = c.req.query('name') ?? 'Hono'
  const currentYear = new Date().getFullYear().toString();

  const config = await c.env.CONFIG?.get("footer_config", "json") as {
    discord_url: string;
    webapp_git_repo_url: string;
    org_name: string;
  } | null;

  return c.render(
    <div class="py-8 text-center">
      <title>{name}</title>
      <h1 class="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />
      <Footer
        discord_url={config?.discord_url || '#'}
        webapp_git_repo_url={config?.webapp_git_repo_url || '#'}
        org_year={currentYear}
        org_name={config?.org_name || 'Your Organization'}
      />
    </div>
  )
})
