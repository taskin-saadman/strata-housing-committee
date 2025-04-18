'use client';
import Nav from '../../components/Nav';
import './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MaintenanceRequestPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    unit: '',
    issue: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Maintenance request:', formData);
    router.push('/maintenance/thank-you');
  };

  return (
    <main>
      <Nav />
      <h1 className="contactHeading">Submit Maintenance Request</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="container">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="unit"
            placeholder="Unit Number"
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="issue"
            placeholder="Describe the issue"
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Send</button>
        </div>
      </form>
    </main>
  );
}
