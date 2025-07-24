import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/tech hub logo-01.png" alt="Tech Hub logo" width="180" height="180" />
      </div>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
        <Link to="/learned"><button>What I Learned</button></Link>
        <Link to="/posts"><button>Posts</button></Link>
      </nav>
    </header>
  );
}

export default Header;
