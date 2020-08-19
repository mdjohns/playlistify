const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const router = express.Router();
const Host = require("../models/host");
const Event = require("../models/event");
const createJoinCode = require("./utils/createJoinCode");
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
    function (accessToken, refreshToken, expiresIn, profile, done) {
      /*
      TODO: 
      update this function to use the new model changes to event and guest
      - create a new event using these spotify creds
      - create a new guest for this user (isHost==true), might have to be on a diff endpoint
      - add new guest to event's guest array and populate host field
      */
      Event.findOne(
        {
          "SpotifyCredentials.accessToken": accessToken
        },
        function (err, event) {
          if (err) {
            return done(err);
          }
          //No event was found, create new one
          if (!event) {
            console.log("❗No event found..creating new one");
            event = new Event({
              joinCode: createJoinCode(),
              spotifyCredentials: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                expiresIn: expiresIn
              }
            });

            host = new Host({
              spotifyId: profile.id,
              spotifyAccessToken: accessToken,
              spotifyRefreshToken: refreshToken,
              associatedEvent: createJoinCode()
            });
            console.log(`👍 Host profile created for ${host.spotifyId}`);
            console.log(`🎊 Event code generated: ${host.associatedEvent}`);
            host.save(function (err) {
              if (err) console.log(err);
              return done(err, host);
            });
          } else {
            //found user. Return
            console.log(`✅ Found existing host: ${host.spotifyId}`);
            return done(err, host);
          }
        }
      );
    }
  )
);

router.use(passport.initialize());

router.get(
  "/auth",
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
    // Successful authentication, redirect home.

    res.redirect("http://localhost:3000/test");
  }
);

module.exports = router;
