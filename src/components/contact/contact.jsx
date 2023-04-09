import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
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
          setName("");
          setEmail("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-text">Contact Me</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="subject">Subject:</label>
        <textarea
          type="textarea"
          id="subject"
          name="subject"
          placeholder="Type somethining here..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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
