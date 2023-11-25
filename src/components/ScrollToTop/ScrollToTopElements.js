import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
  padding: 1em;
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offWhite}`
      : `${CONSTANTS.colors.gray_1}`};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  z-index: 999;
  font-family: ${CONSTANTS.styles.arial};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    color: ${CONSTANTS.colors.offWhite};
  }
`;
