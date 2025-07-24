import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to="/about"><button>About</button></Link>
      </nav>
      <p>© 2025 Tech Hub</p>
    </footer>
  );
}

export default Footer;
