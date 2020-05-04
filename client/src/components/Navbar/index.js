import React, {useState} from 'react'
import { Link, useLocation as location } from 'react-router-dom'
import { Button } from '../Forms'
import { Collapse } from '../Grid'

export default function navBar() {

    let [navLinks, showNavLinks] = useState(false)

    const toggleNav = () => showNavLinks(navLinks = !navLinks)

    const { pathname } = location();

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
                <li className={pathname === "/profiles" ? "nav-item active" : "nav-item"}>
                    <Link to="/profiles" className={'nav-link'}>
                        profiles
                    </Link>    
                </li>
                <li className={pathname === "/ehr" ? "nav-item active" : "nav-item"}>
                    <Link to="/ehr" className={'nav-link'}>
                        health record
                    </Link>    
                </li>
                <li className={pathname === "/contacts" ? "nav-item active" : "nav-item"}>
                    <Link to="/contacts" className={'nav-link'}>
                        contacts
                    </Link>    
                </li>
              </ul>
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
            </Collapse>
        </nav>
    )
}
