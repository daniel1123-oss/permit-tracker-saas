const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("My SaaS is live!");
});

app.listen(3000, () => {
  console.log("Server running");
});
