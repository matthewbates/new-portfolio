import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarLinkContainer = styled(Link)`
  font-family: "Arial";
  cursor: pointer;
  text-transform: uppercase;
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};

  @media screen and (min-width: 820px) {
    display: flex;

    &:last-child {
      margin-right: 1em;
    }
  }
`;
