import React, { useState, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import PatientContext from '../../utils/PatientContext';
import { Button } from '../Forms';
import { Collapse } from '../Grid';
import Auth from '../../Auth';

export default function navBar() {

    const [navLinks, showNavLinks] = useState(false),
    
        history = useHistory(),
        { pathname } = useLocation(),
      { patientId, name } = useContext(PatientContext);

    // hide or show links when screen width is small
     const toggleNav = () => showNavLinks(navLinks = !navLinks),  


     logout = () => {
        Auth.logout(() => {history.push("/")})
    },
    
     getButtons = () => {
        if(Auth.isAuthenticated()) {
            return (
                <Button className={'btn btn-outline-primary m-2'} type='button'
                    onClick={logout} >
                    Log Out
                </Button>
        )
        } else {
            return(
                <div>
                    <Link to='/signin' >
                                <Button className={'btn btn-outline-primary m-2'} type='button'>
                                    Log In
                                </Button>
                            </Link>
                    <Link to='/signup' >
                        <Button className={'btn btn-outline-primary m-2'} type='button'>
                            Sign Up
                            </Button>
                    </Link>
                </div>
                )
            }
     }
  

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <Link to='/' className={'navbar-brand'}><em>my</em>EHR</Link>
            <button onClick={toggleNav} className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#target-collapse" >
            <span className="navbar-toggler-icon"></span>
            </button>

            <Collapse navState={navLinks} id={'target-collapse'}>
              <ul className="navbar-nav mr-auto">
                <li className={pathname === "/" ? "nav-item active" : "nav-item"}>
                    <Link to="/" className={'nav-link'}>
                        Home
                    </Link>
                </li>
                <li className={pathname === "/profiles" ? "nav-item active" : "nav-item"}
                    style={Auth.isAuthenticated() ? {display: 'block'} : {display: 'none'}} >
                    <Link to="/profiles" className={'nav-link'}>
                        Saved health records
                    </Link>
                </li>
                <li className={pathname === "/ehr" ? "nav-item active" : "nav-item"}
                    style={pathname === "/ehr" || pathname === "/contacts" ? {display: 'block'} : {display: 'none'}} >

                    <Link to={{pathname:"/ehr", state: { patientId }}} className={'nav-link'} >
                        EHR
                    </Link>    
                </li>
                <li className={pathname === "/contacts" ? "nav-item active" : "nav-item"}
                    style={pathname === "/ehr" || pathname === "/contacts" ? {display: 'block'} : {display: 'none'}}  >

                    <Link to={{pathname:"/contacts", state: { patientId }}} className={'nav-link'} >
                        Just Contacts
                    </Link>    
                </li>
              </ul>
              
                { getButtons() }

            </Collapse>
        </nav>
    )
}

