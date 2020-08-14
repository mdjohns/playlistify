import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const passport = require("passport");
const cors = require("cors");

dotenv.config();

const db = require("./db");
const PORT = 4000;
const app = express();

// Middleware

app.options("*", cors());
app.use(passport.initialize());
app.use(cors());
// Import and setup routes
const spotifyRoutes = require("./routes/spotify");
app.use("/spotify", spotifyRoutes);

// Create http and attach ws server
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
const ws = require("./ws_server")(io);

// Start server
httpServer.listen(PORT, () => {
  console.log("🌊 Starting Express...");
  console.log(`🎧 Listening on port ${PORT}!`);
});
