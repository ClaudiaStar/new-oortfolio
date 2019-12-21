import React, { useState } from "react";
import firebase from "../../lib/firestore";
import classes from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = (name, email, message) => {
    const db = firebase.firestore();
    db.collection("Contact Message")
      .doc(name)
      .set({
        name: name,
        email: email,
        message: message
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitMessage(name, email, message);
  };

  return (
    <main className={classes.Contact}>
      <h1>Talk to me.</h1>
      <h2>Feedback, ideas, questions, favors, anecdotes...</h2>
      <form className={classes.ContactForm}>
        <label for="name" className={classes.ContactFormLabel}>
          Your name:
        </label>
        <br />
        <input
          value={name}
          type="text"
          id="name"
          onChange={handleNameChange}
          className="inputField"
          size="54"
          name="name"
        />
        <br />
        <label for="email" className={classes.ContactFormLabel}>
          Your email:
        </label>
        <br />
        <input
          value={email}
          type="email"
          id="email"
          onChange={handleEmailChange}
          className="inputField"
          size="54"
          name="email"
        />
        <br />
        <label for="message" className={classes.ContactFormLabel}>
          Your message:
        </label>
        <br />
        <textarea
          value={message}
          type="text"
          id="message"
          onChange={handleMessageChange}
          className="textArea"
          rows="10"
          cols="50"
          name="message"
        />
        <br />
        <button
          onClick={handleSubmit}
          className="button-link"
          id="addItemButton"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
