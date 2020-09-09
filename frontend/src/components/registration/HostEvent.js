import React, { useState } from "react";
import PageTitle from '../PageTitle';

const HostEvent = () => {
  return (
    <>
      <PageTitle title={"Host Event"} />
      <p>Click below to authorize the Playlistify app with Spotify.</p>
      <p>
        Once authorized, you will choose a display name and be placed in your
        event.
      </p>

      <button>
        <a href="http://localhost:5000/account/auth/spotify">Authorize Spotify</a>
      </button>
    </>
  );
};

export default HostEvent;
