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
import './assets/css/bootstrap.min.css'
import "./App.css";

function App() {
  
  const [ , setAuthentication ]= useState(false);

  useEffect(() => {
    checkStatus()
  }, [])
  const checkStatus = async () => {
    const { data } = await API.getUser();
      if(data.user) {
        console.log('A user is indeed logged in!', data )
        setAuthentication({ loggedIn: true, email: data.user.email })
      } else{ console.log('no one logged in, im afraid')}
   }

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/"> <Landing /> </Route>
        <Route exact path="/signIn"> <SignIn /> </Route>
        <Route exact path="/signUp"> <SignUp /> </Route>
        <Route exact path="/profiles"> <Profiles /> </Route>
        <Route exact path="/ehr"> <EHR /> </Route>
        <Route exact path="/medications"> <Medications /> </Route>
      </div>
    </Router>
  )
}

export default App;
