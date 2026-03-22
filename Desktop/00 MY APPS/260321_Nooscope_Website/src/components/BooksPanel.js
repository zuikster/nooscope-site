import styles from '@/styles/BooksPanel.module.css';

const DESC =
  "is an artist book created by Alexey Yurenev in collaboration with designer Teun van der Heijden and the Anti-Kriegs-Museum in Berlin. It is one of several outcomes of Silent Hero, a visual research project and historical investigation into Yurenev's grandfather's unspoken experience during World War II.";

export const BOOKS = [
  {
    id: 1,
    title: 'Seeing Against Seeing',
    thumb: '/books/book-1-thumb.jpg',
    description: DESC,
    images: ['/books/sas-1.jpg', '/books/sas-2.jpg', '/books/sas-3.jpg'],
  },
];

export default function BooksPanel({ open, onBookSelect }) {
  if (!open) return null;

  return (
    <div className={styles.panel}>
      <ul className={styles.list}>
        {BOOKS.map((book) => (
          <li key={book.id} className={styles.item}>
            <button
              className={styles.itemBtn}
              onClick={() => onBookSelect && onBookSelect(book)}
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
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
