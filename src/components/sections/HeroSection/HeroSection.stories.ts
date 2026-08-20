import HeroSection from './HeroSection.astro';

export default {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `home` and `avatar` content collections — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
