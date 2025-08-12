import { motion } from "framer-motion";
import "../styles/Features.css";

function Features() {
  const features = [
    {
      title: "Гнучка інфраструктура",
      desc: "Наші системи масштабуються разом з вашим бізнесом без втрати якості або продуктивності.",
      image: "🧩",
      reverse: false,
    },
    {
      title: "Інтеграції без меж",
      desc: "Інтегруємося з CRM, ERP, AI, хмарними сервісами — швидко та надійно.",
      image: "🔗",
      reverse: true,
    },
    {
      title: "Безпека понад усе",
      desc: "Багаторівнева авторизація, аудит доступу та постійний моніторинг — стандарт нашої роботи.",
      image: "🛡️",
      reverse: false,
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-inner">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={`feature-row ${f.reverse ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-text">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
            <div className="feature-image">
              <span className="feature-emoji">{f.image}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
