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
      prerenderConfig: './prerender.config.js',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,woff2}',
          '**/{download,md-menu,md-trash,logo-twitter,logo-github}.svg'
        ]
      }
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender'
    }
  ]
};
