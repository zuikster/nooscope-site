'use client';

import { usePathname } from 'next/navigation';
import Background from './Background';
import Grid from './Grid';
import Logo from './Logo';
import Nav from './Nav';
import AboutDrawer from './AboutDrawer';
import styles from '@/styles/page.module.css';

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isBooks = pathname.startsWith('/books');

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Background white={isBooks} />
      <Grid />

      {/* Mobile header (hidden on desktop via CSS) */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav />
      </header>

      {/* Desktop chrome: Logo + Nav + About trigger (hidden on mobile via CSS) */}
      <div className={styles.desktopChrome}>
        <Logo />
        <Nav />
        <AboutDrawer hidden={isBooks} />
      </div>

      {/* Main content — flows on mobile, positioned absolutely per-component on desktop */}
      <main id="main-content" className={styles.main}>
        {children}
      </main>
    </>
  );
}
