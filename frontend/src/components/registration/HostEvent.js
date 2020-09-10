import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Stack,
  Button,
  Text,
  Progress
} from "@chakra-ui/core";

import PageTitle from "../PageTitle";

const HostEvent = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title={"Host Event"} />
      <Box p={5} shadow="md" borderWidth="1px">
        <Progress value={25} isAnimated color="green" />
      </Box>

      <Box p={5} shadow="md" borderWidth="1px">
        <Alert status="success" variant="subtle">
          Start by authorizing the Playlistify app with your Spotify account.
        </Alert>
      </Box>

      <Box textAlign="center">
        <Button>
          <a href="http://localhost:5000/account/auth/spotify">
            Authorize Spotify
          </a>
        </Button>
      </Box>
    </Stack>
  );
};

export default HostEvent;
