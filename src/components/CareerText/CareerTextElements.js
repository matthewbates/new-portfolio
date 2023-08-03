import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const A = styled.a`
  color: ${CONSTANTS.colors.offWhite};
  text-decoration: none;
  background: linear-gradient(
    120deg,
    ${CONSTANTS.colors.spaceGreen},
    0%,
    ${CONSTANTS.colors.spaceGreen}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 90%;
  transition: background-size 0.2s ease-in-out;

  &:hover {
    background-size: 100% 88%;
  }
`;
