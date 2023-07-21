import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const LinkWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 4.5em;
  color: ${CONSTANTS.colors.offWhite};
  gap: 1em;
  margin-top: 1em;

  a {
    /* pointer-events: ${({ github, link }) =>
      github === "false" || link === "false" ? "none" : "auto"}; */
    width: 5em;
    transition: 0.3s;
    cursor: pointer;
    color: ${CONSTANTS.colors.offWhite};

    &:hover {
      color: ${CONSTANTS.colors.spaceGreen};
    }
  }
`;
