import Button from './Button.astro';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
  args: {
    href: '/about',
    slots: {
      default: 'About Page',
    },
  },
};

export const LongLabel = {
  args: {
    href: '/blog',
    slots: {
      default: 'See all blog posts and articles',
    },
  },
};

export const CustomClass = {
  args: {
    href: '/projects',
    class: 'mm-section__button',
    slots: {
      default: 'See all projects',
    },
  },
};
