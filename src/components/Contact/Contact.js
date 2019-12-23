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
      <h1>Hey! </h1>
      <h2>Let's get in touch.</h2>
      <form className={classes.ContactForm}>
        <label className={classes.ContactFormLabel}>
          Your name:
          <br />
          <input
            value={name}
            type="text"
            id="name"
            onChange={handleNameChange}
            className={classes.InputField}
            size="54"
            name="name"
          />
        </label>

        <br />
        <label className={classes.ContactFormLabel}>
          Your email:
          <br />
          <input
            value={email}
            type="email"
            id="email"
            onChange={handleEmailChange}
            className={classes.InputField}
            size="54"
            name="email"
          />
        </label>

        <br />
        <label className={classes.ContactFormLabel}>
          Your message:
          <br />
          <textarea
            value={message}
            type="text"
            id="message"
            onChange={handleMessageChange}
            className={classes.InputField}
            rows="10"
            cols="50"
            name="message"
            placeholder="Dear Claudia,"
          />
        </label>

        <br />
        <div className={classes.ButtonDiv}>
          <button
            onClick={handleSubmit}
            className={classes.ContactSubmit}
            id="addItemButton"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
