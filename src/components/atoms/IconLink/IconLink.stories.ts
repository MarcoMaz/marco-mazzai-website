import IconLink from "./IconLink.astro";
import { Icon } from "astro-icon/components";

export default {
  title: "Atoms/IconLink",
  component: IconLink,
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
