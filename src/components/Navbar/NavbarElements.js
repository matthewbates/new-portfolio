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
  transition: 0.5s;
  /* top: ${({ visible }) => (visible ? "0" : "-60px")}; */
  font-size: 14px;
  top: 0;
  position: sticky;
`;

export const BurgerWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media screen and (min-width: 820px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (min-width: 820px) {
    margin-left: auto;
  }
`;

export const SidebarWrapper = styled.div``;
