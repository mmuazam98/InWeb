const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const pollsRouter = require("./routes/polls");
const session = require("express-session");
const path = require("path");
const app = express();

app.use(
  session({
    secret: "ilu>c8cs",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(__dirname + "/react/public"));

app.use(cors({ origin: "http://localhost:3000" }));

require("dotenv").config();
require("./db/mongoose");

app.use(userRouter);
app.use(pollsRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("react/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "react", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Backend server started on http://localhost:${PORT}`));
