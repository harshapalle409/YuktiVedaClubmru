import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink for active link styling
import './navbarStyles.css';
import logo from '../images/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar_unique_wrapper">
      <div className='navber-logo-and-name'>
        <img className='navber-logo-image' src={logo} alt='YuktiVeda_Club_logo'/>
        <div className="navbar_unique_logo">
          YUKTI VEDA CLUB
          </div>
         </div>
      <div
        className="navbar_unique_toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <ul className={`navbar_unique_links ${menuOpen ? 'show' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/about_us" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}> ABOUT US</NavLink></li>
        <li><NavLink to="/initiatives" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>INITIATIVES</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>GALLERY</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>CONTACT</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
