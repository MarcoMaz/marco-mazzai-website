import Avatar from "./Avatar.astro";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Renders with live data from the `avatar` content collection — it has no props, so there is a single Default story.",
      },
    },
  },
};

export const Default = {
  args: {},
};
