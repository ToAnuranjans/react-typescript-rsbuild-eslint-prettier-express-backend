import fs from 'node:fs';
import path from 'node:path';

export const resolveStaticDir = (baseDir: string) => {
  const candidates = [
    path.resolve(baseDir, '../web'),
    path.resolve(baseDir, '../dist/web'),
    path.resolve(baseDir, '../dist'),
    path.resolve(process.cwd(), 'dist/web'),
    path.resolve(process.cwd(), 'dist'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, 'index.html'))) {
      return candidate;
    }
  }

  return candidates[0];
};
