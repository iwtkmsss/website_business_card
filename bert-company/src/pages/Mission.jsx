import { motion } from "framer-motion";
import "../styles/Mission.css";

function Mission() {
  const blocks = [
    {
      title: "Наша місія",
      icon: "🎯",
      text: "Допомагати компаніям ефективно інтегрувати технології, будувати інфраструктуру та розвиватися в діджитал-сфері.",
    },
    {
      title: "Наше бачення",
      icon: "🌱",
      text: "Бути лідером у сфері хмарних рішень та цифрової трансформації, орієнтованим на результат і людину.",
    },
    {
      title: "Наші цінності",
      icon: "💡",
      text: "Надійність, інновації, відповідальність, відкритість до змін, підтримка та розвиток партнерських стосунків.",
    },
  ];

  return (
    <section className="mission" id="mission">
      <motion.div
        className="mission-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mission-title">Філософія компанії</h2>
        <p className="mission-subtitle">Що ми несемо у світ через свою діяльність</p>

        <div className="mission-grid">
          {blocks.map((item, i) => (
            <motion.div
              key={i}
              className="mission-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mission-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Mission;
