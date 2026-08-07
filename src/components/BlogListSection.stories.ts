import BlogListSection from './BlogListSection.astro';

export default {
  title: 'Components/BlogListSection',
  component: BlogListSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `blog` and `blogPage` content collections — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
