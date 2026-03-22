'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/AboutDrawer.module.css';

export default function AboutDrawer() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open && panelRef.current) {
      // Measure the panel's actual right edge and expand --y-line to fit
      const rect = panelRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty('--y-line', `${Math.ceil(rect.right) + 40}px`);
    } else {
      // Revert to the CSS default
      document.documentElement.style.removeProperty('--y-line');
    }
  }, [open]);

  return (
    <>
      {/* White fill: covers full left column on desktop */}
      <div className={`${styles.fill} ${open ? styles.fillOpen : ''}`} aria-hidden="true" />

      <div className={styles.container}>
        <button
          className={styles.trigger}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          type="button"
        >
          About
        </button>

        {/* Mobile: slide-down overlay */}
        <div className={`${styles.overlay} ${open ? styles.open : ''}`} aria-hidden={!open}>
          <div className={styles.copy}>
            <p>Nooscope is an independent publishing company focussing on the publishing of unique book objects. Nooscope is interested in a wide range of subjects.</p>
          </div>
        </div>

        {/* Desktop: text panel 5% below and 3% right of trigger */}
        <div
          ref={panelRef}
          className={`${styles.aboutPanel} ${open ? styles.aboutPanelOpen : ''}`}
          aria-hidden={!open}
        >
          <p>Nooscope is an independent publishing company focussing on the publishing of unique book objects. Nooscope is interested in a wide range of subjects.</p>
        </div>
      </div>
    </>
  );
}
