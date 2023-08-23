import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  color: ${CONSTANTS.colors.offWhite};
  gap: 0.5em;
  user-select: none;
`;

export const TitleWrapper = styled.div`
  color: ${CONSTANTS.colors.offWhite};
  text-decoration: none;
  background: linear-gradient(
    120deg,
    white,
    0%,
    ${CONSTANTS.colors.spaceGreen}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 100%;
  transition: background-size 0.2s ease-in-out;
  font-family: "Raleway";
  cursor: pointer;
  font-size: 1.5em;

  &:hover {
    background-size: 100% 95%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 250px;
  font-family: "Open Sans";
`;
