const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Suggestion = require("./suggestion");

/*
A Guest attends an Event.
- can be a host (supplied spotifyCredentials for use in Event)
- makes suggestions 
*/

const GuestSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true //TODO: make unique for event, not for all guests
  },
  suggestions: {
    type: [Suggestion]
  },
  event: {
    type: String,
    required: true
  },
  isHost: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Guest", GuestSchema)
//module.exports = GuestSchema;