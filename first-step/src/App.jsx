import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Learned from './components/Learned.jsx';
import Posts from './pages/Posts.jsx';
import Clock from './components/ForTest.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learned" element={<Learned />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/Clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;