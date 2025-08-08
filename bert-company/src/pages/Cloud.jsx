import { motion } from "framer-motion";
import "../styles/Cloud.css";

function Cloud() {
  return (
    <section className="cloud" id="cloud">
      <div className="cloud-overlay" />

      <motion.div
        className="cloud-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="cloud-title">BERT Cloud</h2>
        <p className="cloud-text">
          Хмарні рішення, що дозволяють компаніям зберігати, обробляти та
          масштабувати дані в реальному часі. Надійність, безпека та швидкість
          — основа наших сервісів.
        </p>

        <div className="cloud-features">
          <div className="feature">🔐 Безпечне зберігання</div>
          <div className="feature">⚡ Висока доступність</div>
          <div className="feature">🌍 Миттєвий доступ з будь-якої точки світу</div>
        </div>
      </motion.div>
    </section>
  );
}

export default Cloud;
