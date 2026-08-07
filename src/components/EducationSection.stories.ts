import EducationSection from './EducationSection.astro';

export default {
  title: 'Components/EducationSection',
  component: EducationSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `education` content collection — it has no props, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
