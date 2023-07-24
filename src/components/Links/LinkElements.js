import { Link } from "react-scroll";
import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const NavbarLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Arial";
  cursor: pointer;
  text-transform: ${({ sidebar }) =>
    sidebar === "true" ? "none" : "uppercase"};
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  /* padding: 0.2em; */
  transition: 0.3s;
  font-size: ${({ sidebar }) => sidebar == "true" && "1.5em"};
  color: ${({ activeStyle, index }) =>
    activeStyle === index
      ? `${CONSTANTS.colors.spaceGreen}`
      : `${CONSTANTS.colors.offWhite}`};
  font-family: "Raleway";
  font-weight: 100;
  text-transform: uppercase;
  /* border-bottom: ${({ sidebar }) => sidebar === "true" && "1px solid white"}; */

  @media screen and (min-width: 768px) {
    display: flex;

    &:last-child {
      margin-right: 1.5em;
    }
  }

  &:hover {
    color: ${CONSTANTS.colors.spaceGreen};
  }
`;
