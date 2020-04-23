import React, {useState} from 'react'
import { Link, useLocation as location } from 'react-router-dom'
import { Button, burgerBtn } from '../Forms'
import { Collapse } from '../Grid'

export default function navBar() {

    let [navLinks, showNavLinks] = useState(false)

    const toggleNav = () => showNavLinks(navLinks = !navLinks)

    const { pathname } = location();

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <Link to='/' className={'navbar-brand'}><em>my</em>ERH</Link>
            <button onClick={toggleNav} className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#target-collapse" aria-controls="target-collapse" aria-expanded="false" aria-label="Toggle navigation">
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
                    <Link to="/portfolio" className={'nav-link'}>
                        Portfolio
                    </Link>    
                </li>
                <li className={pathname === "/medications" ? "nav-item active" : "nav-item"}>
                    <Link to="/about" className={'nav-link'}>
                        About
                    </Link>    
                </li>
                <li className={pathname === "/contacts" ? "nav-item active" : "nav-item"}>
                    <Link to="/contact" className={'nav-link'}>
                        Contact
                    </Link>    
                </li>
              </ul>
                <div>
                <Button classes={'btn btn-outline-primary m-2'} type='button'>Log In</Button>
                <Button classes={'btn btn-outline-primary m-2'} type='button'>Sign Up</Button>     
                </div>
            </Collapse>
        </nav>
    )
}
