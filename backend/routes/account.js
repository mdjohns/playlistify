const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Registration endpoint!");
});

router.post("/login", (req, res) => {
  res.send("Login endpoint!");
});

router.post("/link_spotify", (req, res) => {
  res.send("Link spotify endpoint!");
});

module.exports = router;
