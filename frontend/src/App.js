// Library Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

// General UI Components
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";

// Modals
import SuggestionModal from "./components/modal/SuggestionModal";
import VoteModal from "./components/modal/VoteModal";

// Error Component
import FourOhFour from "./components/FourOhFour";

// Registration Components
import RegisterHost from "./components/registration/RegisterHost";
import LinkSpotify from "./components/registration/LinkSpotify";
import JoinEvent from "./components/registration/JoinEvent";
import InitPlaylist from "./components/registration/InitPlaylist";

// Search and Vote Components
import SearchContainer from "./components/search/SearchContainer";

// test data
const testResults = [
  {
    id: "0100",
    title: "Testing!",
    artist: "Test",
    album: "Test: The Album",
    album_art:
      "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
  },
  {
    id: "0101",
    title: "Testing 123!",
    artist: "Testimony",
    album: "Test: The Album 2",
    album_art:
      "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
  },
  {
    id: "0102",
    title: "Testing 1234!",
    artist: "Tester",
    album: "Test: The Album 3",
    album_art:
      "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
  },
  {
    id: "0103",
    title: "Banana",
    artist: "Bananaphone",
    album: "Banana",
    album_art:
      "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      searchQuery: "",
      queryResults: [],
      suggestionId: "",
      suggestionTitle: "",
      modalType: "vote",
      showModal: true,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSuggestion = this.handleSuggestion.bind(this);
    this.closeOpenedModal = this.closeOpenedModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.findTitle = this.findTitle.bind(this);
  }

  findTitle = (id) => {
    const song = testResults.find((res) => res.id === id);
    return song.title;
  };

  //TODO: Click anywhere outside of modal to close it
  closeOpenedModal() {
    return this.state.showModal ? this.setState({ showModal: false }) : null;
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  // Store songId, create suggestion modal
  //TODO: This will need to call backend
  handleSuggestion = (e) => {
    const id = e.target.parentNode.id;
    this.setState({
      suggestionId: id,
      suggestionTitle: this.findTitle(id),
      modalType: "suggestion",
      showModal: true,
    });
  };

  // Used to grab search query from input box
  handleInput = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <Router style={{ overflow: "hidden" }}>
        <div className="App" onClick={this.closeOpenedModal}>
          {this.state.showModal
            ? (this.state.modalType === "suggestion" && (
                <SuggestionModal title={this.state.suggestionTitle} />
              ),
              this.state.modalType === "vote" && (
                <VoteModal title={this.state.suggestionTitle} />
              ))
            : null}

          <NavBar />
          <Switch>
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
              <SearchContainer
                handleInput={this.handleInput}
                handleSuggestion={this.handleSuggestion}
                searchResults={testResults}
              />
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
}

export default App;
