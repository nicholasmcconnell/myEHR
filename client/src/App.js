import React, { Component } from "react";
// import "./App.css";
import Medications from "./pages/Medications";
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div >
        <Medications />
      </div>
    );
  }
}

export default App;
