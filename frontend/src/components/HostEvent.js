import React, { useState } from "react";

const HostEvent = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/spotify/auth");
  };
  return (
    <div>
      <h3>
        Choose a display name and continue to authorize your Spotify account!
      </h3>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <button>Continue</button>
      </form>
    </div>
  );
};

export default HostEvent;
