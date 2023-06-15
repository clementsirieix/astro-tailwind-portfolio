import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';

const domain = import.meta.env.DOMAIN;

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: 'dracula-soft',
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
  ],
  output: 'hybrid',
  adapter: netlify(),
  experimental: {
    assets: true,
  },
  site: `https://www.${domain}`,
});
