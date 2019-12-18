import React, { useState } from "react";
import classes from "./ProjectCard.module.css";

function ProjectCard(props) {
  const [buttonColor, setButtonColor] = useState("#3ec1d3");

  const linkStyles = {
    textDecoration: "none",
    color: "#fef6fb",
    backgroundColor: buttonColor,
    padding: "10px",
    border: "3px solid #3ec1d3",
    borderRadius: "5%"
  };

  const onMouseEnter = () => {
    setButtonColor("#fef6fb03");
  };

  const onMouseLeave = () => {
    setButtonColor("#3ec1d3");
  };

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <div
      style={{ height: "fit-content", background: "#EEE" }}
      className={classes.ProjectCard}
    >
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
