import express from "express";
const router = express.Router();
const io = require("socket.io")(router);

/*
******************************************************
The Vote route serves __ endpoints.
This is also where the websockets live.
These endpoints concern both "Host" and "Guest" users.
******************************************************
*/

io.onconnection();
