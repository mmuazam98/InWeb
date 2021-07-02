import React, { useState } from "react";
import "../css/Poll.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
function Message(props) {
  if (props.success.message) {
    return (
      <p id="msg" className="success">
        {props.success.message} <Link to={"/poll/" + props.success.poll._id}>View</Link>
      </p>
    );
  } else {
    return <span></span>;
  }
}

function Poll(props) {
  const [success, setSuccess] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("titlePoll").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const body = { title, category, description, likes: [], dislikes: [] };
    console.log(body);
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(body),
    };
    let result = await fetch("/polls", config);
    let data = await result.json();
    let status = await result.status;
    console.log(data, status);
    if (status) {
      // document.getElementById("msg").innerHTML = data.message + ` <a href='/poll/${data.poll._id}'>View</a>`;
      setSuccess(data);
      document.getElementById("newForm").reset();
    }
    if (status === 201) {
      document.getElementById("msg").className = "text-center success";
      console.log(document.getElementById("msg").classList);
    } else {
      document.getElementById("msg").className = "text-center failed";
    }
    if (status === 405) {
      props.setLoggedIn(false);
    }
  };
  return (
    <>
      <div className="Poll">
        <p id="msg"></p>
        {console.log(success.message)}
        <Message success={success} />
        <Form className="createForm" id="newForm" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" id="titlePoll" placeholder="Title for your poll..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" id="category">
              <option>University</option>
              <option>Teachers</option>
              <option>Management</option>
              <option>Fees</option>
              <option>Holidays</option>
              <option>Exams</option>
              <option>Hostel</option>
              <option>Mess</option>
              <option>Sports</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} id="description" placeholder="Enter an introduction text..." />
          </Form.Group>
          <div className="text-center mt-4">
            <Button variant="contained" type="submit" className="btn-submit">
              Create Poll
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Poll;
