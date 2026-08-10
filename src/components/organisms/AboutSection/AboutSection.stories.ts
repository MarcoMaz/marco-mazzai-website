import AboutSection from './AboutSection.astro';

export default {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  parameters: {
    docs: {
      description: {
        component:
          'Renders with live data from the `about`, `codingLanguages`, `workExperiences`, and `education` content collections. It has no props — the home/about-page layout it picks is derived internally from the current URL, so there is a single Default story.',
      },
    },
  },
};

export const Default = {
  args: {},
};
