const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("listen");
});

app.get("/test", (req, res) => {
  res.send("테스트");
});
