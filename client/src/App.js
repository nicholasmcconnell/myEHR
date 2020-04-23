import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Medications from "./pages/Medications";
import SignIn from "./pages/SignIn";
import NavBar from './components/Navbar';
import './assets/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> <SignIn /> </Route>
        <Route exact path="/medications"> <Medications /> </Route>
      </div>
    </Router>
  )
}

export default App;
