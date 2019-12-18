import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ProjectCard from "../Projects/ProjectCard";
import classes from "./Projects.module.css";

export default () => {
  const projects = [
    {
      link: "https://github.com/the-collab-lab/tcl-2-smart-shopping-list",
      title: "Smart Shopping List",
      description:
        "Currently being developed in collaboration with The Collab Lab participants - this app learns your shopping habits and recurringly adds items to your shopping list! Built with React & Firestore."
    },
    {
      link: "https://github.com/ClaudiaStar/Movely",
      title: "Movely",
      description:
        "I am building this application because I need reminders to get up and move periodically during my coding sessions. It lets users create a list of moves and configure timers. When your sitting time is up, a move is picked for you at random! Built with React. "
    },
    {
      link: "https://github.com/ClaudiaStar/react-todolist",
      title: "To-do List",
      description:
        "This is a to do list I built when I first started learning React. What I love the most about it is the simple yet beautiful styling."
    },
    {
      link: "https://github.com/ClaudiaStar/drum-kit",
      title: "Drum Kit",
      description:
        "This was one of my first assignments from the full-stack web development bootcamp I completed in Sept 2019. This drum kit was built using JQuery and my favorite thing about it is how entertaining it is to my son!"
    }
  ];

  const projectCards = projects.map((project, index) => (
    <ProjectCard
      link={project.link}
      title={project.title}
      description={project.description}
      key={project.title + "-" + index}
    />
  ));

  // carousel dependency code
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className={classes.ProjectsSection}>
      <div className={classes.Heading}>
        <h1>My Projects</h1>
        <p>
          My passion is creating and programming gives me endless possibilities.
        </p>
      </div>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {projectCards}
        </ItemsCarousel>
      </div>
    </div>
  );
};
