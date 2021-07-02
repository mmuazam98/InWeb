import React from "react";
import { Container } from "react-bootstrap";
import "../css/Work.css";
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import ImportantDevicesRoundedIcon from "@material-ui/icons/ImportantDevicesRounded";
function Work() {
  return (
    <Container className="container-work">
      <h2 className="heading">How It Works</h2>

      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 text-center">
          <div className="card-work">
            <div className="icon">
              <DevicesRoundedIcon />
            </div>
            <div className="description">
              <h2>1. Create</h2>
              <p>Choose a poll type and fill it out.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 text-center">
          <div className="card-work">
            <div className="icon">
              <ShareRoundedIcon />
            </div>
            <div className="description second">
              <h2>2. Share</h2>
              <p>Send your poll to other people.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 text-center">
          <div className="card-work">
            <div className="icon">
              <ImportantDevicesRoundedIcon />
            </div>
            <div className="description third">
              <h2>3. Get Results</h2>
              <p>Check those results in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Work;
