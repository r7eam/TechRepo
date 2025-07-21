import React from 'react';
import { Link } from 'react-router-dom'; 

function Services() { 
  return (
    <div className="services-body"> 
      <header className="services-header">
        <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" /> {/* Self-closing tag */}
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/learned"><button>What I Learned</button></Link>
        </nav>
      </header>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Learn to build responsive and modern websites.</p>
        </div>
        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>Hands-on training to create Android & iOS apps.</p>
        </div>
        <div className="service-card">
          <h3>Tech Workshops</h3>
          <p>Interactive sessions with industry professionals.</p>
        </div>
      </div>

      <footer className="services-footer">
        <nav>
          <Link to="/about"><button>About</button></Link>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </div>
  );
}

export default Services;