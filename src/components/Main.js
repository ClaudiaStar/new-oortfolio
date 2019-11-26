import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default Main;
