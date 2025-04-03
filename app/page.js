import Nav from '../components/Nav';
import styles from './home/home.module.css';
import dotenv from 'dotenv';

dotenv.config();

export default function HomePage() {
  return (
    <main>
      <Nav />
      <div className={styles.bannerContainer}>
        <img 
          src="/committee.jpeg" 
          alt="Our Committee" 
          className={styles.bannerImage} 
        />
        <h1 className={styles.bannerText}>
          WELCOME TO THE STRATA MANAGEMENT WEBSITE
        </h1>
      </div>
      <section className={styles.pageDescriptions}>
        <h2>
          EXPLORE OUR PAGES
        </h2>
        <ul>
          <li>
            <a href="/documents" className={styles.link}>
              <strong>Documents:</strong> Learn more about the bylaws.
            </a>
          </li>
          <li>
            <a href="/announcements" className={styles.link}>
              <strong>Announcements:</strong> Access details of important announcements.
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.link}>
              <strong>Contact:</strong> Contact us regarding any queries or suggestions.
            </a>
          </li>
          <li>
            <a href="/gallery" className={styles.link}>
              <strong>Gallery:</strong> Pictures of our building.
            </a>
          </li>
          <li>
            <a href="/maintenance" className={styles.link}>
              <strong>Maintenance:</strong> Lodge a maintenance request.
            </a>
          </li>
        </ul>
      </section>
      <div className={styles.mainContent}>
        <p className={styles.mainContentText}>
          <i>This is the central website for owners and residents of the building.</i>
        </p>
      </div>
    </main>
  );
}

