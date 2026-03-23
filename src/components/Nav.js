'use client';

import styles from '@/styles/Nav.module.css';

export default function Nav({ onBooksClick, booksOpen }) {
  return (
    <ul className={styles.nav}>
      {!booksOpen && (
        <li><a href="#">Store</a></li>
      )}
      <li>
        <button
          className={`${styles.navBtn} ${booksOpen ? styles.active : ''}`}
          onClick={onBooksClick}
          type="button"
          aria-pressed={booksOpen}
        >
          Books
        </button>
      </li>
    </ul>
  );
}
