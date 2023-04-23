import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject) {
      emailjs
        .sendForm(
          "service_iuxbb5j",
          "template_6ngs69n",
          form.current,
          "1Hg1Bii3Jc3WOYmsG"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({ name: "", email: "", subject: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-text">Contact Me</h2>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Subject:</label>
        <textarea
          type="textarea"
          id="subject"
          name="subject"
          placeholder="Type somethining here..."
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <div className="contact-submit-btn">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default Contact;
