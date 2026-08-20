import ChipList from "./ChipList.astro";

export default {
  title: "Molecules/ChipList",
  component: ChipList,
  tags: ["autodocs"],
  argTypes: {
    chips: {
      control: "object",
      description: "Tag labels rendered as chips. Renders nothing when empty.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A row of tag chips, used to show topics/technologies on blog posts and pet projects.",
      },
    },
  },
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

export const Empty = {
  args: {
    chips: [],
  },
};
