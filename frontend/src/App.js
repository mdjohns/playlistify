import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HostEvent from "./components/registration/HostEvent";
import JoinEvent from "./components/registration/JoinEvent";
import Home from "./components/Home";
import Nav from "./components/Nav";
import EventHome from './components/event/EventHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/event">
            <EventHome />
          </Route>
          <Route path="/host">
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
  );
}

export default App;
