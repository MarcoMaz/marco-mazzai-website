import IconLink from "./IconLink.astro";
import { Icon } from "astro-icon/components";

export default {
  title: "Atoms/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "Destination URL.",
    },
    target: {
      control: "text",
      description: "Anchor `target`, e.g. `_blank` for external links.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A text link with optional leading/trailing icon slots. Used for in-body links (e.g. "Read more", "Github") where `LinkButton` would be too heavy.',
      },
    },
  },
};

export const Default = {
  args: {
    href: "/blog/some-post",
    slots: {
      default: "Read more",
    },
  },
};

export const WithIconLeft = {
  args: {
    href: "https://github.com/MarcoMaz",
    target: "_blank",
    slots: {
      "icon-left": { component: Icon, props: { name: "ph:github-logo" } },
      default: "Github",
    },
  },
};

export const WithIconRight = {
  args: {
    href: "/blog/some-post",
    slots: {
      default: "Read more",
      "icon-right": { component: Icon, props: { name: "ph:caret-right" } },
    },
  },
};
