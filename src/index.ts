import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  __STATIC_CONTENT: KVNamespace
  __STATIC_CONTENT_MANIFEST: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/favicon.ico', serveStatic({ path: './favicon.ico', manifest: '__STATIC_CONTENT_MANIFEST' }))

app.get('/', (c) => c.text('Hello Hono!'));

app.get('/api/hello', (c) => c.json({ message: 'Hello from Hono API!' }));

export default app;
