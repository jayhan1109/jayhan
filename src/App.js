import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="content-section">world</div>
    </div>
  );
};

export default App;
