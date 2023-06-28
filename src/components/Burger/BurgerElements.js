import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  display: flex;
  z-index: 998;
  color: ${CONSTANTS.colors.offBlack};
  transition: 0.3s;

  &:hover {
    transform: translate(4px);
  }

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
