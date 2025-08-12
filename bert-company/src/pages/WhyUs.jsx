import { motion } from "framer-motion";
import "../styles/WhyUs.css";

function WhyUs() {
  const reasons = [
    {
      title: "Досвід",
      desc: "10+ років у галузі технологій, понад 100 успішних проєктів.",
      icon: "🏆",
    },
    {
      title: "Індивідуальний підхід",
      desc: "Ми адаптуємо рішення під потреби кожного клієнта.",
      icon: "🎯",
    },
    {
      title: "Інновації",
      desc: "Ми використовуємо сучасні інструменти та методології.",
      icon: "🚀",
    },
    {
      title: "Підтримка 24/7",
      desc: "Наша команда завжди на зв'язку.",
      icon: "🕒",
    },
  ];

  return (
    <section className="why-us" id="why">
      <motion.div
        className="why-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="why-title">Чому саме ми?</h2>
        <p className="why-subtitle">Основні причини обрати BERT Company</p>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WhyUs;
