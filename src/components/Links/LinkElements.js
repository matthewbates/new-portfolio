import { Link } from "react-scroll";
import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const NavbarLinkContainer = styled(Link)`
  font-family: "Arial";
  cursor: pointer;
  text-transform: ${({ sidebar }) =>
    sidebar === "true" ? "none" : "uppercase"};
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  color: ${CONSTANTS.colors.offWhite};
  padding: 0.2em;
  transition: 0.3s;
  font-size: ${({ sidebar }) => (sidebar == "true" ? "1.5em" : null)};
  font-weight: bold;
  
  @media screen and (min-width: 820px) {
    display: flex;

    &:last-child {
      margin-right: 1em;
    }
  }

  &:hover {
    transform: translate(0px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${CONSTANTS.colors.offWhite};
    transform-origin: bottom right;
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;
