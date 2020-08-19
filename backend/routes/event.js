const express = require("express");
const router = express.Router();

const Host = require("../models/host");

router.post("/join_event", (req, res) => {
  Host.findOne({ event: req.join_code }, (err, host) => {});
});
