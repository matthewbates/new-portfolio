import { LinkWrapper } from "./ProjectLinkElements";

import ToolTip from "../Tooltip";
import { Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Github from "../../assets/icons/links/github";
import Site from "../../assets/icons/links/siteLink.js";

import { TARGET, REL } from "../../utils/data";

export default function ProjectLink({
  github,
  link,
  tooltipGithub,
  tooltipLink,
}) {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            fontFamily: "Raleway",
            padding: "0.5em",
          },
        },
      },
    },
  });
  return (
    <LinkWrapper $github={github} $link={link}>
      <ThemeProvider theme={theme}>
        <Tooltip title={tooltipGithub}>
          {github === "false" ? (
            <a>
              <Github />
            </a>
          ) : (
            <a href={github} target={TARGET} rel={REL}>
              <Github />
            </a>
          )}
        </Tooltip>
        <Tooltip title={tooltipLink}>
          {link === "false" ? (
            <a>
              <Site />
            </a>
          ) : (
            <a href={link} target={TARGET} rel={REL}>
              <Site />
            </a>
          )}
        </Tooltip>
      </ThemeProvider>
    </LinkWrapper>
  );
}
