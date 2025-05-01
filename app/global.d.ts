import type { } from 'hono'

declare module 'hono' {
  interface Env {
    Variables: {
      APP_NAME?: string;
    }
    Bindings: {
      CONFIG?: KVNamespace;
      DB?: D1Database
    }
  }
}
