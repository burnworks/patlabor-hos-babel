import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://burnworks.github.io',
    base: '/patlabor-hos-babel',
    trailingSlash: 'always',
    integrations: [tailwind()],
});
