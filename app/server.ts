import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { loggerMiddleware } from './middleware/logger'

const app = createApp()

app.use('*', loggerMiddleware)

showRoutes(app)

export default app
