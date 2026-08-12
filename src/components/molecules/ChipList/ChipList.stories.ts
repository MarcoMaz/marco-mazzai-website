import ChipList from "./ChipList.astro";

export default {
  title: "Molecules/ChipList",
  component: ChipList,
};

export const Default = {
  args: {
    chips: ["Accessibility"],
  },
};

export const ManyChips = {
  args: {
    chips: [
      "JavaScript",
      "TypeScript",
      "Astro",
      "React",
      "Accessibility",
      "Design Systems",
      "CSS",
      "HTML",
    ],
  },
};
