const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/test", (req, res) => {
  res.sendFile(__dirname + "/public/test.html");
});

module.exports = router;