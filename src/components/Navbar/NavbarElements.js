import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${CONSTANTS.colors.royalBlue};
  height: 80px;
  align-items: center;
  box-shadow: ${CONSTANTS.styles.navbarBoxShadow};
  transition: 0.5s;
  font-size: 14px;
  top: 0;
  position: sticky;
  z-index: 999;
`;

export const Logo = styled.img`
  margin-left: 1em;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  cursor: pointer;
  filter: brightness(150%);
  border: 2px solid ${CONSTANTS.colors.offWhite};
`;

export const BurgerWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
