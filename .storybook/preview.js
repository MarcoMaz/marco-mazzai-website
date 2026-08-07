import '../src/styles/global.scss';
import '@fontsource-variable/space-grotesk';

/** @type {import('@storybook-astro/framework').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
