import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Menu.module.css";

function Menu() {
  const handleNavClick = event => {
    event.preventDefault();
  };

  return (
    <main className={classes.Menu}>
      {/* <ul className={classes.MenuList}>
        <li className={classes.MenuItem}> */}
      <NavLink
        exact
        to="/"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
        onClick={handleNavClick}
      >
        Home
      </NavLink>
      {/* </li>
        <li className={classes.MenuItem}> */}
      <NavLink
        to="/projects"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
      >
        Projects
      </NavLink>
      {/* </li>

        <li className={classes.MenuItem}> */}
      <NavLink
        to="/contact"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
      >
        Contact
      </NavLink>
      {/* </li>
      </ul> */}
    </main>
  );
}

export default Menu;
