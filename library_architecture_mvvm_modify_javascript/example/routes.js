const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/other", (req, res) => {
  res.sendFile(__dirname + "/public/other.html");
});

module.exports = router;