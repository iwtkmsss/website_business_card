import { motion } from "framer-motion";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      title: "Інфраструктура",
      desc: "Хмарне середовище для стабільної та масштабованої роботи.",
      icon: "🖥️",
    },
    {
      title: "Безпека",
      desc: "Захист даних, сертифікати, багаторівнева авторизація.",
      icon: "🔐",
    },
    {
      title: "Автоматизація",
      desc: "Рішення, що зменшують ручну працю та підвищують ефективність.",
      icon: "⚙️",
    },
    {
      title: "Аналітика",
      desc: "Інструменти аналізу даних та візуалізації процесів.",
      icon: "📊",
    },
    {
      title: "Підтримка 24/7",
      desc: "Швидка допомога, моніторинг і супровід клієнтів.",
      icon: "📞",
    },
    {
      title: "Інтеграції",
      desc: "Звʼязок із вашими CRM, ERP та іншими платформами.",
      icon: "🔗",
    },
  ];

  return (
    <section className="services" id="services">
      <motion.div
        className="services-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="services-title">Наші послуги</h2>
        <p className="services-subtitle">
          Всі рішення для цифрового бізнесу — з одних рук.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
