import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  color: ${CONSTANTS.colors.offWhite};
  -webkit-transition: 0.3s ease-in-out;
  z-index: 995;
  border: ${({ theme }) =>
    theme === "light"
      ? `2px solid ${CONSTANTS.colors.offWhite}`
      : `2px solid ${CONSTANTS.colors.colorGray400}`};
  border-radius: 50%;
  margin-right: 2em;

  &:hover {
    border: 2px solid ${CONSTANTS.colors.colorGray200};
  }
`;
