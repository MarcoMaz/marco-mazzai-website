import Footer from "./Footer.astro";

export default {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Renders with live data from the `footer` and `avatar` content collections — it has no props, so there is a single Default story.",
      },
    },
  },
};

export const Default = {
  args: {},
};
