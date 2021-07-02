import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Button } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "../css/Navigation.css";
import logo from "../images/mainlogo.png";
function Navigation(props) {
  async function handleLogout() {
    localStorage.removeItem("id");
    localStorage.removeItem("authToken");

    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ name: "muazam" }),
    };
    let result = await fetch("/users/logout", config);
    let data = await result.json();
    let status = await result.status;
    console.log(data, status);
    if (status === 200 || status === 401) {
      props.setLoggedIn(false);
    }
  }

  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <Navbar bg="light" variant="light" collapseOnSelect fixed="top" expand="md">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className={`nav-links ${currentPage === "/" ? "active" : ""}`} id="home" to="/">
            Home
          </Link>
          <Link className={`nav-links ${currentPage === "/create" ? "active" : ""}`} id="create" to="/create">
            Create a Poll
          </Link>
          <Link className={`nav-links ${currentPage.includes("/discover") || currentPage.includes("/poll") ? "active" : ""}`} id="discover" to="/discover">
            Discover
          </Link>
        </Nav>
        <Link to={`/users/me`}>
          <IconButton className={`profile mr-3 ${currentPage === "/users/me" ? "activePage" : ""}`}>
            <PersonRoundedIcon />
          </IconButton>
        </Link>

        <Button variant="contained" className="btn-logout" onClick={handleLogout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
