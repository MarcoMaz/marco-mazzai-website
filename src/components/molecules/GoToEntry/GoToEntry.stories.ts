import GoToEntry from "./GoToEntry.astro";

export default {
  title: "Molecules/GoToEntry",
  component: GoToEntry,
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
