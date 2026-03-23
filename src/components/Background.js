'use client';

import styles from '@/styles/Background.module.css';
import { BG_IMAGE } from '@/lib/assets';

export default function Background({ white }) {
  return (
    <div className={`${styles.bg} ${white ? styles.white : ''}`} aria-hidden="true">
      <img src={BG_IMAGE} alt="" />
    </div>
  );
}
