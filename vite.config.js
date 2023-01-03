import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Campton',
            local: 'Campton',
            src: './public/fonts/*.woff',
          },
          {
            name: 'Campton',
            local: 'Campton',
            src: './public/fonts/*.woff2',
          },
        ],
        display: 'auto',
        preload: true,
      },
    }),
  ],
});
