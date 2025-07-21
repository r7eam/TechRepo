import React from 'react';
import { Link } from 'react-router-dom'; 

function Learned() { 
  return (
    <div className="learned-body">
      <header className="learned-header">
        <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" /> {/* Self-closing tag */}
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/learned"><button>What I Learned</button></Link>
        </nav>
      </header>

      <div className="content">
        <h2>What I Learned - Tech Hub</h2>
        <div className="week-section">
          <h3>Week 1 and 2</h3>
          <ul>
            <li><b>JavaScript:</b> arrays, filtering, object conversion, string/char splitting</li>
            <li><b>React:</b> components, hooks, file setup</li>
            <li><b>GitHub:</b> repo creation, pushing via GitHub Desktop</li>
            <li><b>Vite & SWC:</b> fast build tools & transpiler basics</li>
            <li><b>Web:</b> GET vs POST, HTML tags, internal CSS centering</li>
          </ul>
        </div>
        <div className="week-section">
          <h3>Week 3</h3>
          <ul>
            <li><b>React:</b> some hooks useState and useEffect and useContext</li>
          </ul>
        </div>
      </div>

      <footer className="learned-footer">
        <nav>
          <Link to="/about"><button>About</button></Link>
        </nav>
        <p>© 2025 Tech Hub</p>
      </footer>
    </div>
  );
}

export default Learned;