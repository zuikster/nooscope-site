import TextPanel from '@/components/TextPanel';
import BookSlideshow from '@/components/BookSlideshow';
import { BOOKS } from '@/data/books';
import styles from '@/styles/HomeSlideshow.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.mobileOnly}>
        <BookSlideshow book={BOOKS[0]} showClose={false} />
      </div>
      <TextPanel />
    </>
  );
}
