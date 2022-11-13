const express = require("express");
const app = express();
const port = process.env.PROD_PORT || 9443;
const whatIRead = require("./whatiread");
const whatIHaveDone = require("./whatihavedone");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://aman.monster");
  next();
});
app.get("/", (req, res) => {
  res.end("this is my bum");
});
app.get("/what-i-read", (req, res) => {
  res.send(whatIRead);
});
app.get("/what-i-have-done", (req, res) => {
  res.send(whatIHaveDone);
});

app.listen(port, () => console.log(`brain listening on port ${port}!`));
