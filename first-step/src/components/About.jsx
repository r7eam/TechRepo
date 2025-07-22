import { Link } from 'react-router-dom'; 

function About() { 
  return (
    <div className="about-body"> 
      <header className="about-header">
        <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" /> {/* Self-closing tag */}
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/learned"><button>What I Learned</button></Link>
        </nav>
      </header>

      <div className="content">
        <h2>About Tech Hub</h2>
        <p>Tech Hub is a learning platform that helps students and professionals grow their technical skills. We offer courses, projects, and a vibrant community to support your learning journey.</p>
      </div>

      <footer className="about-footer">
        <nav>
          <Link to="/about"><button>About</button></Link>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </div>
  );
}

export default About;