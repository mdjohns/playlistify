import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import io, { Socket } from "socket.io-client";

function App() {
  const [result, setResult] = useState();
  const [textValue, setTextValue] = useState();
  const clicked = () => {
    const currentUrl = window.location.href;
    const codeQueryStr = currentUrl.substring(currentUrl.search(/(?=\?)(.*)/));
    fetch("http://localhost:4000/account/link_spotify" + codeQueryStr).then(
      (response) => {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
        });
      }
    );
  };

  const openSocket = () => {
    console.log("Creating socket");
    let socket = new WebSocket("ws://localhost:4000/");
    socket.onopen = function () {
      console.log("Socket open.");
      socket.send(
        JSON.stringify({
          message: "What is the meaning of life, the universe and everything?"
        })
      );
      console.log("Message sent.");
    };
    socket.onmessage = function (message) {
      console.log("Socket server message", message);
      let data = JSON.parse(message.data);
      document.getElementById("response").innerHTML = JSON.stringify(
        data,
        null,
        2
      );
    };
  };
  return (
    <div className="App">
      <header className="App-header">
        <button>
          <a href="http://localhost:4000/account/authorize_spotify">
            Auth Spotify
          </a>
        </button>
        <button onClick={clicked}>Link Spotify!</button>

        <pre>{JSON.stringify(result)}</pre>
        <pre>{textValue}</pre>
      </header>

      <div>
        <h1>WEBSOCKET STUFF!</h1>
        <button onClick={openSocket}>Open WS</button>
        <input
          type="text"
          id="textBox"
          onChange={setTextValue(
            document.getElementById("textBox").innerHTML | ""
          )}
        />
        <p id="response"></p>
      </div>
    </div>
  );
}

export default App;
