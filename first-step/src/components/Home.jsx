import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() { 
  return (
    <div className="home-body"> 
      <header className="home-header">
        <div className="logo">
          <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" /> {/* Self-closing tag */}
        </div>
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/learned"><button>What I Learned</button></Link>
        </nav>
      </header>

      <div className="hero-section">
        <h1>Welcome to Tech Hub</h1>
        <p>Your Gateway to Technology Learning</p>
        <button className="join" style={{ color: 'rgb(255, 255, 255)' }}>Join Tech Hub</button>
      </div>

      <div className="main-content">
        <div className="card"><h3>🎓 Courses</h3><p>Learn programming and teach skills</p></div>
        <div className="card"><h3>🚀 Projects</h3><p>Build real-world applications</p></div>
        <div className="card"><h3>👥 Community</h3><p>Connect with tech enthusiasts</p></div>
      </div>

      <footer className="home-footer">
        <nav>
          <Link to="/about"><button>About</button></Link>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </div>
  );
}

export default Home;