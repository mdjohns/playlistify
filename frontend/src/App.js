import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import io, { Socket } from "socket.io-client";
import VoteSuggest from "./components/VoteSuggest";

function App() {
  let socket;
  useEffect(() => {
    // socket = io("http://localhost:4000/");
    // socket.on("message", (message) => {
    //   console.log("Socket server message", message);
    //   let output = document.getElementById("display_box");
    //   output.append(`${message}\n`);
    // });
  });

  //let socket = new WebSocket("ws://localhost:4000/");
  let messageText;

  const [result, setResult] = useState();
  const [textValue, setTextValue] = useState();

  //TODO: move this logic to host registration component
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

  const socketLogic = () => {};
  const submitText = () => {
    messageText = document.getElementById("text_input").value;
    socket.emit("message", messageText);
  };

  const openSocket = () => {
    console.log("Creating socket");
  };
  return (
    <div className="App">
      <VoteSuggest />
    </div>
  );
}

export default App;
