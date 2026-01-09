import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import FooterSection from './components/FooterSection/FooterSection.jsx';
import Home from './pages/Home.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';


function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />       
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;









