import Link from 'next/link';
import { BOOKS } from '@/data/books';
import styles from '@/styles/BooksPanel.module.css';

export default function BooksPanel() {
  return (
    <div className={styles.panel}>
      <ul className={styles.list}>
        {BOOKS.map((book) => (
          <li key={book.id} className={styles.item}>
            <Link
              href={`/books/${book.slug}`}
              className={styles.itemBtn}
              aria-label={`View ${book.title}`}
            >
              <div className={styles.thumb}>
                {book.thumb && <img src={book.thumb} alt={book.title} />}
              </div>
              <div className={styles.desc}>
                <p>
                  <em>{book.title}</em> {book.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
