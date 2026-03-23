'use client';

import { useState, useEffect } from 'react';
import Background from './Background';
import Grid from './Grid';
import Logo from './Logo';
import Nav from './Nav';
import AboutDrawer from './AboutDrawer';
import TextPanel from './TextPanel';
import BooksPanel from './BooksPanel';
import BookSlideshow from './BookSlideshow';
import BookInfo from './BookInfo';
import styles from '@/styles/page.module.css';

export default function AppShell() {
  const [booksOpen, setBooksOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  function toggleBooks() {
    setBooksOpen(o => !o);
    setSelectedBook(null);
  }

  function handleBookSelect(book) {
    setSelectedBook(book);
  }

  function handleSlideshowClose() {
    setSelectedBook(null);
  }

  const showSlideshow = booksOpen && selectedBook;

  /* Expand left quadrant by 20vw when in book detail state */
  useEffect(() => {
    const root = document.documentElement;
    if (showSlideshow) {
      root.style.setProperty('--y-line', 'calc(var(--y-line-base) + 20%)');
    } else {
      root.style.removeProperty('--y-line');
    }
    return () => root.style.removeProperty('--y-line');
  }, [showSlideshow]);

  return (
    <>
      <Background white={booksOpen} />
      <Grid />

      {/* Mobile layout */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav onBooksClick={toggleBooks} booksOpen={booksOpen} />
      </header>
      <main className={styles.mobileMain}>
        {showSlideshow ? (
          /* Book detail: images stacked, text below */
          <>
            <BookSlideshow book={selectedBook} onClose={handleSlideshowClose} mobile />
            <BookInfo book={selectedBook} />
          </>
        ) : booksOpen ? (
          <BooksPanel open onBookSelect={handleBookSelect} />
        ) : (
          <>
            <AboutDrawer />
            <TextPanel />
          </>
        )}
      </main>

      {/* Desktop layout */}
      <div className={styles.ui}>
        <Logo />
        <Nav onBooksClick={toggleBooks} booksOpen={booksOpen} />
        <AboutDrawer hidden={booksOpen} />
        <TextPanel hidden={booksOpen} />
        {!showSlideshow && (
          <BooksPanel open={booksOpen} onBookSelect={handleBookSelect} />
        )}
        <BookSlideshow book={selectedBook} onClose={handleSlideshowClose} />
        <BookInfo book={selectedBook} />
      </div>
    </>
  );
}
