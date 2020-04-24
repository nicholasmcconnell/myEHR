import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserInfo from "./pages/UserInfo";
import Medications from "./pages/Medications";
import Profiles from "./pages/Profiles";
import NavBar from './components/Navbar';
import './assets/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> <Landing /> </Route>
        <Route exact path="/signIn"> <SignIn /> </Route>
        <Route exact path="/signUp"> <SignUp /> </Route>
        <Route exact path="/profiles"> <Profiles /> </Route>
        <Route exact path="/userInfo"> <UserInfo /> </Route>
        <Route exact path="/medications"> <Medications /> </Route>
      </div>
    </Router>
  )
}

export default App;
