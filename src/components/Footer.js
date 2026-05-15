import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <span className="logo-bracket">{'<'}</span>
        AM
        <span className="logo-bracket">{'/>'}</span>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Amit Mulmule · Built with React · Bhopal, India
      </p>
      <div className="footer-links">
        <a href="mailto:amitmulmule4@gmail.com">Email</a>
        <a href="https://linkedin.com/in/amit-mulmule-5266011b2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="tel:+919067550461">Call</a>
      </div>
    </div>
  </footer>
);

export default Footer;
