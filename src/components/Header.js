import React from "react";
// add useState if going back to side bar menu
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/images/home-icon.svg";
import projectIcon from "../assets/images/project-icon.svg";
import msgIcon from "../assets/images/msg-icon.svg";

import classes from "./Header.module.css";

function Header() {
  // const logoStyles = {
  //   textDecoration: "none",
  //   fontSize: "30px",
  //   fontFamily: "'Rock Salt', cursive",
  //   cursor: "pointer",
  //   color: "#557308",
  //   padding: "2%"
  // };

  return (
    <header className={classes.Header}>
      <NavLink to="/" activeStyle={{ fontWeight: 900 }}>
        <div className={classes.HomeIcon}>
          <img src={homeIcon} alt="back to home"></img>
        </div>
      </NavLink>

      <NavLink to="/projects" activeStyle={{ fontWeight: 900 }}>
        <div className={classes.ProjectsIcon}>
          <img src={projectIcon} alt="view projects"></img>
        </div>
      </NavLink>

      <NavLink to="/contact" activeStyle={{ fontWeight: 900 }}>
        <div className={classes.ContactIcon}>
          <img src={msgIcon} alt="contact me"></img>
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
