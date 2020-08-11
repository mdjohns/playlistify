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

// Create http and ws servers
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);

// WS logic (test)
io.on("connection", (socket) => {
  console.log("Client connected!");

  socket.on("message", (msg) => {
    io.emit("message", msg);
    console.log("received message");
    console.log(msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected!");
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log("🌊 Starting Express...");
  console.log(`🎧 Listening on port ${PORT}!`);
});
