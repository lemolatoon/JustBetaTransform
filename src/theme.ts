import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f0e5ed",
      paper: "#f0ede5",
    },
    primary: {
      main: "#e5f0e7",
      light: "#f0ede5",
      dark: "#f0e5ed",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#e5f0e7",
          color: "#2c3e50",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#d5e0d7",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#e5f0e7",
          color: "#000000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0ede5",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f0e5ed",
        },
      },
    },
  },
});
