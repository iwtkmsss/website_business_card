import { Link } from "react-scroll";
import { FaTelegram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">BERT</div>

        <ul className="footer-nav">
          <li><Link to="hero" smooth={true} duration={100} offset={-50}>Головна</Link></li>
          <li><Link to="services" smooth={true} duration={100} offset={-50}>Послуги</Link></li>
          <li><Link to="mission" smooth={true} duration={100} offset={-50}>Місія</Link></li>
        </ul>

        <div className="footer-contacts">
          <a href="mailto:contact@bertcompany.org">📧 contact@bertcompany.org</a>
          <p>📍 Київ, Україна</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BERT Company. Всі права захищені.
      </div>
    </footer>
  );
}

export default Footer;
