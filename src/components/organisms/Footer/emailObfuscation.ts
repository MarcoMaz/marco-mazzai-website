export function initEmailObfuscation(): void {
  document
    .querySelectorAll<HTMLAnchorElement>('[data-mm-email-user]')
    .forEach((link) => {
      const { mmEmailUser: user, mmEmailDomain: domain } = link.dataset;
      if (!user || !domain) return;

      const email = `${user}@${domain}`;
      link.href = `mailto:${email}`;

      const textEl = link.querySelector('[data-mm-email-text]');
      if (textEl) textEl.textContent = email;
    });
}
