import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

const pages = [
  {
    loc: '/',
    lastmod: new Date().toISOString(),
    priority: '1.0',
    changefreq: 'daily',
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString(),
    priority: '0.7',
    changefreq: 'daily',
  },
  {
    loc: '/projects',
    lastmod: new Date().toISOString(),
    priority: '0.7',
    changefreq: 'daily',
  },
  {
    loc: '/services',
    lastmod: new Date().toISOString(),
    priority: '0.7',
    changefreq: 'daily',
  },
  {
    loc: '/blog',
    lastmod: new Date().toISOString(),
    priority: '0.9',
    changefreq: 'daily',
  },
];

export default createRoute(async (c) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
      .map(
        (page) => `
    <url>
      <loc>${profile.url}${page.loc}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `
      )
      .join('')}
</urlset>`;
  c.header('Content-Type', 'application/xml');
  return c.body(xml);
});
