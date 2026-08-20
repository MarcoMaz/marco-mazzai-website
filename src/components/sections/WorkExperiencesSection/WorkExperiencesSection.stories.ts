import WorkExperiencesSection from './WorkExperiencesSection.astro';

export default {
  title: 'Sections/WorkExperiencesSection',
  component: WorkExperiencesSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `workExperiences` content collection — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
