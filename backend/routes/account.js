import express from "express";
import axios from "axios";
import qs from "qs";
import mongoose from "mongoose";
import Host from "../models/host";
import dotenv from "dotenv";
import { passportJwtSecret } from "jwks-rsa";
dotenv.config();

const router = express.Router();
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.use(
  new SpotifyStrategy({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: redirectUri
  }),
  function (accessToken, refreshToken, expires_in, profile, done) {
    Host.findOrCreate({ spotifyId: profileId }, function (err, user) {
      return done(err, user);
    });
  }
);

/*
*****************************************************
The Account route serves four endpoints.
The endpoints only concern a "Host" user.
1. Register a new Host.
2. Authorize this app with Host's Spotify account.
3. Link Spotify credentials to Host.
4. Login as an existing Host.
*****************************************************
*/

// External Spotify URLs & resources
const initialAuthUrl = "https://accounts.spotify.com/authorize"; // GET
const tokenUrl = "https://accounts.spotify.com/api/token"; // POST
const redirectUri = "http://localhost:3000"; // where to redirect after authorization
const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "streaming",
  "playlist-modify-public"
];

let tokenPayload = {
  grant_type: "authorization_code",
  code: "", // returned from initial req
  redirect_uri: redirectUri,
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET
};

router.get(
  "/auth/spotify",
  passport.authenticate("spotify"),
  { scope: scopes, showDialogue: true },
  function (req, res) {}
);

router.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.post("/register", (req, res) => {
  res.send("Registration endpoint!");
});

router.post("/login", (req, res) => {
  res.send("Login endpoint!");
});

router.get("/authorize_spotify", (req, res) => {
  res.redirect(
    initialAuthUrl +
      "?response_type=code" +
      "&client_id=" +
      process.env.SPOTIFY_CLIENT_ID +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirectUri)
  );
});

router.get("/link_spotify", (req, res) => {
  const data = qs.stringify({
    grant_type: "authorization_code",
    code: req.query.code,
    redirect_uri: redirectUri
  });

  axios({
    method: "post",
    url: tokenUrl,
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")
    }
  })
    .then((response) => {
      console.log("Spotify successfully authorized and linked to user.");
      res.send({ message: "Spotify succesfully authorized." });
      console.log(response);
    })
    .catch((error) => {
      res.send({ message: error.message });
      console.log(error);
    });
});

module.exports = router;
