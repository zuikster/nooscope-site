import { AboutText } from '@/components/AboutDrawer';
import styles from '@/styles/AboutDrawer.module.css';

export default function AboutPage() {
  return (
    <div className={styles.mobileSheet}>
      <div className={styles.copy}>
        <AboutText />
      </div>
    </div>
  );
}
