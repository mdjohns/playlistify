import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv/config");

const app = express();
const serverPort = 4000;

// Auth

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

// Import routes
const accountRoutes = require("./routes/account");

// Routes
app.use("/account", accountRoutes);

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}...`);
});
