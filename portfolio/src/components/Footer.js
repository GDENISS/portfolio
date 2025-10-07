// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content"id='footer'>
        <div className="footer-section about">
          <h2>Reach Out 😁</h2>
          <p>
          Let's collaborate and explore my completed and ongoing projects. Reach out for insightful discussions and impactful partnerships!
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">AboutMe</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: githinji.mwangi10@gmail.com</p>
          <p>Phone: +254740175498</p>
          <div className="social-media">
            <a href="www.linkedin.com/in/mwangi-githinji-89b621234" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/GDENISS" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/@qaddeno" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mwangi DG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
