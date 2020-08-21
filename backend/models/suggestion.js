const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
A suggestion is a song suggested by a Guest to be added to an Event's playlist.
This schema keeps track of whether or not it was added to the playlist,
as well as Spotify's track object:
https://developer.spotify.com/documentation/web-api/reference/object-model/#track-object-full
*/
const SuggestionSchema = new Schema({
  isInPlaylist: {
    type: Boolean,
    required: true
  },
  spotifyTrackObject: {
    type: Map,
    of: String,
    required: true
  }
});

module.exports = SuggestionSchema;