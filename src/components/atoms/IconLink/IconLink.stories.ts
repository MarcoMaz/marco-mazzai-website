import IconLink from './IconLink.astro';

export default {
  title: 'Atoms/IconLink',
  component: IconLink,
};

export const Default = {
  args: {
    href: '/blog/some-post',
    slots: {
      default: 'Read more',
    },
  },
};

export const WithLeadingIcon = {
  args: {
    href: 'https://github.com/MarcoMaz',
    target: '_blank',
    slots: {
      'icon-left': '<svg width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="currentColor" /></svg>',
      default: 'Github',
    },
  },
};

export const WithTrailingIcon = {
  args: {
    href: '/blog/some-post',
    slots: {
      default: 'Read more',
      'icon-right': '<svg width="16" height="16" aria-hidden="true"><path d="M4 2l8 6-8 6z" fill="currentColor" /></svg>',
    },
  },
};
