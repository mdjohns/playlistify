import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

const HostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  spotifyId: {
    type: String
  },
  spotifyAccessToken: {
    type: String
  },
  spotifyRefreshToken: {
    type: String
  },
  associatedEvent: {
    type: String
  }
});

module.exports = mongoose.model("Host", HostSchema);
