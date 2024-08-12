import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">Brandmark</div>
    <nav>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <button className="cta">Get Started</button>
  </header>
);

export default Header;
