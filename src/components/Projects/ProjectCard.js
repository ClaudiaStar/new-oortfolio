import React from "react";
import classes from "./ProjectCard.module.css";

import projectSeparator from "../../assets/images/separator.png";

function ProjectCard(props) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <div
      style={{
        height: "fit-content"
      }}
      className={classes.ProjectCard}
    >
      <div className={classes.ProjectTextAndImage}>
        <div className={classes.ProjectText}>
          <h2>{props.title}</h2>
          <p className={classes.ProjectDescription}>{props.description}</p>
        </div>
        <div>
          <img
            src={props.image}
            alt="project"
            className={classes.ProjectImage}
          />
        </div>
      </div>
      <div className={classes.LinkDiv}>
        <a
          href={props.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.ProjectLink}
        >
          View Code
        </a>
        <a
          href={props.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.ProjectLink}
        >
          View App
        </a>
      </div>
      <img
        src={projectSeparator}
        alt="project separator"
        className={classes.ProjectSeparator}
      />
    </div>
  );
}

export default ProjectCard;
