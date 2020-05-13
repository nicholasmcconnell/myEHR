import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EHR from "./pages/EHR";
import Contacts from './components/Contacts'
import Patients from "./pages/Patients";
import NavBar from './components/Navbar';
import Wrapper   from './components/Wrapper'
import ProtectedRoute from './ProtectedRoute';
import './assets/css/bootstrap.min.css'
import "./App.css";


function App() {

  return (
    <Router>
      <div>
      <Route path="/"><NavBar /> </Route>
        <Route exact path="/"> <Landing /> </Route>
        <Route exact path="/signin"> <SignIn /> </Route>
        <Route exact path="/signup"> <SignUp /> </Route>
        <Wrapper >
        <ProtectedRoute exact path="/profiles" component={Patients} />
        <ProtectedRoute exact path="/ehr" component={EHR} />
        </Wrapper >
        <ProtectedRoute exact path="/contacts"> <Contacts /> </ProtectedRoute>
      </div>
    </Router>
  )
}

export default App;
