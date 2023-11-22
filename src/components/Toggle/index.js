import { IconButton, Tooltip } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import { ToggleContainer } from "./ToggleElements";

import CONSTANTS from "../../utils/constants";

export default function Toggle({ theme, toggle }) {
  const customTheme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            fontFamily: "Open Sans",
            padding: "0.5em",
          },
        },
      },
    },
  });

  return (
    <ToggleContainer>
      <ThemeProvider theme={customTheme}>
        <Tooltip
          placement="left"
          title={theme === "light" ? "Dark Mode" : "Dark Mode"}
        >
          <IconButton
            onClick={toggle}
            sx={{
              padding: ".5em",
              color: theme === "light" ? "#ffffff" : "white",
              border:
                theme === "light"
                  ? `2px solid${CONSTANTS.colors.offWhite}`
                  : `2px solid${CONSTANTS.colors.colorGray400}`,
              background:
                theme === "light"
                  ? `${CONSTANTS.colors.royalBlue}`
                  : `${CONSTANTS.colors.gray_3}`,
            }}
          >
            {theme === "light" ? <LightModeIcon /> : <ModeNightIcon />}
          </IconButton>
        </Tooltip>
      </ThemeProvider>
    </ToggleContainer>
  );
}
