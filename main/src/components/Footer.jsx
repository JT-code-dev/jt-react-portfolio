import React from 'react';
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Jen Thompson | All Rights Reserved</p>
      <div className="footer-links">
        <a 
          href="https://linkedin.com/in/jennifer-thompson-70809b159/din-username" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/JT-code-dev" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

