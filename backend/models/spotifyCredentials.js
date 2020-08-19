const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpotifyCredentialsSchema = new Schema({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  expiresIn: {
    type: String,
    required: true
  }
});

module.exports("SpotifyCredentials", SpotifyCredentialsSchema);
