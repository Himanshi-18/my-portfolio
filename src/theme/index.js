import { createTheme } from "@mui/material/styles";
import colors from "../styles/color";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.secondary },
    secondary: { main: colors.accent },
    error: { main: "#ff4d4d" },
    background: {
      default: colors.dark1,
      paper: colors.dark2,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.textLightMuted,
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600, borderRadius: 50 },
      },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 600 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: "rgba(242, 140, 58, 0.18)" },
          "&:hover fieldset": { borderColor: "rgba(242, 140, 58, 0.36)" },
        },
      },
    },
  },
});

export default theme;
