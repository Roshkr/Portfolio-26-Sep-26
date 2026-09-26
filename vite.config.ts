import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': import.meta.dirname ?? path.resolve(''),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Exclude static assets from watching — images/videos don't need HMR
      // and Windows can lock these files causing EBUSY crashes.
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: ['**/src/assets/**'],
      },
    },
  };
});
