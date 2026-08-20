import ProjectEntry from './ProjectEntry.astro';

export default {
  title: 'Templates/ProjectEntry',
  component: ProjectEntry,
  parameters: {
    docs: {
      description: {
        component:
          'Renders a single pet project — the `.mm-entry` block used by /projects/[id]. Looks up the entry from the `petProjects` content collection by `id` and derives prev/next links itself.',
      },
    },
  },
};

export const Default = {
  args: {
    id: 'wa11y',
  },
};

export const WithPrevAndNext = {
  args: {
    id: 'poly-metronome',
  },
};
