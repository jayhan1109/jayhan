import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="content-section">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
