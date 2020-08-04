import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const clicked = () => {
    const url = window.location.href;
    const regex = new RegExp(/(?=\?)(.*)/);
    const code = regex.search(url)[0];
    fetch("http://localhost:4000/account/link_spotify" + code).then(
      (response) => {
        setResult(JSON.stringify(response));
      }
    );
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
      </header>
    </div>
  );
}

export default App;
