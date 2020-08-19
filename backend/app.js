const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const cors = require("cors");

dotenv.config();

const db = require("./db/db");
const PORT = 5000;
const app = express();

// Middleware
app.use(cors());
// Import and setup routes
const spotifyRoutes = require("./routes/spotify");
app.use("/spotify", spotifyRoutes);
//app.use(passport.initialize());

// Create http and attach ws server
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
const ws = require("./ws_server")(io);

// Start server
httpServer.listen(PORT, () => {
  console.log("🌊 Starting Express...");
  console.log(`🎧 Listening on port ${PORT}!`);
});
