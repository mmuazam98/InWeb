import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";
import "./styleshomepg.css";

const Courses = () => {
  return (
    <React.Fragment>
      <Nav />

      <div className="container courses">
        <div className="text-center px-3">
          <h1 className="courses__heading">Course Finder</h1>
          <p className="h3 my-5 text-center px-3">Find all your study resources all at one place. </p>
        </div>

        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 col-sm-12 pt-6">
            <div className="d-flex justify-content-center">
              <ul className="list-group ">
                <Link to={"/Course"}>
                  {" "}
                  <button className="btn btn-success courses__button">Computer Engineering</button>
                </Link>
                <button className="btn btn-primary courses__button disabled-btn">Electronics Engineering</button>
                <button className="btn btn-dark courses__button disabled-btn">Mechanical Engineering</button>
                <button className="btn btn-info courses__button disabled-btn">Automobile Engineering</button>
                <button className="btn btn-danger courses__button disabled-btn">Civil Engineering</button>
                <button className="btn btn-secondary courses__button disabled-btn">BioMedical Engineering</button>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 my-5 text-center">
            <img src={require("../../assets/coursesbanner.png")} className="courses__banner grow" alt="banner" />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Courses;
