const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const whatIRead = require("./whatiread");
const whatIHaveDone = require("./whatihavedone");
const whatIHaveHeard = require("./whatihaveheard");
const rateLimit = require("express-rate-limit");
const whatIReadSkeme = require("./alwaysSchemin/whatIReadSkeme");
const whatIHaveDoneSkeme = require("./alwaysSchemin/whatIHaveDoneSkeme");
const whatIHaveHeardSkeme = require("./alwaysSchemin/whatihaveheardskeme");

const app = express();
const port = process.env.PROD_PORT || 9443;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const whereDatComeFrom =
  process.env.NODE_ENV === "production"
    ? "https://aman.monster"
    : "http://localhost:3000";

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", whereDatComeFrom);
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});
app.get("/", (req, res) => {
  return res.send("this is my bum");
});

const schema = buildSchema(
  `type Query { _empty: String }${whatIReadSkeme}${whatIHaveDoneSkeme}${whatIHaveHeardSkeme}`
);

// The root provides a resolver function for each API endpoint
const root = {
  whatiread: () => whatIRead,
  whatihavedone: () => whatIHaveDone,
  whatihaveheard: () => whatIHaveHeard,
};

app.use(
  "/collectthis",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`brain listening on port ${port}!`));
