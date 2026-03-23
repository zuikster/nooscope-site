'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/AboutDrawer.module.css';

function AboutText() {
  return (
    <>
      <p>Nooscope publishes books that center on meditative, introspective visual narratives. While rooted in documentary practice, Nooscope embraces ambiguity, symbolic density and open-ended storytelling. The press produces socially aware, philosophically inclined art objects that operate at the intersection of history, image-making techniques and personal narrative. Nooscope sees each book as a narrative sculpture. The physical form—its materials, construction, and presence—reflects and interrogates the content it carries, questioning the relationship between medium and meaning, as well as the conditions under which the work is produced and distributed. Though cardboard and paper remain foundational, Nooscope extensively experiments with unconventional materials such as textiles, wood, glass, and iron. Committed to pushing the boundaries of the photobook medium, Nooscope produces genre-breaking objects that sometimes cross into performance or sculpture, like the hybrid of a photobook and a chair. Nooscope books are published in very limited, numbered editions and are distributed directly by the artists.</p>

      <p>Nooscope is a collaboration between book designer Teun van der Heijden and artist and visual researcher Alexey Yurenev</p>

      <p>Teun van der Heijden is a graphic designer and co-founder of Heijdens Karwei, a graphic design agency based in Amsterdam that is known for award winning photobooks.</p>

      <p>Next to running Heijdens Karwei Teun is professor Visual Design and Hybrid media at the LUCA School of Arts in Genk, Belgium and a faculty member of ICP, the International Center of Photography in New York and teaches at the MAPS program [Master Photography and Society] at the KABK [Royal Academy of Arts] in The Hague.</p>

      <p>Together with his partner Sandra van der Doelen Teun teaches photo book workshops and masterclasses all over the world.</p>

      <p>Teun is author of &lsquo;Of Simple Cells and Visual Associations in Photobook Editing&rsquo; an article that is featured in the international open-access peer-reviewed journal Trans Asia Photography Vol. 14, published by Duke University Press.</p>

      <p>Alexey Yurenev is an artist, visual researcher, and educator whose work explores the intersections of memory, technology, and production of knowledge. He is Adjunct Faculty in the visual arts MFA Program at Columbia University and a faculty member at the International Center of Photography (ICP). His work has been exhibited internationally at venues including FOAM (Amsterdam), Hangar (Brussels), MOMus Modern/Costakis Collection (Thessaloniki), and Rencontres d&rsquo;Arles. He is the author of the book Seeing Against Seeing (2025).</p>

      <p>Yurenev&rsquo;s projects have been featured in The New York Times, National Geographic, Literary Hub, and Topic. His work is held in collections such as Johns Hopkins University Special Collections, FOAM Museum, and the Anti-Krieg Museum. He has been recognized by Photographer of the Year International and received the Silurian Society Award for excellence in arts and culture journalism. He has also been nominated for an Emmy Award and the FOAM Paul Huf Award.</p>

      <p>He is the co-founder of FOTODEMIC, an online platform for innovative visual strategies, and the founder and executive producer of Living Room, a monthly public program for ICP alumni.</p>
    </>
  );
}

export default function AboutDrawer({ hidden }) {
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

  if (hidden) return null;

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
            <AboutText />
          </div>
        </div>

        {/* Desktop: text panel 5% below and 3% right of trigger */}
        <div
          ref={panelRef}
          className={`${styles.aboutPanel} ${open ? styles.aboutPanelOpen : ''}`}
          aria-hidden={!open}
        >
          <AboutText />
        </div>
      </div>
    </>
  );
}
