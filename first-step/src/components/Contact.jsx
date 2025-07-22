import { Link } from 'react-router-dom'; 

function Contact() { 
  return (
    <div className="contact-body"> 
      <header className="contact-header">
        <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" /> {/* Self-closing tag */}
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/learned"><button>What I Learned</button></Link>
        </nav>
      </header>

      <div className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <input type="submit" value="Send Message" />
        </form>
        <p>Email: aabdalrheem5@gmail.com | Phone: +773-850-0000</p>
      </div>

      <footer className="contact-footer">
        <nav>
          <Link to="/about"><button>About</button></Link>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </div>
  );
}

export default Contact;