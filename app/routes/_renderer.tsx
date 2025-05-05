import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import profile from '../../data/profile.json'
import Navi from '../islands/Navi'

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
      <body class="font-sans antialiased bg-gray-100 text-gray-900">
        <Navi />
        {children}
      </body>
    </html>
  )
})
