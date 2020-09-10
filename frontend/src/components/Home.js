import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Divider } from "@chakra-ui/core";
const Home = () => {
  return (
    <Flex
      direction="column"
      bg="darkerBlack"
      alignSelf="center"
      flex="1 0 auto"
      justifyItems="center"
      align="center"
      rounded="lg"
      boxShadow="md"
      borderRadius="2px"
      border="0.5px solid grey"
    >
      <Box>
        <p>Welcome to Playlistify. Select an option below to begin!</p>
        <p>
          <strong>
            Note: A Spotify Premium account is required to host an event.
          </strong>
        </p>
      </Box>
      <Box>
        <Button bg="#1DB954" color="white">
          <Link to="/host">Host Event</Link>
        </Button>
      </Box>
      <Divider />
      <Box>
        <Button bg="#1DB954" color="white">
          <Link to="/join">Join Event</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
