import Nav from '../../components/Nav';

export default function DocumentsPage() {
  return (
    <main>
      <Nav />
      <h1>Documents</h1>
      <ul>
        <li>
          <a href="/bylaws.pdf" target="_blank" rel="noopener noreferrer">
            View Building By-laws
          </a>
        </li>
      </ul>
    </main>
  );
}

