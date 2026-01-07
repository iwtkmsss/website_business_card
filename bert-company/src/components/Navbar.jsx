import { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? "is-open" : ""}`}>
      <div className="navbar-logo">
        BERT<span className="logo-sub">company</span>
      </div>
      <button
        className="navbar-toggle"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className="navbar-menu" onClick={closeMenu}>
        <li><Link to="hero" smooth={true} duration={100} offset={-50}>Головна</Link></li>
        <li><Link to="services" smooth={true} duration={100} offset={-50}>Послуги</Link></li>
        <li><Link to="mission" smooth={true} duration={100} offset={-50}>Місія</Link></li>
        <li><Link to="contact" smooth={true} duration={100} offset={-50}>Контакти</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
  
