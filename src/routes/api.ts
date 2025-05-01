import { Hono } from 'hono'

export const apiRoutes = new Hono()

apiRoutes.get('/hello', (c) => {
  return c.json({ message: 'Hello from /api/hello' })
})
