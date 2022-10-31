const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const whatIRead = require("./whatiread");
const whatIHaveDone = require("./whatihavedone");

app.use(express.json());
app.use(cors({ origin: ["https://aman.monster", "http://localhost:3000"] }));
app.get("/", (req, res) => {
  res.end("pong");
});
app.get("/what-i-read", (req, res) => {
  res.send(whatIRead);
});
app.get("/what-i-have-done", (req, res) => {
  res.send(whatIHaveDone);
});

app.listen(port, () => console.log(`brain listening on port ${port}!`));
