import React, { useEffect, useState } from "react";
import "../css/SinglePoll.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
function SinglePoll() {
  const [poll, setPoll] = useState();
  const convert = (datetime) => {
    var created_date = new Date(datetime);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = created_date.getFullYear();
    var month = months[created_date.getMonth()];
    var date = created_date.getDate();
    // var hour = created_date.getHours();
    // var min = created_date.getMinutes();
    // var sec = created_date.getSeconds();
    var time = date + ", " + month + " " + year; //+ " - " + hour + ":" + min + ":" + sec;
    return time;
  };
  const PollID = window.location.pathname.substr(6, window.location.pathname.length);
  const id = localStorage.getItem("id");

  const getPolls = async () => {
    const response = await fetch(`/poll/${PollID}`);
    const data = await response.json();
    console.log(data);
    let count = 0;
    for (let i = 0; i < data.poll.likes.length; i++) {
      if (data.poll.likes[i].user === id) {
        count = 2;
        break;
      }
    }
    for (let i = 0; i < data.poll.dislikes.length; i++) {
      if (data.poll.dislikes[i].user === id) {
        count = 1;
        break;
      }
    }

    if (count === 1) {
      console.log("not liked");
      $(".dislikedArrow").addClass("isActive");
    } else if (count === 2) {
      console.log("liked");
      $(".likedArrow").addClass("isActive");
    }
    // $("a").attr("href", `/users/${data.id}`);
    setPoll(data.id);
    let date = convert(data.poll.createdAt);
    $("#date").text(date);
    $("#title").text(data.poll.title);
    $("#creator").text(data.name);
    $("#likes").text(data.poll.likes.length);
    $("#dislikes").text(data.poll.dislikes.length);
    $("#description").text(data.poll.description);
  };
  const Like = async () => {
    const body = { id, PollID };
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(body),
    };
    let result = await fetch("/like", config);
    let data = await result.json();
    let status = await result.status;
    console.log(data, status);
    $(".likedArrow").addClass("isActive");
    $(".dislikedArrow").removeClass("isActive");

    getPolls();
  };
  const dislike = async () => {
    const body = { id, PollID };
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(body),
    };
    let result = await fetch("/dislike", config);
    let data = await result.json();
    let status = await result.status;
    console.log(data, status);
    $(".likedArrow").removeClass("isActive");

    $(".dislikedArrow").addClass("isActive");
    getPolls();
  };
  useEffect(() => {
    getPolls();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="SinglePoll">
      <div className="pollBox">
        <div className="text-center">
          <span id="title"></span>

          <p id="sub">
            {/* eslint-disable-next-line */}
            by <Link id="creator" to={"/users/" + poll}></Link> - <span id="date"></span>
          </p>
          <p id="description"></p>
          <div className="action likes">
            <IconButton onClick={Like} className="likedArrow">
              <ArrowUpwardRoundedIcon />
            </IconButton>
            <span id="likes"></span>
          </div>
          <div className="action dislikes">
            <IconButton className="dislikedArrow">
              <ArrowDownwardRoundedIcon onClick={dislike} />
            </IconButton>
            <span id="dislikes"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePoll;
