export function initMobileNav(): void {
  const button = document.querySelector<HTMLButtonElement>(
    ".mm-navigation-mobile__hamburger",
  );
  const navList = document.getElementById("mm-navigation-mobile-list");

  const setOpen = (open: boolean) => {
    if (!navList || !button) return;
    navList.classList.toggle("--open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    document.body.classList.toggle("blocked", open);
  };

  const MOBILE_MQ = window.matchMedia("(max-width: 1023px)");
  MOBILE_MQ.addEventListener("change", () => setOpen(false));

  button?.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  // Trap Tab/Shift+Tab within the button + links while the menu is open, and
  // let Escape close it, so keyboard focus never lands on page content
  // hidden behind the open overlay.
  document.addEventListener("keydown", (e) => {
    if (!navList?.classList.contains("--open") || !button) return;

    if (e.key === "Escape") {
      setOpen(false);
      button.focus();
      return;
    }

    if (e.key !== "Tab") return;

    const items = [
      button,
      ...navList.querySelectorAll<HTMLAnchorElement>("a"),
    ];
    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
