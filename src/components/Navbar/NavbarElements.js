import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${CONSTANTS.colors.royalBlue};
  height: 80px;
  align-items: center;
  border-bottom: ${({ visible }) =>
    visible ? `1px solid ${CONSTANTS.colors.offWhite}` : "none"};
  transition: 0.5s;
  /* top: ${({ visible }) => (visible ? "0" : "-60px")}; */
  font-size: 14px;
  top: 0;
  position: sticky;
  z-index: 998;
`;

export const Logo = styled.img`
  margin-left: 1em;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  filter: brightness(150%);
  border: 2px solid ${CONSTANTS.colors.offWhite};
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
