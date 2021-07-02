import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';
import './styleshomepg.css';

const Courses = () => {
  return <React.Fragment>

   <Nav/>


    <div className="container">
      <div className="row">

        <div className="col-sm-6 p-5 ">
          <h1 className="courses__heading">Course Finder</h1>
          <p className="h3 my-5 text-center">Find all your study resources all at one place. </p>
         <div className="d-flex justify-content-center">
          <ul className="list-group ">

          <Link to={'/Course'} > <button className="courses__button"><li class="list-group-item list-group-item-success">Computer Science and Engineering</li></button></Link>
            <button className="courses__button" disabled><li class="list-group-item list-group-item-danger">Electronics and Communication Engineering</li></button>
            <button className="courses__button" disabled><li class="list-group-item list-group-item-warning">Mechanical Engineering</li></button>
            <button className="courses__button" disabled><li class="list-group-item list-group-item-info">Automobile Engineering</li></button>
            <button className="courses__button" disabled><li class="list-group-item list-group-item-light">Civil Engineering</li></button>
            <button className="courses__button" disabled><li class="list-group-item list-group-item-dark">BioMedical Engineering</li></button>
          </ul>
</div>
        </div>



        <div className="col-sm-6 my-5 text-center">
        <img src = { require('../../assets/coursesbanner.png') } className = "courses__banner grow" />
        </div>
      </div>
    </div>

<Footer/>





  </React.Fragment>;
};

export default Courses;