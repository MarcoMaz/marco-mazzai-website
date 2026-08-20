import PetProjectsSection from './PetProjectsSection.astro';

export default {
  title: 'Sections/PetProjectsSection',
  component: PetProjectsSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `petProjects` content collection — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
