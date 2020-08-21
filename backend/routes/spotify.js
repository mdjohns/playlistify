const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const router = express.Router();
const Host = require("../models/host");
const Event = require("../models/event");
const createJoinCode = require("./utils/createJoinCode");
dotenv.config();



module.exports = router;
