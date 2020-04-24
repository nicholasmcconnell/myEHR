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
            <Link to='/' className={'navbar-brand'}><em>my</em>ERH</Link>
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
                <li className={pathname === "/medications" ? "nav-item active" : "nav-item"}>
                    <Link to="/medications" className={'nav-link'}>
                        medications
                    </Link>    
                </li>
                <li className={pathname === "/contacts" ? "nav-item active" : "nav-item"}>
                    <Link to="/contacts" className={'nav-link'}>
                        contacts
                    </Link>    
                </li>
              </ul>
                <div>
                <Button classes={'btn btn-outline-primary m-2'} href='../../pages/SignIn' type='button'>Log In</Button>
                <Button classes={'btn btn-outline-primary m-2'}  href='../../pages/SignUp' type='button'>Sign Up</Button>     
                </div>
            </Collapse>
        </nav>
    )
}
