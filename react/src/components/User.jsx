import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../css/Profile.css";
import user from "../images/user.png";
function User() {
  const [Poll, setPoll] = useState([]);

  let path = window.location.pathname;
  let userId = path.substr(7, path.length);
  console.log(userId);
  const convert = (datetime) => {
    let created_date = new Date(datetime);

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = created_date.getFullYear();
    let month = months[created_date.getMonth()];
    let date = created_date.getDate();
    let hour = created_date.getHours();
    let min = created_date.getMinutes();
    let sec = created_date.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;
    let time = date + ", " + month + " " + year + " - " + hour + ":" + min + ":" + sec;
    return time;
  };
  const getInfoUser = async () => {
    // let url = ``;
    let config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    let result = await fetch(`/users/${userId}`, config);
    let info = await result.json();
    let status = await result.status;
    console.log(info, status);
    if (status === 200) {
      let date = info.user[0].createdAt.split("T")[0];
      let count = 0;
      info.polls.forEach((poll) => {
        count += poll.likes.length;
      });
      console.log(count);
      $("#uname").html(info.user[0].name);
      $("#bname").html(info.user[0].name);
      $("#pemail").html(info.user[0].email);
      $("#pdate").html(date);
      $("#ppolls").html(info.polls.length);
      $("#plikes").html(count);
      const data = info.polls;
      setPoll(data);
    }
  };
  useEffect(() => {
    getInfoUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="Profile">
        <Container>
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card h-100 justify-content-center align-content-center">
                  <div className="card-body">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                      <img src={user} alt="Admin" className="rounded-circle mt-4 mb-3" width="150" />
                      <h4 className="my-3" id="bname">
                        User
                      </h4>
                      {/* <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-green">Follow</button>
                      <button className="btn btn-outline-green">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 mb-3">
                <div className="card mb-3 h-100 ">
                  <div className="card-body pt-5 pb-3 px-5">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary" id="uname"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary" id="pemail"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Joined</h6>
                      </div>
                      <div className="col-sm-9 text-secondary" id="pdate"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Polls</h6>
                      </div>
                      <div className="col-sm-9 text-secondary" id="ppolls"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Likes</h6>
                      </div>
                      <div className="col-sm-9 text-secondary" id="plikes"></div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mypolls">
          <h2 className="text-center mb-3 font-weight-bold">Polls</h2>
          <div className="row justify-content-center" id="myPolls">
            {Poll.map((poll, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <aside>
                    <Link to={"/poll/" + poll._id}>{poll.title}</Link>
                    <br />
                    <span className="category">#{poll.category}</span>
                    <p>{poll.description}</p>
                    <span className="date">{convert(poll.createdAt)}</span>
                  </aside>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default User;
