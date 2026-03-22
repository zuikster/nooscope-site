'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/BookSlideshow.module.css';

export default function BookSlideshow({ book, onClose }) {
  const slidesRef = useRef(null);

  /* Reset scroll to top whenever a new book opens */
  useEffect(() => {
    if (slidesRef.current) slidesRef.current.scrollTop = 0;
  }, [book]);

  if (!book) return null;

  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Back to books list"
      >
        ←
      </button>

      <div className={styles.slides} ref={slidesRef}>
        {book.images.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`${book.title} — ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
