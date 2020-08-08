import http from "http";
import express from "express";
import cors from "cors";
require("dotenv/config");
const webSocket = require("ws");

const PORT = 4000;
const app = express();

// Middleware
app.use(cors());

// Import and setup routes
const accountRoutes = require("./routes/account");
app.use("/account", accountRoutes);

// Create http and ws servers
const httpServer = http.createServer(app);
const wss = new webSocket.Server({ server: httpServer });

wss.on("connection", function connection(ws) {
  console.log("WS connected!");
  ws.on("message", function incoming(message) {
    console.log(`received: ${message}`);

    ws.send(
      JSON.stringify({
        answer: 42
      })
    );
  });
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
