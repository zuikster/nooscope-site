'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getBookBySlug } from '@/data/books';
import BookSlideshow from '@/components/BookSlideshow';
import BookInfo from '@/components/BookInfo';

export default function BookDetailPage() {
  const { slug } = useParams();
  const book = getBookBySlug(slug);

  /* Expand left quadrant on desktop when viewing book detail */
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--y-line', 'calc(var(--y-line-base) + 20%)');
    return () => root.style.removeProperty('--y-line');
  }, []);

  if (!book) return null;

  return (
    <>
      <BookSlideshow book={book} mobile />
      <BookInfo book={book} />
    </>
  );
}
