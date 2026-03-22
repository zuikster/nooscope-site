import styles from '@/styles/Nav.module.css';

export default function Nav() {
  return (
    <ul className={styles.nav}>
      <li><a href="#">Store</a></li>
      <li><a href="#">Books</a></li>
    </ul>
  );
}
