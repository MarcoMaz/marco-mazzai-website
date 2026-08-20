import ProjectIframe from "./ProjectIframe.astro";

export default {
  title: "Molecules/ProjectIframe",
  component: ProjectIframe,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Embedded page URL.",
    },
    title: {
      control: "text",
      description: "Accessible `<iframe>` title.",
    },
    width: {
      control: "number",
      description:
        "Intrinsic width in px, used for the aspect ratio. Defaults to 600.",
    },
    height: {
      control: "number",
      description:
        "Intrinsic height in px, used for the aspect ratio. Defaults to 400.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Embeds a live project demo in an iframe, with visually-hidden "skip preview" links before/after it so keyboard users can jump over third-party content.',
      },
    },
  },
};

export const Default = {
  args: {
    src: "https://example.com",
    title: "Example project preview",
  },
};

export const CustomSize = {
  args: {
    src: "https://example.com",
    title: "Example project preview",
    width: 800,
    height: 600,
  },
};
