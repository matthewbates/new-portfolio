import { Link } from "react-scroll";
import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const NavbarLinkContainer = styled(Link)`
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: ${({ sidebar }) => sidebar === "true" && "1.25em"};
  color: ${({ activeStyle, index }) =>
    activeStyle === index
      ? `${CONSTANTS.colors.spaceGreen}`
      : `${CONSTANTS.colors.offWhite}`};
  font-family: "Raleway";
  font-weight: bold;
  padding: 2.25em;
  border-bottom: ${({ sidebar }) =>
    sidebar === "true" && `1px solid ${CONSTANTS.colors.gray_4}`};

  @media screen and (min-width: 768px) {
    display: flex;
  }

  &:first-child {
    border-top: ${({ sidebar }) =>
      sidebar == "true" && `1px solid ${CONSTANTS.colors.gray_4}`};
  }

  /* &:hover {
    color: ${CONSTANTS.colors.spaceGreen};
  } */
`;
