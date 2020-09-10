import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/core";
import Search from "./Search";
import CurrentlyPlaying from "./CurrentlyPlaying";
import queryString from "query-string";

const EventHome = (props) => {
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  useEffect(() => {
    const qs = queryString.parse(window.location.search);

    if ("join_code" in qs) {
      setJoinCode(qs["join_code"]);
    }
    if ("name" in qs) {
      setName(qs["name"]);
    }
  }, [joinCode, name]);
  return (
    <>
      <Flex flex={1} direction="column">
        <Search
          name={"Search for an artist or song"}
          inputValue={name}
          handleInput={setName}
        />
        <pre>Hi, {name}</pre>
        <pre>Welcome to {joinCode}</pre>
      </Flex>
      <CurrentlyPlaying />
    </>
  );
};

export default EventHome;
