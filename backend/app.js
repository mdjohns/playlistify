import http from "http";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv/config");
const db = require("./db");

const PORT = 4000;
const app = express();

// Middleware
app.use(cors());

// Import and setup routes
const accountRoutes = require("./routes/account");
app.use("/account", accountRoutes);

// Create http and attach ws server
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
const ws = require("./ws_server")(io);

// Start server
httpServer.listen(PORT, () => {
  console.log("🌊 Starting Express...");
  console.log(`🎧 Listening on port ${PORT}!`);
});
