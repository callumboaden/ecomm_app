const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("account created");
  // get access to email, password, passwordConfirmation
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
