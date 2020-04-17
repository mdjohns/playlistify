import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchInput(props) {
  return (
    <div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <span role="img" aria-label="music-note">
              🎵
            </span>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search for a track"
          id="search-box"
          onChange={props.handleInput}
        ></FormControl>
      </InputGroup>
    </div>
  );
}

export default SearchInput;
