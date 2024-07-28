import React from 'react';
import './Footer.css';

const Footer = ({ isDarkMode }) => (
  <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <p>mackey.solutions.com / glitch64.com</p>
  </footer>
);

export default Footer;
