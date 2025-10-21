import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiRouter from './routes/api.js';
import { createStaticRouter } from './routes/static.js';
import { resolveStaticDir } from './utils/resolveStaticDir.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createApp = () => {
  const app = express();
  const staticDir = resolveStaticDir(__dirname);

  app.use('/api', apiRouter);
  app.use(express.static(staticDir));
  app.use(createStaticRouter(staticDir));

  // Basic error handler to keep responses predictable.
  app.use(
    (
      error: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      const message =
        error instanceof Error ? error.message : 'Internal Server Error';
      res.status(500).json({ message });
    },
  );

  return app;
};
