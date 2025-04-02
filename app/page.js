import Nav from '../components/Nav';
import styles from './home/home.module.css';

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
          Welcome to the Strata Management Portal
        </h1>
      </div>
      <div className={styles.mainContent}>
        <p className={styles.mainContentText}>
          This is the central website for owners and residents of the building.
        </p>
      </div>
    </main>
  );
}

