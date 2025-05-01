import { Hono } from 'hono'
import indexRoute from '../routes/'
// import apiRoute from '../routes/api'

const router = new Hono()

router.route('/', indexRoute)
// router.route('/api', apiRoute)

export default router
