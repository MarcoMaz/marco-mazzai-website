import BlogEntry from './BlogEntry.astro';

export default {
  title: 'Templates/BlogEntry',
  component: BlogEntry,
  parameters: {
    docs: {
      description: {
        component:
          'Renders a single blog post — the `.mm-entry` block used by /blog/[slug]. Looks up the post from the `blog` content collection by `slug` and derives prev/next links itself.',
      },
    },
  },
};

export const Default = {
  args: {
    slug: 'accessible-images-a-guide-to-alt-text',
  },
};
