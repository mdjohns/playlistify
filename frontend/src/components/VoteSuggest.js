import React, { useState, useEffect, useRef } from "react";
import useSocket from "use-socket.io-client";

const VoteSuggest = () => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [currentSuggestion, setCurrentSuggestion] = useState();
  const URL = "http://localhost:4000/";
  const [socket] = useSocket(URL, {
    autoConnect: false
  });

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    socket.on("suggest", (msg) => {
      setCurrentSuggestion(msg);
    });

    socket.on("vote", (msg) => {
      msg === "yes" ? setYesVotes(yesVotes + 1) : setNoVotes(noVotes + 1);
    });
  });

  const handleInput = () => {
    let suggestion = document.getElementById("suggest_input");
    socket.emit("suggest", suggestion.value);

    suggestion.value = "";
  };

  const handleVote = (vote) => {
    socket.emit("vote", vote);
  };

  return (
    <div>
      <div id="suggest">
        <input type="text" id="suggest_input" />
        <button onClick={handleInput}>Send Suggestion</button>
        <p>Current Suggestion: {currentSuggestion}</p>
      </div>

      <div id="vote">
        <button
          onClick={() => {
            handleVote("yes");
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            handleVote("no");
          }}
        >
          No
        </button>

        <p>Yes Votes: {yesVotes}</p>
        <p>No Votes: {noVotes}</p>
      </div>
    </div>
  );
};

export default VoteSuggest;
