import React, { useState } from "react";
import firebase from "../../lib/firestore";
import classes from "./Contact.module.css";

import thanksImage from "../../assets/images/messagethanks.svg";
import decorationImage from "../../assets/images/separator.png";
import contactImage from "../../assets/images/contact.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

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
    if ((name, email, message)) {
      submitMessage(name, email, message);
      setSubmitClicked(true);
    } else {
      alert("Please fill out all fields");
    }
  };

  return submitClicked ? (
    <main className={classes.Contact}>
      <h3 className={classes.MessageThanks}>
        Your message has been succesfully sent and I will get back to you soon.
        Thanks for taking the time to reach out!
      </h3>
      <div className={classes.imageDiv}>
        <img
          src={thanksImage}
          alt="software-developer"
          className={classes.image}
        />
        <img
          src={decorationImage}
          alt="project separator"
          className={classes.Separator}
        />
      </div>
    </main>
  ) : (
    <main className={classes.Contact}>
      <div>
        <h1>Hey! </h1>
        <h2>Let's get in touch.</h2>
        <h3>What can I do to help?</h3>
        <div className={classes.imageDiv}>
          <img
            src={contactImage}
            alt="software-developer"
            className={classes.image}
          />
        </div>
      </div>

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
