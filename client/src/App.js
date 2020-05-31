import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Patients from "./pages/Patients";
import EHR from "./pages/EHR";
import Contacts from './pages/Contacts';
import NavBar from './components/Navbar';
import ProtectedRoute from './ProtectedRoute';
import PatientContext from './utils/PatientContext';
import './assets/css/bootstrap.min.css';
import "./App.css";


function App() {
  const [ patient, setPatient ] = useState({}),
    { Provider } = PatientContext;

  return (
    <Router>
      <div>
        <Provider value={patient} >
          <Route path="/"><NavBar /> </Route>
          <Route exact path="/"> <Landing /> </Route>
          <Route exact path="/signin"> <SignIn /> </Route>
          <Route exact path="/signup"> <SignUp /> </Route>
          <ProtectedRoute exact path="/profiles" > <Patients setContext={patient => setPatient(patient)} /> </ProtectedRoute>
          <ProtectedRoute exact path="/ehr" component={EHR} />
          <ProtectedRoute exact path="/contacts" component={Contacts} />
        </Provider>
      </div>
    </Router>
  )
}

export default App;
