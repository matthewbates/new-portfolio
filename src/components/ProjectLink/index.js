import { LinkWrapper } from "./ProjectLinkElements";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";

import Github from "../../assets/icons/github";
import Site from "../../assets/icons/siteLink";

import { TARGET, REL } from "../../utils/data";

export default function ProjectLink({
  github,
  link,
  disabledGithub,
  disabledLink,
}) {
  return (
    <LinkWrapper github={github} link={link}>
      <Tooltip title={disabledGithub}>
        <a
          href={github}
          target={TARGET}
          rel={REL}
          disabled={github === "false" || link === "false"}
        >
          <Github />
        </a>
      </Tooltip>
      <Tooltip title={disabledLink}>
        <a
          href={link}
          target={TARGET}
          rel={REL}
          disabled={github === "false" || link === "false"}
        >
          <Site />
        </a>
      </Tooltip>
    </LinkWrapper>
  );
}
