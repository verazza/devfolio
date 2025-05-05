import { createRoute } from 'honox/factory';
import { Link, Script } from 'honox/server';
import profile from '../../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{profile.name} - {profile.title}</title>
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body class="font-sans antialiased bg-gray-100 text-gray-900">
        <div class="container mx-auto py-16">
          <header class="text-center">
            <h1 class="text-4xl font-bold">{profile.name}</h1>
            <p class="text-xl text-gray-600">{profile.title}</p>
            <p class="mt-4">{profile.introduction}</p>
          </header>
          <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">スキル</h2>
            <ul class="list-disc list-inside">
              {profile.skills.map((skill) => (
                <li key={skill.name}>{skill.name} ({skill.level})</li>
              ))}
            </ul>
          </section>
          <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">実績</h2>
            <ul class="list-disc list-inside">
              {profile.projects.map((project) => (
                <li key={project.name}>
                  <Link href={project.url} class="text-blue-500 hover:underline">{project.name}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">興味・関心</h2>
            <ul class="list-disc list-inside">
              {Object.entries(profile.social).map(([key, value]) => (
                <li key={key}>
                  {value && <Link href={value} class={`text-blue-500 hover:underline`}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>}
                </li>
              ))}
              {profile.contact.email && (
                <li>
                  <Link href={`mailto:${profile.contact.email}`} class="text-blue-500 hover:underline">Email</Link>
                </li>
              )}
            </ul>
          </section>
          <footer class="mt-12 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          </footer>
        </div>
      </body>
    </html>
  );
});
