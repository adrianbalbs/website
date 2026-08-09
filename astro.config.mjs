// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Instrument Serif",
    cssVariable: "--font-instrument-serif",
    weights: [400],
    styles: ['normal', 'italic'],
    subsets: ['latin'],
  }]
});
