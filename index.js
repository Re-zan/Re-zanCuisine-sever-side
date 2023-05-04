const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
const chefData = require("./data/chefData.json");

app.get("/", (req, res) => {
  res.send(chefData);
});

app.get("/chefrecipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefSingleData = chefData.find((data) => parseInt(data.id) === id);
  res.send(chefSingleData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
