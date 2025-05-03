import { MiddlewareHandler } from 'hono';
import { verify } from 'jsonwebtoken';

export const jwtMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader) {
    return c.json({ message: 'Authorization header is missing' }, 401);
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return c.json({ message: 'Token is missing' }, 401);
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || 'your-secret');
    c.set('user', decoded);
    await next();
  } catch (error) {
    return c.json({ message: 'Invalid token' }, 401);
  }
};
