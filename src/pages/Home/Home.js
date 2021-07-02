import React from 'react';
import './Home.css';
import './default.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import App from '../../App';
import Nav from '../../components/nav/Nav';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import ImgSrc from './../../shared/ImgSrc'

const Home = () => {
    return (

        <div className = "container-fluid " id = "home" >
         <Nav/>
      


        <div className = "row text-center padding" >
 
		<div className = " row jumbotron " >
        <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" >
        <h1 className = "head1" > A Single Destination </h1> 
        <h1 className = "head2" > To All The Problems For</h1> 
        <h1 className = "head3" > SRMITES</h1> 
     
        <a href="#services"><button className="btn button1 grow" >EXPLORE MORE</button></a>
        </div> 
        
        <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" >
        <img src = { require('../../assets/banner.png') }className = "banner grow" />
        </div> 
        </div> 

       

        <div className="row container threecol" id="services">
        <div className = "col-xs-12 col-sm-12 col-md-4" >
        <Link to={'/Blogs'} className="nav-link"><img src = { require('../../assets/blogs.png') } className = "images__banner grow"/></Link>
        <Link to={'/Blogs'} className="nav-link"> <h2 className = "course_heading text-center underline" > Technical Blogs </h2> </Link>
        <p className="ques grow">Want to read technical articles?</p>
        <p className="quesp" id="quesp1">Dive into the world of latest technical blogs and articles by your voice.</p> 
        </div>

        <div className = "col-xs-12 col-sm-12 col-md-4" >
        <Link to={'/Courses'} className="nav-link"><img src = { require('../../assets/courses.png') } className = "images__banner grow" /></Link>
        <Link to={'/Courses'} className="nav-link"><h3 className = "course_heading underline" > Courses </h3> </Link>
        <p className="ques grow">Want to learn new skills?</p>
        <p className="quesp" id="quesp2"> Get the best curated list of courses and playlists all at one place.</p>
         </div> 

        <div className = "col-xs-12 col-sm-12 col-md-4" >
        <a href="https://collegemadesimpler.herokuapp.com" target="_blank" className="nav-link"><img src = { require('../../assets/poll.png') }className = "images__banner grow" /></a>
        <a href="https://collegemadesimpler.herokuapp.com" target="_blank" className="nav-link"><h3 className = "course_heading underline" > Polling </h3> </a>
        <p className="ques grow"> Having an issue? </p> 
        <p className="quesp" id="quesp3"> Start your own poll and let the issue get into management's notice.</p>
        </div>
        </div>
         </div> 
        
        <Footer/>
        </div>
    )
}

export default Home