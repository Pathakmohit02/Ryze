import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Ryze</Link>
      </div>

      
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          onClick={() => setMenuOpen(false)} 
        >
          Home
        </NavLink>

        <NavLink
          to="/case-studies"
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          onClick={() => setMenuOpen(false)}
        >
          Case Studies
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>

         <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </NavLink>
      </div>

    
      <a
        href="https://app.get-ryze.ai/auth"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-link"
      >
        <button className="navbar-button">Book a Demo</button>
      </a>
    </nav>
  );
};

export default Navbar;












