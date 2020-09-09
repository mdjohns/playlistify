import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import "./App.css";
import HostEvent from "./components/registration/HostEvent";
import SelectName from './components/registration/HostEvent/SelectName'
import JoinEvent from "./components/registration/JoinEvent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import EventHome from './components/event/EventHome';
import SpotifyLogo from './image/SpotifyIcon.png'
function App() {
  const [joinCode, setJoinCode] = useState("");
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <div className="App">
          <NavBar title={"Playlistify"} joinCode={joinCode} image={SpotifyLogo} />

          <Switch>
            <Route path="/event">
              <EventHome />
            </Route>
            <Route path="/host/set_name">
              <SelectName />
            </Route>
            <Route path="/host">
              <HostEvent />
            </Route>
            <Route path="/host/set_name">
              <HostEvent />
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
    </ThemeProvider>

  );
}

export default App;
