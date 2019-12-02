import React, { useState } from "react";
import classes from "./ProjectCard.module.css";

function ProjectCard(props) {
  const [buttonColor, setButtonColor] = useState("#ff9a00");
  const [buttonFontColor, setButtonFontColor] = useState("#f6f7d7");

  const linkStyles = {
    textDecoration: "none",
    color: buttonFontColor,
    backgroundColor: buttonColor,
    padding: "10px",
    border: "3px solid #ff9a00",
    borderRadius: "5%"
  };

  const onMouseEnter = () => {
    setButtonColor("#f6f7d7");
    setButtonFontColor("#ff9a00");
  };

  const onMouseLeave = () => {
    setButtonColor("#ff9a00");
    setButtonFontColor("#fafaf6");
  };

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <div className={classes.ProjectCard}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className={classes.LinkDiv}>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
