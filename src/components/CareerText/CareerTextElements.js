import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const A = styled.a`
  /* color: ${CONSTANTS.colors.offWhite}; */
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offWhite}`
      : `${CONSTANTS.colors.gray_1}`};
  text-decoration: none;
  background: linear-gradient(
    120deg,
    ${CONSTANTS.colors.spaceGreen},
    0%,
    ${CONSTANTS.colors.spaceGreen}
  );
  background: ${({ theme }) =>
    theme === "light"
      ? `linear-gradient(120deg, ${CONSTANTS.colors.spaceGreen}, 0%, ${CONSTANTS.colors.spaceGreen})`
      : `linear-gradient(120deg, ${CONSTANTS.colors.gray_4}, 0%, ${CONSTANTS.colors.gray_4})`};
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 90%;
  transition: background-size 0.2s ease-in-out;

  &:hover {
    background-size: 100% 88%;
  }
`;
