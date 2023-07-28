import { LinkWrapper } from "./ProjectLinkElements";

import ToolTip from "../Tooltip";

import Github from "../../assets/icons/github";
import Site from "../../assets/icons/siteLink";

import { TARGET, REL } from "../../utils/data";

export default function ProjectLink({
  github,
  link,
  tooltipGithub,
  tooltipLink,
}) {
  return (
    <LinkWrapper github={github} link={link}>
      <ToolTip title={tooltipGithub}>
        {github === "false" ? (
          <a>
            <Github />
          </a>
        ) : (
          <a href={github} target={TARGET} rel={REL}>
            <Github />
          </a>
        )}
      </ToolTip>
      <ToolTip title={tooltipLink}>
        {link === "false" ? (
          <a>
            <Site />
          </a>
        ) : (
          <a href={link} target={TARGET} rel={REL}>
            <Site />
          </a>
        )}
      </ToolTip>
    </LinkWrapper>
  );
}
