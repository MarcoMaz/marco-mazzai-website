import GoToEntry from "./GoToEntry.astro";

export default {
  title: "Molecules/GoToEntry",
  component: GoToEntry,
  tags: ["autodocs"],
  argTypes: {
    prevEntry: {
      control: "object",
      description: 'Link to the previous entry. Omit to hide the "prev" side.',
    },
    nextEntry: {
      control: "object",
      description: 'Link to the next entry. Omit to hide the "next" side.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Prev/next pagination footer for blog posts and pet projects, used at the bottom of `BlogEntry` / `ProjectEntry`.",
      },
    },
  },
};

export const Default = {
  args: {
    prevEntry: {
      href: "/blog/previous-post",
      heading: "Designing accessible focus states",
      date: "12-03-2024",
    },
  },
};

export const NextOnly = {
  args: {
    nextEntry: {
      href: "/blog/next-post",
      heading: "Why design systems need a11y from day one",
      date: "03-06-2024",
    },
  },
};

export const Both = {
  args: {
    prevEntry: {
      href: "/blog/previous-post",
      heading: "Designing accessible focus states",
      date: "12-03-2024",
    },
    nextEntry: {
      href: "/blog/next-post",
      heading: "Why design systems need a11y from day one",
      date: "03-06-2024",
    },
  },
};

export const Empty = {
  args: {},
};
