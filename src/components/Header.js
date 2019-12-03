import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  const linkStyles = {
    textDecoration: "none",
    color: "#ff165d",
    fontWeight: "bold",
    border: "2px solid #3ec1d3",
    padding: "5px",
    borderRadius: "10%",
    cursor: "pointer"
  };

  const logoStyles = {
    textDecoration: "none",
    fontSize: "30px",
    fontFamily: "'Rock Salt', cursive",
    cursor: "pointer",
    color: "#3ec1d3"
  };

  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.parent}>
          <li className={classes.li1}>
            <Link to="/" style={logoStyles}>
              C.E.
            </Link>
          </li>
          <li className={classes.li2}>
            <Link to="/" style={linkStyles}>
              Home
            </Link>
          </li>
          <li className={classes.li3}>
            <Link to="/projects" style={linkStyles}>
              Projects
            </Link>
          </li>

          <li className={classes.li4}>
            <Link to="/contact" style={linkStyles}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
