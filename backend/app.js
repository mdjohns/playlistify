import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
require("dotenv/config");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());

// Import routes
const accountRoutes = require("./routes/account");
const voteRoutes = require("./routes/vote");

// Routes
app.use("/account", accountRoutes);
app.use("/vote", voteRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${serverPort}...`);
});
