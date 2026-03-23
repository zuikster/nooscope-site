'use client';

import { useState } from 'react';
import styles from '@/styles/Nav.module.css';

export default function Nav({ onBooksClick, booksOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleBooksClick() {
    setMenuOpen(false);
    onBooksClick();
  }

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
        <li>
          <button
            className={`${styles.navBtn} ${booksOpen ? styles.active : ''}`}
            onClick={handleBooksClick}
            type="button"
            aria-pressed={booksOpen}
          >
            Books
          </button>
        </li>
      </ul>
    </nav>
  );
}
