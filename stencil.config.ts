import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://strikeoff.app/',
      copy: [
        { src: 'netlify', dest: '' }
      ],
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,woff2}',
          '**/*{menu.svg,trash.svg}'
        ]
      }
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender'
    }
  ]
};
