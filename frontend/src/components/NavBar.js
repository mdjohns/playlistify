import React from "react";
import { Flex, Text, Box, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Flex w="100%" bg="black" justifyContent="space-between" alignItems="center" px={5} py={3}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src={props.image}
          size={30}
          marginRight={3}
        />
        <Text color="white"><Link to="/">{props.title}</Link></Text>
      </Flex>

      <Box>
        {props.joinCode ?
          <Text color="white">
            Join Code: {props.joinCode}
          </Text>
          : ""
        }

      </Box>
    </Flex>
  );
};


NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  joinCode: PropTypes.string
}
export default NavBar;
