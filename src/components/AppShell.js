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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  function toggleBooks() {
    setBooksOpen(o => !o);
    setAboutOpen(false);
    setSelectedBook(null);
  }

  function toggleAbout() {
    setAboutOpen(o => !o);
    setBooksOpen(false);
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
      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Background white={booksOpen} />
      <Grid />

      {/* Mobile layout */}
      <header className={styles.mobileHeader}>
        <Logo />
        <Nav
          onBooksClick={toggleBooks}
          booksOpen={booksOpen}
          onAboutClick={toggleAbout}
          aboutOpen={aboutOpen}
        />
      </header>
      <main id="main-content" className={styles.mobileMain}>
        {showSlideshow ? (
          <>
            <BookSlideshow book={selectedBook} onClose={handleSlideshowClose} mobile />
            <BookInfo book={selectedBook} />
          </>
        ) : booksOpen ? (
          <BooksPanel open onBookSelect={handleBookSelect} />
        ) : aboutOpen ? (
          <AboutDrawer mobile />
        ) : (
          <TextPanel />
        )}
      </main>

      {/* Desktop layout */}
      <div className={styles.ui} aria-label="Desktop layout">
        <header>
          <Logo />
          <Nav onBooksClick={toggleBooks} booksOpen={booksOpen} />
        </header>
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
