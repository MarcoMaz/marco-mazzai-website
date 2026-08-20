import BlogListSection from "./BlogListSection.astro";

export default {
  title: "Sections/BlogListSection",
  component: BlogListSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Renders with live data from the `blog` and `blogPage` content collections — it has no props, so there is a single Default story.",
      },
    },
  },
};

export const Default = {
  args: {},
};
