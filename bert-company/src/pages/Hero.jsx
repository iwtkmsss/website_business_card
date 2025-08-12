import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">BERT Company</h1>
        <p className="hero-subtitle">
          IT ORGANISATION — У майбутнє разом.
        </p>

        <p className="hero-description">
          Ми робимо нові технології доступними та зручними для компаній і користувачів, що прагнуть розвитку.
          Пошук, вибір та втілення у практичну сферу влучних рішень — завдання, яким ми опанували і виконуємо понад 10 років.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Хмарний сервіс</button>
          <button className="btn-secondary">Наші послуги</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
