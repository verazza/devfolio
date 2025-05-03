import type { } from 'hono'
import { JwtPayload } from './middleware/auth';

declare module 'hono' {
  interface Env {
    Variables: {
      APP_NAME?: string;
      USERS?: JwtPayload;
    }
    Bindings: {
      CONFIG?: KVNamespace;
      DB?: D1Database;
    }
  }
}
