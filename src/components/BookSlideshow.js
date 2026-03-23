'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/BookSlideshow.module.css';

export default function BookSlideshow({ book, onClose, mobile = false }) {
  const slidesRef = useRef(null);

  /* Reset scroll to top whenever a new book opens */
  useEffect(() => {
    if (slidesRef.current) slidesRef.current.scrollTop = 0;
  }, [book]);

  if (!book) return null;

  const containerClass = mobile
    ? styles.containerMobile
    : styles.container;

  const slidesClass = mobile
    ? styles.slidesMobile
    : styles.slides;

  const slideClass = mobile
    ? styles.slideMobile
    : styles.slide;

  return (
    <div className={containerClass}>
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Back to books list"
      >
        ←
      </button>

      <div className={slidesClass} ref={slidesRef}>
        {book.images.map((src, i) => (
          <div key={i} className={slideClass}>
            <img src={src} alt={`${book.title} — ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
