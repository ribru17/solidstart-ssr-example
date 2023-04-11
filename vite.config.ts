import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [solid({
    ssr: true, // this is just to be explicit: `ssr` is `true` by default
    adapter: vercel({
      prerender: {
        expiration: 60, // refresh cache after 60s
      },
    }),
  })],
});
