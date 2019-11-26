import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";

import self from "../../assets/images/self.jpg";

function Home() {
  const white = { color: "white", margin: "0 5px" };
  const hash = { color: "#00d1ff", margin: "0 5px" };
  const link = { margin: "0 7px", color: "white" };

  const [word1, setWord1] = useState(white);
  const [word2, setWord2] = useState(white);
  const [word3, setWord3] = useState(white);
  const [word4, setWord4] = useState(white);
  // const [line, setLine] = useState(white);

  useEffect(() => {
    setTimeout(function() {
      setWord1(hash);
    }, 1000);
    setTimeout(function() {
      setWord2(hash);
    }, 2000);
    setTimeout(function() {
      setWord3(hash);
    }, 3000);
    setTimeout(function() {
      setWord4(hash);
    }, 4000);
    // setTimeout(function() {
    //   setLine(hash);
    // }, 5000);
  }, [hash]);

  return (
    <React.Fragment>
      <div className={classes.Home}>
        <div className={classes.HomeContent}>
          <h1>Hi, my name is Claudia.</h1>
          <h2>I'm teaching myself web development.</h2>
          <h3 className={classes.Buzzwords}>
            <span style={word1}>mom</span>
            <span style={hash}>|</span>
            <span style={word2}>engineer</span>
            <span style={hash}>|</span>
            <span style={word3}>minimalist</span>
            <span style={hash}>|</span>
            <span style={word4}>creative</span>
          </h3>
          <img className={classes.Self} src={self} alt="self-img" />
        </div>
      </div>
      <div className={classes.About}>
        <p>
          "I have been an engineer for 4 years. In Jan 2019 I stumbled upon web
          development, started learning the basics and have not stopped since
          then. I learn with free (or almost free) online platforms such as
          Udemy, FreeCodeCamp, LinkedIn Learning & Meetup. At the moment, I am
          putting React.js & Firebase to use as I collaborate with
          <a href="https://the-collab-lab.codes/" style={link}>
            The Collab Lab
          </a>
          mentors and developers to create a smart shopping list application.
          Every day is a fulfilling adventure in the infinite world of web
          development."
        </p>
      </div>
    </React.Fragment>
  );
}

export default Home;
