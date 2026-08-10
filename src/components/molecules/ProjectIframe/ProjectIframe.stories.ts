import ProjectIframe from './ProjectIframe.astro';

export default {
  title: 'Molecules/ProjectIframe',
  component: ProjectIframe,
};

export const Default = {
  args: {
    src: 'https://example.com',
    title: 'Example project preview',
  },
};

export const CustomSize = {
  args: {
    src: 'https://example.com',
    title: 'Example project preview',
    width: 800,
    height: 600,
  },
};
