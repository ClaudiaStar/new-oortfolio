import React from "react";
import Slider from "react-slick";

import ProjectCard from "./ProjectCard";

class SimpleSlider extends React.Component {
  render() {
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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {/* {projectCards} */}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
