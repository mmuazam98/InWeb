const express = require("express");
const router = new express.Router();
const Poll = require("../models/polls");
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/polls", auth, async (req, res) => {
  console.log(req.body);
  // const poll = new poll(req.body);
  const poll = new Poll({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await poll.save();
    res.status(201).json({ poll, message: "Poll has been created successfully!" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong. Please try again later!" });
  }
});
router.get("/polls", auth, async (req, res) => {
  try {
    const polls = await Poll.find({ owner: req.user._id });
    if (!polls) return res.status(404).send();
    res.status(200).json({ polls });
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/discover", auth, async (req, res) => {
  console.log(req.query);
  try {
    const polls = await Poll.find({});
    if (!polls) return res.status(404).send();
    res.status(200).json({ polls });
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/poll/:id", async (req, res) => {
  let _id = req.params.id;
  try {
    // const poll = await poll.findById(_id);
    const poll = await Poll.findById({ _id });
    if (!poll) return res.status(404).send();
    const owner = await User.findById({ _id: poll.owner });
    console.log(owner.name);
    res.json({ poll, name: owner.name, id: owner._id });
  } catch (err) {
    res.status(500).send(err);
  }
});
router.post("/like", auth, async (req, res) => {
  let _id = req.body.PollID;
  let userId = req.body.id;
  try {
    const poll = await Poll.findById({ _id });
    let count = 0;
    for (let i = 0; i < poll.dislikes.length; i++) {
      if (poll.dislikes[i].user === userId) {
        count++;
      }
    }
    console.log(count);
    if (count === 1) {
      poll.dislikes = poll.dislikes.filter((p) => {
        return p.user !== userId;
      });
      await poll.save();
      console.log(poll.dislikes);
    }
    count = 0;
    for (let i = 0; i < poll.likes.length; i++) {
      if (poll.likes[i].user === userId) {
        count++;
      }
    }
    console.log(count);
    if (count === 0) {
      poll.likes = poll.likes.concat({ user: userId });
      await poll.save();
      res.status(200).json({ poll });
    } else {
      res.status(201).json({ poll });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});
router.post("/dislike", auth, async (req, res) => {
  let _id = req.body.PollID;
  let userId = req.body.id;
  try {
    const poll = await Poll.findById({ _id });
    let count = 0;
    for (let i = 0; i < poll.likes.length; i++) {
      if (poll.likes[i].user === userId) {
        count++;
      }
    }
    console.log(count);
    if (count === 1) {
      poll.likes = poll.likes.filter((p) => {
        return p.user !== userId;
      });
      await poll.save();
      console.log(poll.likes);
    }
    count = 0;
    for (let i = 0; i < poll.dislikes.length; i++) {
      if (poll.dislikes[i].user === userId) {
        count++;
      }
    }
    console.log(count);
    if (count === 0) {
      poll.dislikes = poll.dislikes.concat({ user: userId });
      await poll.save();
      res.status(200).json({ poll });
    } else {
      res.status(201).json({ poll });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});
module.exports = router;
