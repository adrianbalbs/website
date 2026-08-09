// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Instrument Serif",
    cssVariable: "--font-instrument-serif",
    weights: [400],
    styles: ['normal', 'italic'],
    subsets: ['latin'],
  }],

  integrations: [icon()],
  adapter: cloudflare()
});