import express from "express";
import dontenv from "dotenv";
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const router = express.Router();
const Host = require("../models/host");

dontenv.config();

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "streaming",
  "playlist-modify-public"
];

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_CALLBACK_URL
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      console.log(`Access Token: ${accessToken}`);
      console.log(`Refresh Token: ${refreshToken}`);
      let spotifyId = profile.id;
      process.nextTick(function () {
        Host.findOne({
          spotifyId: spotifyId
        }).then((currentUser) => {
          if (!currentUser) {
            console.log("Creating new Host...");
            const Host = new Host({
              spotifyId: spotifyId,
              spotifyAccessToken: accessToken,
              spotifyRefreshToken: refreshToken
            });

            Host.save(function (err) {
              if (err) console.log(err);
              else {
                console.log(currentUser);
              }
              return done(err, user);
            });
          }
        });
      });
    }
  )
);

router.get(
  "/login",
  passport.authenticate("spotify", {
    scope: scopes,
    showDialog: true
  }),
  function (req, res) {
    console.log(res.accessToken);
    console.log(res.refreshToken);
  }
);

router.get(
  "/callback",
  passport.authenticate("spotify", {
    failureRedirect: "/login"
  }),
  function (req, res) {
    res.redirect("/success");
  }
);

router.get("/success", passport.authenticate("spotify"), (req, res) => {
  res.send("success");
});

module.exports = router;
