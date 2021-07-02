const mongoose = require("mongoose");
const PollsSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //create relationship with User model
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    likes: [
      {
        user: {
          type: String,
          required: true,
        },
      },
    ],
    dislikes: [
      {
        user: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Polls = mongoose.model("Polls", PollsSchema);
module.exports = Polls;
