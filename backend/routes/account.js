const express = require("express");
const querystring = require("querystring");
const dotenv = require("dotenv");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const router = express.Router();
const Event = require("../models/event");
const createJoinCode = require("./utils/createJoinCode");
const Guest = require("../models/guest");
dotenv.config();

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-read-private",
  "streaming",
  "playlist-modify-public"
];

const redirectUrl = "http://localhost:3000/test";

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_CALLBACK_URL
    },
    function (accessToken, refreshToken, profile, done) {
      /*
      TODO: 
      update this function to use the new model changes to event and guest
      - create a new event using these spotify creds
      - create a new guest for this user (isHost==true), might have to be on a diff endpoint
      - add new guest to event's guest array and populate host field
      */
      Event.findOne(
        {
          'spotifyCredentials.accessToken': accessToken
        },
        function (err, event) {
          if (err) {
            return done(err);
          }
          if (!event) {
            console.log("❗No event found..creating new one");
            const newJoinCode = createJoinCode();
            event = new Event({
              joinCode: newJoinCode,
              spotifyCredentials: {
                accessToken: accessToken,
                refreshToken: refreshToken
              }
            });
            console.log(`👍 New Event created: ${event.joinCode}`);
            console.log(`⚡ New Guest created!`)
            const eventHost = new Guest({
              name: "temp", // will be overridden later
              event: newJoinCode,
              isHost: true
            })

            event.save(function (err) {
              if (err) console.log(err);
              return done(err, event);
            });
            eventHost.save(function (err) {
              if (err) console.log(err);
              return done(err, eventHost);
            })
          } else {
            console.log(`✅ Found existing event: ${event.joinCode}`);
            return done(err, event);
          }
        }
      );
    }
  )
);

router.use(passport.initialize());

router.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: scopes,
    showDialog: true
  }),
  function (req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  }
);

router.get(
  "/auth/callback",
  passport.authenticate("spotify", {
    failureRedirect: process.env.SPOTIFY_CALLBACK_URL
  }),
  function (req, res) {
    const qs = querystring.stringify({
      "join_code": req.user.joinCode
    })
    res.redirect(redirectUrl + "?" + qs);
  }
);


module.exports = router;
