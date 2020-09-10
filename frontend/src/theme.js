import { theme } from "@chakra-ui/core";

const playlistifyTheme = {
  ...theme,
  colors: {
    darkerBlack: "#00000",
    black: "#191414",
    green: "#1DB954",
    white: "#FFFFFF",
    ...theme.colors
  }
};

export default playlistifyTheme;
