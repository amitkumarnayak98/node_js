const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "Rest API is working fine",
  });
});

app.listen(3000, () => {
  console.log("Server up and running");
});
