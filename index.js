const express = require("express");
const app = express();
const port = process.env.PROD_PORT || 9443;
const whatIRead = require("./whatiread");
const whatIHaveDone = require("./whatihavedone");
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.json());
app.use(limiter);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();

  next();
});
app.get("/", (req, res) => {
  res.end("this is my bum");
});
app.get("/what-i-read", (req, res) => {
  return res.send(whatIRead);
});
app.get("/what-i-have-done", (req, res) => {
  return res.send(whatIHaveDone);
});

app.listen(port, () => console.log(`brain listening on port ${port}!`));
