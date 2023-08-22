import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
  /* border-radius: 50%; */
  /* border: 1px solid ${CONSTANTS.colors.offWhite}; */
  padding: 1em;
  color: white;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: 999;
  /* background: ${CONSTANTS.colors.spaceGreen}; */
  font-family: ${CONSTANTS.styles.arial};
  text-transform: uppercase;
  cursor: pointer;
`;
