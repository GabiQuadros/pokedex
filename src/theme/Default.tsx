import { createTheme } from "@mui/material";

const themeDefault = createTheme({
  palette: {
    primary: {
      main: "#253c5e",
    },
    secondary: {
      main: "#e8833b",
    },
    background: {
      default: "rgba(7, 7, 7, 0.116)",
      paper: "rgba(7, 7, 7, 0.63)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default themeDefault;
