import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Home() { 
  return (
    <div className="home-body"> 
      <Header />

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

      <Footer />
    </div>
  );
}

export default Home;