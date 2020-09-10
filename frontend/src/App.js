import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import "./App.css";
import playlistifyTheme from "./theme";
import HostEvent from "./components/registration/HostEvent";
import SelectName from "./components/registration/HostEvent/SelectName";
import JoinEvent from "./components/registration/JoinEvent";
import AppContainer from "./components/AppContainer";
import Home from "./components/Home";
import NavBar from "./components/Nav/NavBar";
import EventHome from "./components/event/EventHome";
import SpotifyLogo from "./image/SpotifyIcon.png";
function App() {
  const [joinCode, setJoinCode] = useState("TEST");
  return (
    <ThemeProvider theme={playlistifyTheme}>
      <CSSReset />
      <AppContainer>
        <Router>
          <NavBar
            title={"Playlistify"}
            joinCode={joinCode}
            image={SpotifyLogo}
            displayName={"Dylan"}
          />

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
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
