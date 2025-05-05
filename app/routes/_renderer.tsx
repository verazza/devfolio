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
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body class="font-sans antialiased bg-gray-900 text-gray-100">
        <HamburgerNav />
        <main class="max-w-4xl mx-auto p-4 bg-gray-800 shadow-md rounded-md flex-grow">
          {children}
          <footer class="mt-12 text-center text-gray-400 bg-gray-800 border-t border-gray-700 py-6 shadow-inner">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          </footer>
        </main>
      </body>
    </html>
  )
})
