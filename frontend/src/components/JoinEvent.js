import React, { useState } from "react";

const JoinEvent = () => {
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (item) => {
    return item === "";
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleJoinCodechange = (e) => {
    setJoinCode(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateInput(name)) {
      setErrorMessage("Please enter a name.");
    }
    if (validateInput(joinCode)) {
      setErrorMessage("Please enter a Join Code.");
    } else {
      // attempt to join event
      setErrorMessage("Success!");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div id="error_message">
        <strong>{errorMessage}</strong>
      </div>
      <label for="name">Name:</label>
      <input type="text" name="name" onChange={handleNameChange} />

      <label for="join_code">Join Code:</label>
      <input type="text" name="join_code" onChange={handleJoinCodechange} />

      <button>Join Event</button>
    </form>
  );
};

export default JoinEvent;
