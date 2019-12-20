import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  const logoStyles = {
    textDecoration: "none",
    fontSize: "30px",
    fontFamily: "'Rock Salt', cursive",
    cursor: "pointer",
    color: "#557308"
  };

  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.parent}>
          <li className={classes.li1}>
            <NavLink to="/" style={logoStyles}>
              C.E.
            </NavLink>
          </li>
          <li className={classes.li2}>
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: 900 }}
              className={classes.NavLink}
            >
              Home
            </NavLink>
          </li>
          <li className={classes.li3}>
            <NavLink
              to="/projects"
              activeStyle={{ fontWeight: 900 }}
              className={classes.NavLink}
            >
              Projects
            </NavLink>
          </li>

          <li className={classes.li4}>
            <NavLink
              to="/contact"
              activeStyle={{ fontWeight: 900 }}
              className={classes.NavLink}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
