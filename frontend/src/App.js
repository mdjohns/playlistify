import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState();
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
