// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import stripHtmlComments from './integrations/strip-html-comments.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcomazzai.dev',
  integrations: [
    stripHtmlComments(),
    icon({
      include: {
        ph: [
          'list',
          'x',
          'caret-left',
          'caret-right',
          'minus',
          'plus',
          'paper-plane-tilt',
          'gitlab-logo-simple',
          'linkedin-logo',
          'github-logo',
        ],
      },
    }),
  ],
});
