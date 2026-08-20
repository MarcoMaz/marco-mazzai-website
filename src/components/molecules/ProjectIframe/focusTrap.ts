const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const getAllFocusable = (root: Element): HTMLElement[] =>
  Array.from(root.querySelectorAll(FOCUSABLE));

export function initProjectIframeSkipLinks(): void {
  const skipButtons = document.querySelectorAll<HTMLButtonElement>(
    ".mm-project-iframe__skip:not(.mm-project-iframe__skip--back)",
  );

  skipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrapper = btn.closest(".mm-project-iframe");
      let el = wrapper?.nextElementSibling;
      while (el) {
        const target = el.matches(FOCUSABLE)
          ? (el as HTMLElement)
          : (el.querySelector(FOCUSABLE) as HTMLElement | null);
        if (target) {
          target.focus();
          return;
        }
        el = el.nextElementSibling;
      }
    });
  });

  const backButtons = document.querySelectorAll<HTMLButtonElement>(
    ".mm-project-iframe__skip--back",
  );

  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrapper = btn.closest(".mm-project-iframe");

      let el = wrapper?.previousElementSibling;
      let lastTarget: HTMLElement | null = null;
      while (el) {
        const candidates = el.matches(FOCUSABLE)
          ? [el as HTMLElement]
          : getAllFocusable(el);
        if (candidates.length) lastTarget = candidates[candidates.length - 1];
        if (lastTarget) break;
        el = el.previousElementSibling;
      }
      lastTarget?.focus();
    });
  });
}
