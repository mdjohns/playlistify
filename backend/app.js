const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv/config");

const app = express();

// Auth
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://playlistfy-auth/.well-known/jwks.json'
  }),

  audience: 'https://playlistfy-auth',
  issuer:
  algorithms: ["RS256"]
})

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

// Import routes
const accountRoutes = require("./routes/account");

// Routes
app.use("/account", accountRoutes);

app.get("/", (req, res) => {
  res.send("We are on home!");
});

app.listen(3000);
