import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Відео на весь блок */}
      <video className="hero-bg" autoPlay muted loop playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Внутрішня тінь по 4-х сторонах (віньєтка) */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* Текст зверху відносно тіней */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="hero-title">BERT Company</h1>
        <p className="hero-subtitle">IT ORGANISATION — У майбутнє разом.</p>

        <p className="hero-description">
          Ми робимо нові технології доступними та зручними для компаній і
          користувачів, що прагнуть розвитку. Пошук, вибір та втілення у
          практичну сферу влучних рішень — завдання, яким ми володіємо і
          успішно виконуємо понад 10 років.
        </p>

        <div className="hero-actions">
          <Link
            to="services"
            smooth
            duration={150}
            offset={-50}
            className="btn-light"
            role="button"
          >
            Наші послуги
          </Link>

          <Link
            to="mission"
            smooth
            duration={150}
            offset={-50}
            className="btn-outline"
            role="button"
          >
            Наша місія
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
