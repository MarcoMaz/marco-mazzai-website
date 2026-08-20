import LinkButton from "./LinkButton.astro";

export default {
  title: "Atoms/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "Destination URL.",
    },
    class: {
      control: "text",
      description:
        "Optional extra class, e.g. for section-specific positioning.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The primary call-to-action button — a filled, uppercase pill used for the one prominent action in a section (e.g. "See all posts").',
      },
    },
  },
};

export const Default = {
  args: {
    href: "/about",
    slots: {
      default: "About Page",
    },
  },
};

export const LongLabel = {
  args: {
    href: "/blog",
    slots: {
      default: "See all blog posts and articles",
    },
  },
};

export const CustomClass = {
  args: {
    href: "/projects",
    class: "mm-section__link-button",
    slots: {
      default: "See all projects",
    },
  },
};
