import React from "react";
import classes from "./Home.module.css";

function Home() {
  const link = { margin: "0 7px", color: "#393e46", cursor: "pointer" };

  return (
    <React.Fragment>
      <div className={classes.Home}>
        <div className={classes.HomeContent}>
          <h1>Hi, my name is Claudia.</h1>
          <h2>I'm teaching myself web development.</h2>
          <h3 className={classes.Buzzwords}>
            <span>mom</span>
            <span>|</span>
            <span>engineer</span>
            <span>|</span>
            <span>minimalist</span>
            <span>|</span>
            <span>creative</span>
          </h3>
          <p className={classes.HomeParagraph}>
            "I am a civil engineer on my way to becoming a professional web
            developer. I love that all you need are knowledge and creativity to
            solve an infinite amount of problems. I learn with free (or almost
            free) online platforms such as Udemy, FreeCodeCamp, LinkedIn
            Learning & Meetup. Currently, I am putting React.js & Firebase to
            use as I collaborate with
            <a href="https://the-collab-lab.codes/" style={link}>
              The Collab Lab
            </a>
            mentors and developers to create a smart shopping list application.
            When away from my laptop you can find me spending time with my
            husband, son, and fur child in beautiful Portland, OR."
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
