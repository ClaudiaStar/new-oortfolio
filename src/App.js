import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
