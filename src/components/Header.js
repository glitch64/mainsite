import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isDarkMode, toggleDarkMode }) => (
  <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="logo-container">
      <img src={`${process.env.PUBLIC_URL}/glitchlogo.jpg`} alt="Mackey.Solutions Logo" />
      <span className="brand-name">G. A. Mackey</span>
    </div>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>	
  </header>
);

export default Header;

