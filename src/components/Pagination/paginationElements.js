import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  gap: 2em;
`;

export const PaginationItem = styled.div`
  font-size: 1.5em;
  cursor: ${({ activeIndex, index }) =>
    activeIndex === index ? "default" : "pointer"};
  color: ${CONSTANTS.colors.offWhite};
  font-family: "Space Mono";
  text-decoration: ${({ activeIndex, index }) =>
    activeIndex === index && "underline"};
  pointer-events: ${({ activeIndex, index }) =>
    activeIndex === index ? "none" : "auto"};
`;
