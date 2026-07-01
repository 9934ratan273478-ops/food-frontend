import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Send us your questions or feedback.
        </p>
      </div>

      <div className="contact-content">

        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Bhubaneswar, Odisha, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>foodnear@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Opening Hours</h3>
            <p>Mon - Sun</p>
            <p>10:00 AM - 11:00 PM</p>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;