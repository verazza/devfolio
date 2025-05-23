import type { } from 'hono'
import { JwtPayload } from './middleware/auth';

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

declare module 'hono' {
  interface Env {
    Variables: {
      APP_NAME?: string;
      USERS?: JwtPayload;
      pageTitle?: string;
      metaTags?: MetaTag[];
    }
    Bindings: {
      CONFIG?: KVNamespace;
      DB?: D1Database;
    }
  }
}
