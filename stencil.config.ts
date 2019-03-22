import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    sass(),
    builtins(),
    globals()
  ],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      }
    }
  ]
};
