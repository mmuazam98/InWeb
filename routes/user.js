const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const User = require("../models/user");
const Poll = require("../models/polls");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");
const { sendWelcomeEmail, sendCancellationEmail } = require("../emails/account");
const cors = require("cors");

const router = new express.Router();
router.options("/", cors());
// router.get("/", (req, res) => {
//   res.send("Hello");
// });
//!Create a user
router.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    // const token = await user.generateAuthToken();
    const info = user.getPublicProfile();
    payload = {
      user: {
        email: user.email,
        userId: user._id,
      },
    };
    jwt.sign(
      payload,
      "longer-secret-is-better",
      {
        expiresIn: "1h",
      },
      async (err, token) => {
        user.tokens = user.tokens.concat({ token });
        await user.save();
        req.session.token = token;
        // console.log(user);
        return res.status(201).json({
          token: token,
          info,
        });
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

//! Login users
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    // const token = await user.generateAuthToken();
    const info = user.getPublicProfile();
    payload = {
      user: {
        email: user.email,
        userId: user._id,
      },
    };
    jwt.sign(
      payload,
      "longer-secret-is-better",
      {
        expiresIn: "1d",
      },
      async (err, token) => {
        user.tokens = user.tokens.concat({ token });
        await user.save();
        req.session.token = token;
        // console.log(user);
        return res.status(200).json({
          token: token,
          info,
        });
      }
    );
  } catch (err) {
    res.status(400).json({ message: "invalid credentials" });
  }
});
router.get("/users/me", auth, async (req, res) => {
  // console.log("Session token: ", req.session.token);
  // console.log(req.user);
  try {
    const polls = await Poll.find({ owner: req.user._id });
    // console.log(polls);
    res.status(200).json({ user: req.user, polls });
  } catch (err) {
    res.status(400).send();
  }
});
router.get("/users/:id", auth, async (req, res) => {
  // console.log("Session token: ", req.session.token);
  try {
    const polls = await Poll.find({ owner: req.params.id });
    const user = await User.find({ _id: req.params.id });
    // console.log(polls);
    res.status(200).json({ user, polls });
  } catch (err) {
    res.status(400).send();
  }
});

//! logout one session
router.post("/users/logout", auth, async (req, res) => {
  try {
    const token_curr = req.token;
    // console.log("hi ", token_curr);
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== token_curr;
    });
    req.session.destroy((err) => {
      console.log("Session destroyed");
    });
    await req.user.save();
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
