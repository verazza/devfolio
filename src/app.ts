import { Hono } from 'hono'
import { apiRoutes } from './routes/api'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())

app.route('/api', apiRoutes)

export default app
