import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theHypebridge.com',
  integrations: [react(), tailwind()]
});