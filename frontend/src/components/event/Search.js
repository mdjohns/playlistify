import React from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
  Stack
} from "@chakra-ui/core";

function Search(props) {
  return (
    <Stack align="center">
      <InputGroup rounder="1">
        w="75%"
        <InputLeftElement color="black" children={<Icon name="search" />} />
        <Input
          size="md"
          color="black"
          placeholder={props.name}
          placeholderColor="black"
          value={props.inputValue}
          onChange={(e) => props.handleInput(e.target.value)}
        />
      </InputGroup>

      {/* <input type="text" value={props.inputValue} onChange={(e) => props.handleInput(e.target.value)} /> */}
    </Stack>
  );
}

Search.propTypes = {
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired
};
export default Search;
