import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Initiatives from './components/Initiatives';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home1 from './components/Home1';
import ScrollToTop from './components/ScrollToTop';
import Registrationpage from './components/Registrationpage';
import Location from './components/Location';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* <div style={{ padding: '20px' }}> */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registration" element={<Registrationpage />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      {/* </div> */}
      <Footer/>
    </Router>
  );
};

export default App;
