import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { loggerMiddleware } from './middleware/logger'
import { jwtMiddleware } from './middleware/jwt'

const app = createApp()

app.use('*', loggerMiddleware)
app.use('/protected/*', jwtMiddleware)

showRoutes(app)

export default app
