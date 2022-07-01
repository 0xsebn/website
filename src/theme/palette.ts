import { PaletteMode } from "@mui/material";

export const light = {
  alternate: {
    main: "#565656",
    dark: "#000000",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  mode: "light" as PaletteMode,
  primary: {
    main: "#212082",
    light: "#212082",
    dark: "#212082",
    contrastText: "#09103C",
  },
  secondary: {
    main: "#A9E4FF",
    light: "#FFA800",
    dark: "#212082",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#000000",
    secondary: "#A9E4FF",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#ffffff",
    default: "#ffffff",
    level2: "#070C2D",
    level1: "#ffffff",
  },
};

export const dark = {
  alternate: {
    main: "#1a2138",
    dark: "#151a30",
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff",
  },
  mode: "dark" as PaletteMode,
  primary: {
    main: "#1976d2",
    light: "#2196f3",
    dark: "#0d47a1",
    contrastText: "#fff",
  },
  secondary: {
    light: "#FFEA41",
    main: "#FFE102",
    dark: "#DBBE01",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#EEEEEF",
    secondary: "#AEB0B4",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#222B45",
    default: "#222B45",
    level2: "#333",
    level1: "#2D3748",
  },
};
