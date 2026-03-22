'use client';

import { useState } from 'react';
import Background from './Background';
import Grid from './Grid';
import Logo from './Logo';
import Nav from './Nav';
import AboutDrawer from './AboutDrawer';
import TextPanel from './TextPanel';
import BooksPanel from './BooksPanel';
import BookSlideshow from './BookSlideshow';
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
        {!booksOpen && <AboutDrawer />}
        {booksOpen
          ? <BooksPanel open onBookSelect={handleBookSelect} />
          : <TextPanel />}
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
      </div>
    </>
  );
}
