import Avatar from './Avatar.astro';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `avatar` content collection — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
