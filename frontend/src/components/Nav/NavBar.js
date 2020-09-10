import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Box, Flex, Text, Image, PseudoBox } from "@chakra-ui/core";

function NavBar(props) {
  return (
    <Flex
      as="nav"
      bg="darkerBlack"
      flex="0 0 auto"
      justify="space-between"
      padding="0.5rem"
      align="center"
      borderBottom="0.5px solid grey"
      borderRadius="4px"
    >
      <PseudoBox
        _hover={{
          textShadow: "1px 0px 0px white;"
        }}
      >
        <Text>
          <Link to="/">{props.title}</Link>
        </Text>
      </PseudoBox>
      <Box paddingLeft="1rem">
        <Link to="/">
          <Image
            src={props.image}
            htmlHeight="2rem"
            htmlWidth="2rem"
            size="2rem"
          />
        </Link>
      </Box>
      <Box>{props.joinCode ? <Text>Code: {props.joinCode}</Text> : ""}</Box>
    </Flex>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  joinCode: PropTypes.string
};
export default NavBar;
