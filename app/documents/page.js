import Nav from '../../components/Nav';
import styles from './documents.module.css';

export default function DocumentsPage() {
  return (
    <main className={styles.mainContainer}>
      <Nav />
      <h1 className={styles.header}>Documents</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            href="/bylaws.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Building By-laws
          </a>
        </li>
      </ul>
    </main>
  );
}

