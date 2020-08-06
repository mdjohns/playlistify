import express, { response } from "express";
import axios from "axios";
import qs from "qs";
const router = express.Router();
require("dotenv");

/*
*****************************************************
The Account route serves four endpoints.
The endpoints only concern a "Host" user.
1. Register a new Host.
2. Authorize Playlistify with Host's Spotify account.
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
].join(" ");

let tokenPayload = {
  grant_type: "authorization_code",
  code: "", // returned from initial req
  redirect_uri: redirectUri,
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET
};

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
      console.log("SUCESS!!");
      res.send("YEET");
      console.log(response);
    })
    .catch((error) => {
      res.send("ERROR");
      console.log(error);
    });
});

module.exports = router;
