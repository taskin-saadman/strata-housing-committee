'use client'
import Nav from '../../components/Nav';
import styles from './contact.module.css';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Normally here you would send the data to an API
    console.log('Form data:', formData)

    // Redirect to thank-you page
    router.push('/contact/thank-you')
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
