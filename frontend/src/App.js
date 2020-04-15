// Library Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// General UI Components
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';

// Error Component
import FourOhFour from './components/FourOhFour';

// Registration Components
import RegisterHost from './components/registration/RegisterHost';
import LinkSpotify from './components/registration/LinkSpotify';
import JoinEvent from './components/registration/JoinEvent';
import InitPlaylist from './components/registration/InitPlaylist';

// Search and Vote Components
import Search from './components/search/Search';

import VoteModal from './components/vote/VoteModal';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
      
      <Switch>
        <Route path="/bbb">
          <VoteModal />
        </Route>

        <Route path="/register/init_playlist">
          <InitPlaylist />
        </Route>

        <Route path="/register/link_spotify">
          <LinkSpotify />
        </Route>

        <Route path="/register">
          <RegisterHost />
        </Route>

        <Route path="/join">
          <JoinEvent />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
