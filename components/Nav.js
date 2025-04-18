import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <img src="../favicon.ico" alt="Favicon" className={styles.favicon} />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/documents" className={styles.navLink}>Documents</a>
        </li>
        <li className={styles.navItem}>
          <a href="/announcements" className={styles.navLink}>Announcements</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </li>
        <li className={styles.navItem}>
          <a href="/gallery" className={styles.navLink}>Gallery</a>
        </li>
        <li className={styles.navItem}>
          <a href="/maintenance" className={styles.navLink}>Maintenance</a>
        </li>
      </ul>
    </nav>
  );
}
