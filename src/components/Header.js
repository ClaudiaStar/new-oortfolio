import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

import Logo from "../assets/images/logo.png";

function Header() {
  const linkStyles = {
    textDecoration: "none",
    color: "#3d6cb9",
    fontWeight: "bold"
  };

  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.parent}>
          <li className={classes.li1}>
            <Link to="/">
              <img className={classes.Logo} src={Logo} alt="Logo" />
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
