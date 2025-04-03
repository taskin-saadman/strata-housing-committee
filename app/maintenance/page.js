import Nav from '../../components/Nav';
import './page.css';

export default function ContactPage() {
  const clientKey = process.env.client_key;
  const userToken = process.env.user_token;

  return (
    <main>
      <Nav />
      <h1>Lodge a Maintenance Request</h1>
      <h2>
        <form>
          <label>Maintenance type</label>
          <select>
            <option value="general">General</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select><br />
          <label>Contact method</label>
          <select>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="chat">Chat</option>
          </select><br />
          <label>Contact details</label>
          <input type="text" /><br />
          <label>Preferred contact time</label>
          <select>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select><br />
          <label>Name:</label>
          <input type="text" /><br />
          <label>Message:</label>
          <textarea rows="4" /><br />
          <button type="submit">SUBMIT REQUEST</button>
        </form>
      </h2>
    </main>
  );
}
