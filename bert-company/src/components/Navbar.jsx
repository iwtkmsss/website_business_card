import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BERT</div>
      <ul className="navbar-menu">
        <li><Link to="hero" smooth={true} duration={100} offset={-50}>Головна</Link></li>
        <li><Link to="cloud" smooth={true} duration={100} offset={-50}>Хмара</Link></li>
        <li><Link to="services" smooth={true} duration={100} offset={-50}>Послуги</Link></li>
        <li><Link to="contact" smooth={true} duration={100} offset={-50}>Контакти</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
  