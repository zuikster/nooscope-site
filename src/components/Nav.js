'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isBooks = pathname.startsWith('/books');
  const isAbout = pathname === '/about';

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        type="button"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
      </button>

      {/* Menu items */}
      <ul className={`${styles.list} ${menuOpen ? styles.listOpen : ''}`}>
        {!isBooks && (
          <li>
            <a
              href="https://buy.stripe.com/6oU28q3bp1qDg4q7Kgak008"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              Store
            </a>
          </li>
        )}
        <li>
          <Link
            href="/books"
            className={`${styles.navLink} ${isBooks ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Books
          </Link>
        </li>
        <li className={styles.mobileOnly}>
          <Link
            href="/about"
            className={`${styles.navLink} ${isAbout ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
