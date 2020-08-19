import mongoose from "mongoose";
require("dotenv/config");

const e = process.env;
const dbUrl = `mongodb://${e.MONGO_USERNAME}:${e.MONGO_PASSWORD}@${e.MONGO_HOSTNAME}:${e.MONGO_PORT}/${e.MONGO_DB}`;

mongoose.connect(dbUrl, {
  authSource: "admin",
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("🍑 Connected to Mongo!");
});

mongoose.connection.on("error", (err) => {
  console.log(`❗Mongo Default Connection Error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("🔴 Mongo Default connection disconnected");
});
