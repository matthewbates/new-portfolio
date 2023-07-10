import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  z-index: 996;
  color: ${CONSTANTS.colors.offBlack};
  -webkit-transition: 0.3s ease-in-out;

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
