import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import classes from "./Projects.module.css";

import drumkitImage from "../../assets/images/drumkit.png";
import listlyImage from "../../assets/images/listly4.png";
import movelyImage from "../../assets/images/movely.png";

export default () => {
  const projects = [
    {
      codeLink: "https://github.com/the-collab-lab/tcl-2-smart-shopping-list",
      appLink: "https://tcl-2-smart-shopping-list.netlify.com/",
      title: "Smart Shopping List",
      description:
        "Developed in collaboration with The Collab Lab participants - this app learns your shopping habits and recurringly adds items to your shopping list! Built with React & Firestore.",
      image: listlyImage
    },
    {
      codeLink: "https://github.com/ClaudiaStar/Movely",
      title: "Movely",
      description:
        "I am building this application because I need reminders to get up and move periodically during my coding sessions. It lets users create a list of moves and configure timers. When your sitting time is up, a move is picked for you at random! Built with React. ",
      image: movelyImage
    },
    {
      codeLink: "https://github.com/ClaudiaStar/drum-kit",
      appLink: "https://claudias-drum-kit.herokuapp.com/index.html",
      title: "Drum Kit",
      description:
        "This was one of my first assignments from the full-stack web development bootcamp I completed in Sept 2019. This drum kit was built using JQuery and my favorite thing about it is how entertaining it is to my son!",
      image: drumkitImage
    }
  ];

  const projectCards = projects.map((project, index) => (
    <ProjectCard
      codeLink={project.codeLink}
      appLink={project.appLink}
      title={project.title}
      description={project.description}
      key={project.title + "-" + index}
      image={project.image}
    />
  ));

  // carousel code
  // const [activeItemIndex, setActiveItemIndex] = useState(0);
  // const chevronWidth = 40;
  return (
    <div className={classes.ProjectsSection}>
      <div className={classes.Heading}>
        <h1>My Projects</h1>
        <p>
          My passion is creating and programming gives me endless possibilities.
        </p>
      </div>
      {projectCards}
    </div>
  );
};
