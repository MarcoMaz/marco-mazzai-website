// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcomazzai.dev',
  integrations: [
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
