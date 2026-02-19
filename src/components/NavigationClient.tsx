/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

type Item = { url: string; label: string };

const NavigationClient: React.FC<{ items: Item[] }> = ({ items }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 799px)').matches;

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.querySelector('body');
    if (!body) return;
    if (visible) body.classList.add('blocked');
    else body.classList.remove('blocked');

    const navList = document.getElementById('nav-list');
    if (navList) navList.style.display = visible ? 'block' : (isMobile() ? 'none' : 'block');
  }, [visible]);

  useEffect(() => {
    // Ensure initial state matches viewport
    if (typeof document === 'undefined') return;
    const navList = document.getElementById('nav-list');
    if (navList) navList.style.display = isMobile() ? 'none' : 'block';

    const onResize = () => {
      // Always close the flyout on any resize
      setVisible(false);
      const navListInner = document.getElementById('nav-list');
      if (!navListInner) return;
      // Reset display according to viewport after closing
      if (isMobile()) navListInner.style.display = 'none';
      else navListInner.style.display = 'block';
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleMenu = () => setVisible(v => !v);

  const mobileCSS = `
    @media (min-width: 800px) {
      .Navigation__mobile { display: none !important; }
    }
  `;

  return (
    <>
      <style>{mobileCSS}</style>
      <div className="Navigation__mobile">
        <button aria-label="navigation button" className="Navigation__mobile__hamburger" onClick={toggleMenu}>
          {visible ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>
    </>
  );
};

export default NavigationClient;
