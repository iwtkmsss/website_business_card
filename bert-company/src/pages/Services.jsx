import { motion } from "framer-motion";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      title: "Інфраструктура",
      desc: "Повне хмарне середовище для будь-якого бізнесу.",
      icon: "💻",
    },
    {
      title: "Безпека",
      desc: "Захист даних на всіх рівнях та резервне копіювання.",
      icon: "🛡️",
    },
    {
      title: "Аналітика",
      desc: "Інтелектуальна обробка даних та автоматизація рішень.",
      icon: "📊",
    },
  ];

  return (
    <section className="services" id="services">
      <motion.div
        className="services-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="services-title">Наші послуги</h2>

        <div className="services-cards">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
