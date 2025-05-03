import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  const user = c.get('USERS');
  return c.json({ message: 'Protected resource', user });
})
