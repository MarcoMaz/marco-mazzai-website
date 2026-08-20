/** @type {import('@storybook-astro/framework').StorybookConfig} */
export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook-astro/framework",
    options: {},
  },
};
