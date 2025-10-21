import type { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import path from 'node:path';

export const createStaticRouter = (staticDir: string) => {
  const router = Router();

  router.get(/.*/, (_req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(staticDir, 'index.html'), (error) => {
      if (error) {
        next(error);
      }
    });
  });

  return router;
};
