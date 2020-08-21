const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Suggestion = require("./suggestion");
const SpotifyCredentials = require("./spotifyCredentials");
const Guest = require("./guest");

/*
An Event is attended by Guests (and one Host).
Successful suggestions are added to playlistTracks.
*/

const EventSchema = new Schema({
  joinCode: {
    type: String,
    required: true,
    unique: true
  },
  spotifyCredentials: {
    type: SpotifyCredentials,
    required: true,
    unique: true
  },
  hostName: {
    type: String
  },
  guests: [{ type: Schema.Types.ObjectId, ref: 'Guest' }],
  playlistTracks: [Suggestion]

});

module.exports = mongoose.model("Event", EventSchema);
