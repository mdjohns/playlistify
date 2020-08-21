const express = require("express");
const querystring = require("querystring");
const router = express.Router();
const bodyParser = require("body-parser");
const Event = require("../models/event");
const Guest = require("../models/guest");
/*
join event:
- check to see if event exists using event code, return error if not
- if event exists, redirect to event page to open ws connection
*/

const EVENT_REDIRECT_URL = 'http://localhost:3000/event';

router.post("/join_event", (req, res) => {
  const code = req.body.join_code;
  const guestName = req.body.name;
  let isHost = false;
  if (req.body.is_host) {
    isHost = true;
  }

  Event.findOne(
    {
      "joinCode": code
    },
    function (err, event) {
      if (err) {
        res.send(err);
      }
      if (!event) {
        res.status(404).send({ "message": "No event found!" })
      }
      else {
        const newGuest = new Guest({
          name: guestName,
          event: code,
          isHost: isHost
        })
        newGuest.save(function (err) {
          if (err) console.log(err);
        })
        event.guests.push(newGuest);
        event.save(function (err) {
          if (err) console.log(err);
        })
        console.log(`Pushed guest to event's guests array.`);
        console.log("Guests: ", event.guests);
        const qs = querystring.stringify({
          'name': newGuest.name,
          'join_code': newGuest.code
        })
        res.status(200).send({
          "message": "success",
          "name": newGuest.name,
          "join_code": event.joinCode
        })
      }
    })

});

module.exports = router;