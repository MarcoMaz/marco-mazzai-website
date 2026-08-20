import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Marco Mazzai — Component Library",
  brandUrl: "https://marcomazzai.dev",
  brandTarget: "_self",
  colorPrimary: "#c1502e",
  colorSecondary: "#c1502e",
});

addons.setConfig({
  theme,
});
