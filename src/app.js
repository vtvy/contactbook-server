const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
