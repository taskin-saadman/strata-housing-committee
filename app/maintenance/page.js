import Nav from '../../components/Nav';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <h1>Contact Us</h1>
      <form>
        <label>Maintenance type</label><br />
        <select>
          <option value="general">General</option>
          <option value="urgent">Urgent</option>
          <option value="emergency">Emergency</option>
        </select><br />
        <label>Contact method</label><br />
        <select>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="chat">Chat</option>
        </select><br />
        <label>Contact details</label><br />
        <input type="text" /><br />
        <label>Preferred contact time</label><br />
        <select>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select><br />
        <label>Name:</label><br />
        <input type="text" /><br />
        <label>Message:</label><br />
        <textarea rows="4" /><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
