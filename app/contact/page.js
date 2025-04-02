import Nav from '../../components/Nav';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label><br />
        <input type="text" /><br />
        <label>Message:</label><br />
        <textarea rows="4" /><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
