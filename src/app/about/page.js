import { AboutText } from '@/components/AboutDrawer';
import styles from '@/styles/AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.sheet}>
      <div className={styles.copy}>
        <AboutText />
      </div>
    </div>
  );
}
