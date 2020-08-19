const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO: delete, merged this with Guest

const HostSchema = new Schema({
  name: {
    type: String
  },
  spotifyId: {
    type: String,
    required: true
  },
  spotifyAccessToken: {
    type: String,
    required: true
  },
  spotifyRefreshToken: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Host", HostSchema);
