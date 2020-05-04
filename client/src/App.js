import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EHR from "./pages/EHR";
import Medications from "./pages/Medications";
import Profiles from "./pages/Profiles";
import NavBar from './components/Navbar';
import API from './utils/API';
import ProtectedRoute from './ProtectedRoute';
import Auth from './Auth';
import './assets/css/bootstrap.min.css'
import "./App.css";


function App() {

  const [screen, setScreen] = useState(),

   readCookie = async () => {
    try {
      const res = await API.readCookie()
        console.log(res.data)
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
      }
    } catch (e) {
      setScreen('auth');
      console.log(e);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);


  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> <Landing /> </Route>
        <Route exact path="/signin" 
      > <SignIn screen={screen} setScreen={setScreen} /> </Route>
        <Route exact path="/signup"> <SignUp /> </Route>
        <Route exact path="/profiles"> <Profiles /> </Route>
        <Route exact path="/ehr"> <EHR /> </Route>
        <Route exact path="/medications"> <Medications /> </Route>
      </div>
    </Router>
  )
}

export default App;
