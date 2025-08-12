import { motion } from "framer-motion";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Звʼяжіться з нами</h2>
        <p className="contact-subtitle">
          Ми відкриті до нових ідей, питань і співпраці.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Ваше ім’я" required />
          <input type="email" placeholder="Ваш Email" required />
          <textarea placeholder="Ваше повідомлення" rows="5" required />
          <button type="submit">Надіслати</button>
        </form>

        <div className="contact-info">
          <p>📧 hello@bertcompany.com</p>
          <p>📍 Київ, Україна</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
