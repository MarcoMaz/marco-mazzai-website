import LinkButton from './LinkButton.astro';

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
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
    class: 'mm-section__link-button',
    slots: {
      default: 'See all projects',
    },
  },
};
