'use client';
import Nav from '../../components/Nav';
import styles from './contact.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally here you would send the data to an API
    console.log('Form data:', formData);

    // Redirect to thank-you page
    router.push('/contact/thank-you');
  };

  return (
    <main>
      <Nav />
      <h1 className={styles.contactHeading}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <br />
        <label>Message:</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          onChange={handleChange}
          required
        />
        <br />
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

      {/* New Section for Address */}
      <div className={styles.officeSection}>
        <strong>OUR OFFICE</strong>
        <p>123/A, Carslaw Avenue, Darlington</p>
        <p>ProfessionalismLand, NSW 1111</p>
      </div>
    </main>
  );
}
