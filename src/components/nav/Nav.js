import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
function Nav() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <div className="navbar navbar-brand">
          <Link to={"/"}>
            {/* College-<span className="black">Made</span>-Simpler{" "} */}
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {/* <li className = "nav-item active text-center" >
        <Link to={'/'} className="nav-link">Home </Link> </li> */}
            <li className="nav-item text-center">
              <Link to={"/"} className={`nav-link ${currentPage === "/" ? "active" : ""}`}>
                Home
              </Link>{" "}
            </li>
            <li className="nav-item text-center">
              <Link to={"/Blogs"} className={`nav-link ${currentPage === "/Blogs" ? "active" : ""}`}>
                Tech Blogs{" "}
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link to={"/Courses"} className={`nav-link ${currentPage === "/Courses" ? "active" : ""}`}>
                Courses{" "}
              </Link>{" "}
            </li>
            <li className="nav-item text-center">
              <a href="https://collegemadesimpler.herokuapp.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                Polling{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
