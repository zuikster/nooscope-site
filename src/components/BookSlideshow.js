'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/BookSlideshow.module.css';

export default function BookSlideshow({ book, mobile = false }) {
  const slidesRef = useRef(null);

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
      <Link
        href="/books"
        className={styles.close}
        aria-label="Back to books list"
      >
        ←
      </Link>

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
