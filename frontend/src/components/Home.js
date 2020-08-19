import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Welcome to Playlistify. Select an option below to begin!</p>
      <p>
        <strong>
          Note: A Spotify Premium account is required to host an event.
        </strong>
      </p>
      <button>
        <Link to="/host">Host Event</Link>
      </button>
      <button>
        <Link to="/join">Join Event</Link>
      </button>

      <button>
        <Link to="/spotify">Spotify</Link>
      </button>
    </div>
  );
};

export default Home;
