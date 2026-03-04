import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { join } from 'path';

function waitlistMiddleware(req, res, next) {
  const url = req.url?.split('?')[0] || '';
  if (url !== '/waitlist' && url !== '/waitlist/') return next();
  try {
    const html = readFileSync(
      join(process.cwd(), 'public', 'waitlist', 'index.html'),
      'utf-8'
    );
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch {
    next();
  }
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [
    {
      name: 'serve-waitlist',
      configureServer(server) {
        // Run before Vite's SPA fallback so /waitlist serves the waitlist page
        server.middlewares.stack.unshift({ route: '', handle: waitlistMiddleware });
      },
    },
  ],
});
