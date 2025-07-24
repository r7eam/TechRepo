import Header from './Header.jsx';
import Footer from './Footer.jsx';

function About() { 
  return (
    <div className="about-body"> 
      <Header />

      <div className="content">
        <h2>About Tech Hub</h2>
        <p>Tech Hub is a learning platform that helps students and professionals grow their technical skills. We offer courses, projects, and a vibrant community to support your learning journey.</p>
      </div>

      <Footer />
    </div>
  );
}

export default About;