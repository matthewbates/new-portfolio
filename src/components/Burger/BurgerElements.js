import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  z-index: ${({ isOpen }) => (isOpen ? 999 : 999)};
  color: ${CONSTANTS.colors.offBlack};
  transition: 0.3s;

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
