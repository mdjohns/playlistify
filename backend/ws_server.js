module.exports = (io) => {
  console.log("🕸  Waiting for Websocket connection...");
  io.on("connection", (socket) => {
    console.log(`🎉 Client connected`);

    // Received a new suggestion
    socket.on("suggest", (msg) => {
      //TODO: logging suggestions to DB?
      console.log(`New suggestion: ${msg}`);
      io.emit("suggest", msg);
    });

    // Received a new vote
    socket.on("vote", (msg) => {
      console.log(`Vote: ${msg}`);
      io.emit("vote", msg);
    });

    socket.on("disconnect", () => {
      console.log("⬛ Client disconnected!");
    });
  });
};
