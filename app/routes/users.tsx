import { createRoute } from 'honox/factory';

export const POST = createRoute(async (c) => {
  const { name, email } = await c.req.json();
  await c.env.DB
    ?.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
    .bind(name, email)
    .run();
  return c.json({ message: 'User created' });
})

export default createRoute(async (c) => {
  const { results } = (await c.env.DB?.prepare('SELECT * FROM users').all()) ?? { results: [] };
  return c.json(results ?? []);
});
