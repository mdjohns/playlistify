const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();


const PORT = 5000;
const app = express();
const db = require("./db/db");

// Middleware
app.use(cors());
app.use(bodyParser({ "extended": true }));

// Import and setup routes
const spotifyRoutes = require("./routes/spotify");
const accountRoutes = require("./routes/account");
const eventRoutes = require("./routes/event");
app.use("/spotify", spotifyRoutes);
app.use("/account", accountRoutes);
app.use("/event", eventRoutes);

// Create http and attach ws server
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
const ws = require("./ws_server")(io);

// Start server
httpServer.listen(PORT, () => {
  console.log("🌊 Starting Express...");
  console.log(`🎧 Listening on port ${PORT}!`);
});
