import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${CONSTANTS.colors.offWhite};
  height: 60px;
  align-items: center;
  border-bottom: ${({ visible }) =>
    visible ? `1px solid ${CONSTANTS.colors.offBlack}` : "none"};
  z-index: 999;
  position: sticky;
  transition: 0.5s;
  top: ${({ visible }) => (visible ? "0" : "-60px")};
`;

export const BurgerWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 820px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1em;
`;

export const SidebarWrapper = styled.div``;
