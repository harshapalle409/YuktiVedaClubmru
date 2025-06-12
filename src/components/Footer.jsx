import React from 'react';
import './footerStyles.css';
import { FaLinkedin, FaInstagram, FaYoutube, } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
const Footer = () => {
  return (
    <footer className="club_footer__root">
      <div className="club_footer__top_section">
        <div className="club_footer__column">
            <img className='footer-logo-image' src={logo} alt='YuktiVeda_Club_logo'/>
        </div><div className="club_footer__column">
          <h4 className="club_footer__heading">OUR INITIATIVES</h4>
          <ul>
            <li>Inauguration: Yukti Veda Club</li>
            <li>Event: Startup Idea Pitch</li>
          </ul>
        </div>

        <div className="club_footer__column">
          <h4 className="club_footer__heading">USEFUL LINKS</h4>
          <ul>
  <li><Link to="/" className="footer_link">Home</Link></li>
  <li><Link to="/about_us" className="footer_link">About Us</Link></li>
  <li><Link to="/initiatives" className="footer_link">Initiatives</Link></li>
  <li><Link to="/gallery" className="footer_link">Gallery</Link></li>
  <li><Link to="/contact" className="footer_link">Contact Us</Link></li>
</ul>

        </div>

        <div className="club_footer__column">
          <h4 className="club_footer__heading">CONTACT</h4>
          <p><FaMapMarkerAlt className="club_footer__icon" />Main Block, Malla Reddy University, Maisammaguda,Hyderabad 500100 </p>
          <p><a href="mailto:support@yuktivedaclub.in" className="club_footer__email">
            <FaEnvelope className="club_footer__icon" />
            yuktivedaclub@mallareddyuniversity.ac.in
          </a>
          </p>
        </div>
      </div>

      <div className="club_footer__social_section">
  <p>Get connected with us on social networks:</p>
  <div className="club_footer__social_icons">
    <a href="https://www.linkedin.com/in/yuktivedaclub" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://www.instagram.com/yuktivedaclub" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://www.youtube.com/@yuktivedaclub" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  </div>
</div>

      <div className="club_footer__bottom_section">
        <p>© 2025 Copyright: Yukti Veda Club MRUH</p>
      </div>
    </footer>
  );
};

export default Footer;
