import Navigation from './Navigation.astro';

// Both the mobile bar and the desktop hero-list render on top of a dark
// section in production (see HeroSection.scss) — without this backdrop the
// white/light text is invisible against Storybook's default light canvas.
const withDarkBackdrop = (Story: () => unknown) =>
  `<div class="sb-dark-backdrop">${Story()}</div>`;

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  decorators: [withDarkBackdrop],
  parameters: {
    docs: {
      description: {
        component:
          'Renders live navigation items and avatar from content collections. `isHome` is the only prop. The mobile/desktop split is a pure CSS media query (1024px) — widen the preview pane past that to see the Desktop stories; narrower shows the mobile bar.',
      },
    },
  },
};

export const MobileClosed = {
  args: {
    isHome: true,
  },
};

export const MobileOpen = {
  args: {
    isHome: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const list = canvasElement.querySelector('#mm-navigation-mobile-list');
    const button = canvasElement.querySelector(
      '.mm-navigation-mobile__hamburger',
    );

    list?.classList.add('--open');
    button?.setAttribute('aria-expanded', 'true');
    button?.setAttribute('aria-label', 'Close navigation');
  },
};

export const Desktop = {
  args: {
    isHome: true,
  },
};

export const DesktopScrolled = {
  args: {
    isHome: false,
  },
};
