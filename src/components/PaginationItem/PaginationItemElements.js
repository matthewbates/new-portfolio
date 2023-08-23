import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const PaginationItemContainer = styled.div`
  font-size: 1.5em;
  cursor: ${({ $activeindex, $index }) =>
    $activeindex === $index ? "default" : "pointer"};
  color: ${CONSTANTS.colors.offWhite};
  font-family: "Space Mono";
  text-decoration: ${({ $activeindex, $index }) =>
    $activeindex === $index && "underline"};
  pointer-events: ${({ $activeindex, $index }) =>
    $activeindex === $index ? "none" : "auto"};
`;
