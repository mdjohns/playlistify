// Library Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// Component Imports
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Test from './components/Test';
import RegisterHost from './components/RegisterHost';
import JoinEvent from './components/JoinEvent';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path="/register">
          <RegisterHost />
        </Route>

        <Route path="/join">
          <JoinEvent />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
