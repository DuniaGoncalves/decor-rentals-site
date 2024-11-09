import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Decor & Rentals</h2>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;