import React from "react";

// Component imports
import Results from "./Results";
import SearchInput from "./SearchInput";

function SearchContainer(props) {
  return (
    <div>
      <SearchInput handleInput={props.handleInput} />
      <Results
        searchResults={props.searchResults}
        handleSuggestion={props.handleSuggestion}
      />
    </div>
  );
}

export default SearchContainer;
