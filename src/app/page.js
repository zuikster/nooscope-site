import TextPanel from '@/components/TextPanel';
import { AboutText } from '@/components/AboutDrawer';
import BookSlideshow from '@/components/BookSlideshow';
import { BOOKS } from '@/data/books';
import styles from '@/styles/HomeSlideshow.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.mobileOnly}>
        <BookSlideshow book={BOOKS[0]} mobile showClose={false} />
      </div>
      <div className={styles.textOverlay}>
        <div className={styles.glassPane}>
          <TextPanel />
          <div className={styles.aboutSection}>
            <AboutText />
          </div>
        </div>
      </div>
    </div>
  );
}
