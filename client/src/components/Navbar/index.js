import React, {useState} from 'react'
import { Link, useLocation as location, useHistory } from 'react-router-dom'
import { Button } from '../Forms'
import { Collapse } from '../Grid'
import Auth from '../../Auth'

export default function navBar() {

    let history = useHistory(),
      [navLinks, showNavLinks] = useState(false)

     const toggleNav = () => showNavLinks(navLinks = !navLinks),

     logout = () => {
        Auth.logout(() => {history.push("/")})
    },
    
     { pathname } = location(),

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


    const logout = () => {
        API.logout()
          .then( res => console.log(res.data))
       }
  

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
                <li className={pathname === "/profiles" ? "nav-item active" : "nav-item"}
                    style={Auth.isAuthenticated() ? {display: 'block'} : {display: 'none'}} >
                    <Link to="/profiles" className={'nav-link'}>
                        profiles
                    </Link>    
                </li>
                <li className={pathname === "/ehr" ? "nav-item active" : "nav-item"}
                    style={Auth.isAuthenticated() ? {display: 'block'} : {display: 'none'}} >

                    <Link to="/ehr" className={'nav-link'}>
                        health record
                    </Link>    
                </li>
                <li className={pathname === "/contacts" ? "nav-item active" : "nav-item"}
                    style={Auth.isAuthenticated() ? {display: 'block'} : {display: 'none'}} >

                    <Link to="/contacts" className={'nav-link'}>
                        contacts
                    </Link>    
                </li>
              </ul>
              
                { getButtons() }

            </Collapse>
        </nav>
    )
}

