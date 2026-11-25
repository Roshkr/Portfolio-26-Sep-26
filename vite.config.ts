import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import process from 'node:process';
import { defineConfig, loadEnv, type Plugin } from 'vite';

const localChatApi = (): Plugin => ({
  name: 'local-chat-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res, next) => {
      if (!req.method) {
        next();
        return;
      }

      let body: unknown;
      if (req.method === 'POST') {
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }

        try {
          body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ error: 'Send a valid JSON request.' }));
          return;
        }
      }

      const requestUrl = new URL(req.url ?? '/', 'http://localhost');
      const apiRequest = {
        method: req.method,
        body,
        headers: req.headers,
        query: Object.fromEntries(requestUrl.searchParams.entries()),
      };
      const apiResponse = {
        status(code: number) {
          res.statusCode = code;
          return apiResponse;
        },
        json(responseBody: unknown) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(responseBody));
        },
      };

      try {
        const { default: handler } = await import('./api/chat.ts');
        await handler(apiRequest, apiResponse);
      } catch (error) {
        server.config.logger.error('Local chat API failed.', { error });
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ error: 'The local chat service failed. Check the Vite terminal for details.' }));
        }
      }
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;

  return {
    plugins: [react(), tailwindcss(), localChatApi()],
    build: {
      manifest: true,
    },
    resolve: {
      alias: {
        '@': import.meta.dirname ?? path.resolve(''),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify-file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Exclude static assets from watching - images/videos don't need HMR
      // and Windows can lock these files causing EBUSY crashes.
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: ['**/src/assets/**'],
      },
    },
  };
});
