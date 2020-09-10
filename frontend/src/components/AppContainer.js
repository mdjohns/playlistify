import React from "react";
import { Flex, Box } from "@chakra-ui/core";

// All components after NavBar should take up remaining view space
function AppContainer(props) {
  return (
    <Flex
      direction="column"
      flex={1}
      width="100%"
      height="100%"
      bg="black"
      color="white"
    >
      {props.children}
    </Flex>
  );
}

export default AppContainer;
