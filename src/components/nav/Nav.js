import './nav.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react'


function Nav() {
    return (
   
              <nav className = "navbar navbar-expand-md navbar-light bg-light sticky-top" >
        <div className = "container-fluid" >
        <nav className = "navbar navbar-light" >
        <Link to={'/'} className="navbar-brand">College-<span className="black">Made</span>-Simpler </Link>
         </nav>
        <button className = "navbar-toggler"
        type = "button" data-toggle = "collapse"data-target = "#navbarResponsive" >
        <span className = "navbar-toggler-icon" ></span></button>
        <div className = "collapse navbar-collapse" id = "navbarResponsive" >
        <ul className = "navbar-nav ml-auto" >
        {/* <li className = "nav-item active text-center" >
        <Link to={'/'} className="nav-link">Home </Link> </li> */}
        <li className = "nav-item text-center" >
        <Link to={'/Blogs'} className="nav-link">Tech Blogs </Link></li> 
        <li className = "nav-item text-center" >
        <Link to={'/Courses'} className="nav-link">Courses </Link> </li> 
        <li className = "nav-item text-center" >
        <Link to={'/'} className="nav-link">Polling </Link> </li> 
        <li className = "nav-item text-center" >
        <Link to={'/Home'} className="nav-link">Contact Us </Link> </li>
         </ul>
          </div>
           </div>
            </nav>
   
    )
}

export default Nav

