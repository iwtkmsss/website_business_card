import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

      <div className="overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="hero-subtitle">IT ORGANISATION</h2>
        <h1 className="hero-title">BERT Company</h1>
        <h3 className="hero-slogan">У майбутнє разом.</h3>

        <p className="hero-text">
          Ми робимо нові технології доступними та зручними для компаній і
          користувачів, що прагнуть розвитку. Пошук, вибір та втілення у
          практичну сферу влучних рішень — завдання, яким ми опанували і виконуємо
          понад 10 років.
        </p>

        <div className="hero-buttons">
          <button className="btn-light">Хмарний сервіс</button>
          <button className="btn-light">Наші послуги</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
