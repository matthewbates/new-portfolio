import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
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
    color: ${CONSTANTS.colors.offWhite};
  }
`;
