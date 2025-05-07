import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import profile from '../../data/profile.json'
import HamburgerNav from '../islands/HamburgerNav';

export default jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{profile.name} - {profile.title}</title>
        <meta name="description" content={profile.og.description} />
        <meta property="og:title" content={profile.og.title} />
        <meta property="og:description" content={profile.og.description} />
        <meta property="og:image" content={profile.og.image} />
        <meta property="og:url" content={profile.og.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={profile.og.title} />
        <meta name="twitter:description" content={profile.og.description} />
        <meta name="twitter:image" content={profile.og.image} />
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body class="font-sans antialiased bg-gray-900 text-gray-100">
        <main class="max-w-4xl mx-auto p-4 bg-gray-800 shadow-md rounded-md flex-grow">
          <HamburgerNav />
          {children}
          <footer class="mt-12 text-center text-gray-400 bg-gray-800 border-t border-gray-700 py-6 shadow-inner">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          </footer>
        </main>
      </body>
    </html>
  )
})
