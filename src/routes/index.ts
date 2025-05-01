import { Hono } from 'hono'

const indexRoute = new Hono()

indexRoute.get('/', (c) => c.text('Hello Hono!'));

export default indexRoute
