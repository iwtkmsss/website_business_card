import { Link } from 'react-scroll';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">BERT</div>

        <ul className="footer-nav">
          <li><Link to="hero" smooth={true} duration={100} offset={-50}>Головна</Link></li>
          <li><Link to="cloud" smooth={true} duration={100} offset={-50}>Хмара</Link></li>
          <li><Link to="services" smooth={true} duration={100} offset={-50}>Послуги</Link></li>
          <li><Link to="contact" smooth={true} duration={100} offset={-50}>Контакти</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTelegramPlane /></a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BERT Company. Всі права захищено.
      </div>
    </footer>
  );
}

export default Footer;
