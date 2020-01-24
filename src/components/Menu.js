import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Menu.module.css";

function Menu() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = event => {
    event.preventDefault();
    setMenuClicked(true);
  };

  return menuClicked ? null : (
    <main className={classes.Menu} onClick={handleMenuClick}>
      <NavLink
        exact
        to="/"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ fontWeight: 900 }}
        className={classes.NavLink}
      >
        Contact
      </NavLink>
    </main>
  );
}

export default Menu;
