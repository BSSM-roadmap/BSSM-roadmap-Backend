const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("테스트");
});

app.listen(8080, () => {
  console.log("listen");
});
