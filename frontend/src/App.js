// Library Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Component Imports
import NavBar from './components/NavBar';
import Test from './components/Test';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Test />
      </div>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
