const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static(__dirname + "/public/"));
app.use(express.static("../"));
app.use("/",routes);

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/not_found.html");
});

app.use((err, req, res, next) => {
  res.status(500).send("Server not working: " + err.stack);
});

app.listen(3000, () => {
  console.log("Starting server on port: 3000");
});