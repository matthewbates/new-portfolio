import { Button as MuiButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import CONSTANTS from "../../../utils/constants";

export const Button = ({ theme, toggle }) => {
  return (
    <MuiButton
      onClick={toggle}
      sx={{
        display: "flex",
        border: "1px solid #ffffff",
        padding: "1em",
        color: "#ffffff",
        gap: "0.5em",
        margin: "auto",
        marginTop: "2em",
        marginBottom: "2em",
        "&:hover": {
          color: theme === "light" && "#000000",
          backgroundColor: `${
            theme === "light" ? "#ffffff" : `${CONSTANTS.colors.gray_2}`
          }`,
          borderColor: "#ffffff",
        },
      }}
    >
      {theme === "light" ? (
        <>
          <LightModeIcon /> Switch to dark mode
        </>
      ) : (
        <>
          <ModeNightIcon /> Switch to light mode
        </>
      )}
    </MuiButton>
  );
};
