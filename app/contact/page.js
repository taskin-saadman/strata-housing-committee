import Nav from '../../components/Nav';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <h1 className={styles.contactHeading}>Contact Us</h1>
      <form className={styles.contactForm}>
        <label>Name:</label><br />
        <input type="text" /><br />
        <label>Message:</label><br />
        <textarea rows="4" /><br />
        <button type="submit">Send</button>
      </form>
      <iframe
        className={styles.mapIframe}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.489870680648!2d151.1866973152108!3d-33.88879898064657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d4c2b8b5b3%3A0x7c6b8b8b8b8b8b8b!2sThe%20University%20of%20Sydney!5e0!3m2!1sen!2sau!4v1614031234567!5m2!1sen!2sau"
        width="300"
        height="200"
        allowFullScreen=""
        loading="lazy"
        title="University of Sydney Location"
      ></iframe>
    </main>
  );
}
