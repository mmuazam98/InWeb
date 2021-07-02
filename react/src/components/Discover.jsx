import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Discover.css";
function Discover(props) {
  const [Poll, setPoll] = useState([]);

  function compare(a, b) {
    if (a.likes <= b.likes) {
      return 1;
    }
    if (a.likes > b.likes) {
      return -1;
    }
    return 0;
  }

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
  const getPolls = async () => {
    let config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const response = await fetch("/discover", config);
    const data = await response.json();
    const status = await response.status;
    data.polls.sort(compare);
    if (status === 405) {
      props.setLoggedIn(false);
    } else {
      setPoll(data.polls);
    }
  };
  useEffect(() => {
    getPolls();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container className="container-discover">
        <h1>Discover Interesting Polls</h1>
        <p>If you're interested in finding new polls, opinions and thoughts from others, feel free to explore this page. </p>
        <div className="trending">
          <h2>Trending Polls</h2>
          <ul id="list">
            {Poll.map((poll, index) => {
              return (
                <li key={index}>
                  <span className="likes">{poll.likes.length}</span>
                  <aside>
                    <Link to={"/poll/" + poll._id}>{poll.title}</Link>
                    <br />
                    <span className="category">#{poll.category}</span>
                    <p>{poll.description}</p>
                    <span className="date">{convert(poll.createdAt)}</span>
                  </aside>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="m-5"></div>
    </>
  );
}

export default Discover;
