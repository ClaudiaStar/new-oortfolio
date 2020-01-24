import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Menu from "./Menu";

import classes from "./Header.module.css";

import menuImage from "../assets/images/menu.svg";

function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  const logoStyles = {
    textDecoration: "none",
    fontSize: "30px",
    fontFamily: "'Rock Salt', cursive",
    cursor: "pointer",
    color: "#557308",
    padding: "2%"
  };

  const handleMenuClick = event => {
    event.preventDefault();
    setMenuClicked(true);
    if (menuClicked) {
      setMenuClicked(false);
    }
  };

  return (
    <header className={classes.Header}>
      {menuClicked ? <Menu /> : null}
      <div>
        <nav>
          <NavLink to="/" style={logoStyles}>
            C.E.
          </NavLink>
          <div onClick={handleMenuClick}>
            <img src={menuImage} alt="menu" className={classes.Menu} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
