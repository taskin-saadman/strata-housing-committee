import Nav from '../../components/Nav';
import styles from './announcements.module.css';

export default function AnnouncementsPage() {
  return (
    <main className={styles.mainContainer}>
      <Nav />
      <h1 className={styles.header}>Announcements</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            href="/announcement_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Announcement 1
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/announcement_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Announcement 2
          </a>
        </li>
      </ul>
    </main>
  );
}
