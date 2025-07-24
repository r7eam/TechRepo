import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Services() { 
  return (
    <div className="services-body"> 
      <Header />

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

      <Footer />
    </div>
  );
}

export default Services;