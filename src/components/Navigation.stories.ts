import Navigation from './Navigation.astro';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    docs: {
      description: {
        component:
          'Renders live navigation items and avatar from content collections. `isHome` is the only prop, so it is the only axis of variation.',
      },
    },
  },
};

export const Home = {
  args: {
    isHome: true,
  },
};

export const Scrolled = {
  args: {
    isHome: false,
  },
};
