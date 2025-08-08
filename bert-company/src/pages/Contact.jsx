import { motion } from "framer-motion";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Звʼязатися з нами</h2>
        <p className="contact-subtitle">Залиште заявку або напишіть нам напряму</p>

        <form className="contact-form">
          <input type="text" placeholder="Ваше імʼя" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Повідомлення" rows="5" required />
          <button type="submit">Надіслати</button>
        </form>

        <div className="contact-info">
          <p>📞 +38 (044) 123 45 67</p>
          <p>✉️ hello@bertcompany.com</p>
          <p>📍 Київ, Україна</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
