import styles from '@/styles/Background.module.css';
import { BG_IMAGE } from '@/lib/assets';

export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <img src={BG_IMAGE} alt="" />
    </div>
  );
}
