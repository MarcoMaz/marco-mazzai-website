import GoToEntry from './GoToEntry.astro';

export default {
  title: 'Molecules/GoToEntry',
  component: GoToEntry,
};

export const Both = {
  args: {
    prevEntry: {
      href: '/blog/previous-post',
      heading: 'Designing accessible focus states',
      kicker: 'Accessibility',
    },
    nextEntry: {
      href: '/blog/next-post',
      heading: 'Why design systems need a11y from day one',
      kicker: 'Design Systems',
    },
  },
};

export const PrevOnly = {
  args: {
    prevEntry: {
      href: '/blog/previous-post',
      heading: 'Designing accessible focus states',
      kicker: 'Accessibility',
    },
  },
};

export const NextOnly = {
  args: {
    nextEntry: {
      href: '/blog/next-post',
      heading: 'Why design systems need a11y from day one',
      kicker: 'Design Systems',
    },
  },
};

export const WithoutKickers = {
  args: {
    prevEntry: {
      href: '/blog/previous-post',
      heading: 'Designing accessible focus states',
    },
    nextEntry: {
      href: '/blog/next-post',
      heading: 'Why design systems need a11y from day one',
    },
  },
};

export const Empty = {
  args: {},
};
