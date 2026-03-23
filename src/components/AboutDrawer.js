'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from '@/styles/AboutDrawer.module.css';

export function AboutText() {
  return (
    <>
      <p><i>Nooscope</i> publishes books that center on meditative, introspective visual narratives. While rooted in documentary practice, <i>Nooscope</i> embraces ambiguity, symbolic density and open-ended storytelling. The press produces socially aware, philosophically inclined art objects that operate at the intersection of history, image-making techniques and personal narrative.</p>

      <p><i>Nooscope</i> sees each book as a narrative sculpture. The physical form—its materials, construction, and presence—reflects and interrogates the content it carries, questioning the relationship between medium and meaning, as well as the conditions under which the work is produced and distributed. Though cardboard and paper remain foundational, <i>Nooscope</i> extensively experiments with unconventional materials such as textiles, wood, glass, and iron. Committed to pushing the boundaries of the photobook medium, <i>Nooscope</i> produces genre-breaking objects that sometimes cross into performance or sculpture, like the hybrid of a photobook and a chair. <i>Nooscope</i> books are published in very limited, numbered editions and are distributed directly by the artists.</p>

      <p><i>Nooscope</i> is a collaboration between book designer <i>Teun van der Heijden</i> and artist and visual researcher <i>Alexey Yurenev</i>.</p>

      <p><i>Teun van der Heijden</i> is a graphic designer and co-founder of Heijdens Karwei, a graphic design agency based in Amsterdam that is known for award winning photobooks. Next to running Heijdens Karwei Teun is professor Visual Design and Hybrid media at the LUCA School of Arts in Genk, Belgium and a faculty member of ICP, the International Center of Photography in New York and teaches at the MAPS program [Master Photography and Society] at the KABK [Royal Academy of Arts] in The Hague.</p>

      <p>Together with his partner Sandra van der Doelen Teun teaches photo book workshops and masterclasses all over the world.</p>

      <p>Teun is author of &lsquo;Of Simple Cells and Visual Associations in Photobook Editing&rsquo; an article that is featured in the international open-access peer-reviewed journal Trans Asia Photography Vol. 14, published by Duke University Press.</p>

      <p><i>Alexey Yurenev</i> is an artist, visual researcher, and educator whose work explores the intersections of memory, technology, and production of knowledge. He is Adjunct Faculty in the visual arts MFA Program at Columbia University and a faculty member at the International Center of Photography (ICP). His work has been exhibited internationally at venues including FOAM (Amsterdam), Hangar (Brussels), MOMus Modern/Costakis Collection (Thessaloniki), and Rencontres d&rsquo;Arles. He is the author of the book Seeing Against Seeing (2025).</p>

      <p>Yurenev&rsquo;s projects have been featured in The New York Times, National Geographic, Literary Hub, and Topic. His work is held in collections such as Johns Hopkins University Special Collections, FOAM Museum, and the Anti-Krieg Museum. He has been recognized by Photographer of the Year International and received the Silurian Society Award for excellence in arts and culture journalism. He has also been nominated for an Emmy Award and the FOAM Paul Huf Award.</p>

      <p>He is the co-founder of FOTODEMIC, an online platform for innovative visual strategies, and the founder and executive producer of Living Room, a monthly public program for ICP alumni.</p>

      <p>For inquiries:<br />nooscope.press@gmail.com</p>
      <div style={{ height: '3rem' }} aria-hidden="true" />
    </>
  );
}

export default function AboutDrawer({ hidden }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAboutRoute = pathname === '/about';
  const [open, setOpen] = useState(isAboutRoute);
  const panelRef = useRef(null);

  /* Sync open state with route */
  useEffect(() => {
    setOpen(isAboutRoute);
  }, [isAboutRoute]);

  useEffect(() => {
    if (open && panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty('--y-line', `${Math.ceil(rect.right) + 40}px`);
    } else {
      document.documentElement.style.removeProperty('--y-line');
    }
  }, [open]);

  if (hidden) return null;

  function handleTrigger() {
    if (open) {
      router.push('/');
    } else {
      router.push('/about');
    }
  }

  return (
    <>
      <div className={`${styles.fill} ${open ? styles.fillOpen : ''}`} aria-hidden="true" />

      <div className={styles.container}>
        <button
          className={styles.trigger}
          onClick={handleTrigger}
          aria-expanded={open}
          type="button"
        >
          About
        </button>

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
