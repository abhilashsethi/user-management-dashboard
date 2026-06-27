import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#26a69a",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: "Roboto, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;