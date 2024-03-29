import { Link } from "react-scroll";
import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

import { getThemeColor } from "../../utils/helpers";

export const NavbarLinkContainer = styled(Link)`
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ activeStyle, index }) =>
    activeStyle === index
      ? `${CONSTANTS.colors.spaceGreen}`
      : `${CONSTANTS.colors.offWhite}`};
  font-family: "Open Sans";
  font-weight: bold;
  padding: ${({ sidebar }) => (sidebar === "true" ? "1.5em 1.25em" : "1em")};
  font-size: 1.1em;
  border-bottom: ${({ sidebar, theme }) =>
    sidebar === "true" && theme
      ? `1px solid ${CONSTANTS.colors.gray_4}`
      : "none"};

  &:first-child {
    border-top: ${({ sidebar }) =>
      sidebar === "true" && `1px solid ${CONSTANTS.colors.gray_4}`};
  }

  &:hover {
    background: ${({ sidebar }) => sidebar === "true" && "rgba(0, 0, 0, 0.2)"};
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
