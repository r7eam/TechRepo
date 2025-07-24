import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Contact() { 
  return (
    <div className="contact-body"> 
      <Header />

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

      <Footer />
    </div>
  );
}

export default Contact;