import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.royalBlue}`
      : `${CONSTANTS.colors.gray_3}`};
  height: 100px;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.styles.navbarBoxShadow}`
      : "0px 10px 20px -10px #818890"};
  font-size: 14px;
  top: 0;
  position: sticky;
  z-index: 999;
`;

export const BurgerWrapper = styled.div`
  /* display: flex;
  margin-left: auto;
  margin-right: 1em; */
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap1: 1em;
  /* gap: 1em;
  justify-content: center; */

  /* @media screen and (min-width: 768px) {
    margin-left: auto;
  } */
`;
