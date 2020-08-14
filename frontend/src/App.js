import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import VoteSuggest from "./components/VoteSuggest";
import HostEvent from "./components/HostEvent";
import JoinEvent from "./components/JoinEvent";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SpotifyTest from "./components/SpotifyTest";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/host">
            <HostEvent />
          </Route>
          <Route path="/spotify">
            <SpotifyTest />
          </Route>
          <Route path="/join">
            <JoinEvent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
