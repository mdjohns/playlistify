import React from "react";

const SpotifyTest = () => {
  const go = () => {
    fetch("http://localhost:4000/spotify/login", {
      mode: "cors",
      redirect: "follow"
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <button>
      <a href="http://localhost:4000/spotify/login">Go</a>
    </button>
  );
};

export default SpotifyTest;
