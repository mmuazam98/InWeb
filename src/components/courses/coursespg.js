import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from '../nav/Nav';
import Footer from '../footer/footer';

const Course = () => {
  return <React.Fragment>

   <Nav/>

    <div class="shadow p-3 mb-5 bg-body rounded">
      <h1 className='text-center text-danger text-capitalize'>
        COURSES SCHOOL OF COMPUTING
      </h1>
    </div>


    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Fundamentals of Computer Science</div>
            <div className="card-body">
              <h5 className="card-title">18CSE101J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Data Structures and Algorithms</div>
            <div className="card-body">
              <h5 className="card-title">18CSE102J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Object Oriented Programming</div>
            <div className="card-body">
              <h5 className="card-title">18CSE103J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Operating Systems</div>
            <div className="card-body">
              <h5 className="card-title">18CSE104J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Computer Organisation and Architecture</div>
            <div className="card-body">
              <h5 className="card-title">18CSE105J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Computer Networks</div>
            <div className="card-body">
              <h5 className="card-title">18CSE106J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Artificial Intelligence</div>
            <div className="card-body">
              <h5 className="card-title">18CSE107J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Design And Analysis of Algorithms</div>
            <div className="card-body">
              <h5 className="card-title">18CSE108J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" >
            <div className="card-header bg-success text-white">Database Management Systems</div>
            <div className="card-body">
              <h5 className="card-title">18CSE109J</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn btn-success">View Contents</div>
            </div>
          </div>
        </div>
      </div>
    </div>


<Footer/>



  </React.Fragment>;
};

export default Course;