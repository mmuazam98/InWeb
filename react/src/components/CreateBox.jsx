import React from "react";
import { Link } from "react-router-dom";
import "../css/CreateBox.css";
import pollImage from "../images/poll-image.png";
import { Button } from "@material-ui/core";
function CreateBox() {
  return (
    <div className="CreateBox">
      <div className="box">
        <div className="child">
          <h1>
            Create a <span id="new">New Poll</span> in Seconds
          </h1>
          <p>Simple. Fast. Free.</p>
          <img src={pollImage} alt="PollImage" className="pollImage" />
          <div className="button">
            <Link to="/create">
              {" "}
              <Button variant="contained" className="btn-create">
                Create a Poll
              </Button>
            </Link>
            <Link to="/discover">
              {" "}
              <Button variant="contained" className="btn-create">
                Discover Polls
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBox;
