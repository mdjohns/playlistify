import React, { useState } from "react";

const HostEvent = () => {
  return (
    <div>
      <h1>Host Event</h1>
      <p>Click below to authorize the Playlistify app with Spotify.</p>
      <p>
        Once authorized, you will choose a display name and be placed in your
        event.
      </p>

      <button>
        <a href="http://localhost:5000/spotify/auth">Authorize Spotify</a>
      </button>
    </div>
  );
};

export default HostEvent;
