import { createRoute } from 'honox/factory';
import { Link, Script } from 'honox/server';
import profile from '../../data/profile.json';

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
        <nav class="bg-gray-200 py-4">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <ul class="flex justify-center space-x-16 list-none">
              <li><a href="/" class="text-gray-700 hover:text-blue-500">HOME</a></li>
              <li><a href="/about" class="text-gray-700 hover:text-blue-500">ABOUT</a></li>
              <li><a href="/projects" class="text-gray-700 hover:text-blue-500">PROJECTS</a></li>
              <li><a href="/contact" class="text-gray-700 hover:text-blue-500">CONTACT</a></li>
            </ul>
          </div>
        </nav>
        <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
          <header class="text-center">
            <h1 class="text-4xl font-bold">{profile.name}</h1>
            <p class="text-xl text-gray-600">{profile.title}</p>
            <p class="mt-4">{profile.introduction}</p>
          </header>
          {/* ... (既存のコンテンツ) ... */}
        </div>
        <footer class="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        </footer>
      </body>
    </html>
  );
});
