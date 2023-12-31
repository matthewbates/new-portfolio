import styled from "styled-components";
import { Link } from "react-scroll";

import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CONSTANTS.styles.height};
  border-bottom: 1px solid ${CONSTANTS.colors.offWhite};
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 100px;
`;

export const TextWrapper = styled.div``;

export const HomeText = styled.div`
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offWhite}`
      : `${CONSTANTS.colors.gray_1}`};
  user-select: none;

  div {
    &:first-child {
      font-family: ${CONSTANTS.styles.spaceMono};

      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
    &:nth-child(2) {
      font-family: ${CONSTANTS.styles.raleway};
      font-weight: bold;
      font-size: 2em;
      color: ${({ theme }) =>
        theme === "light"
          ? `${CONSTANTS.colors.spaceGreen}`
          : `${CONSTANTS.colors.offWhite}`};

      &::after {
        content: ".";
        color: white;
      }

      @media screen and (min-width: 768px) {
        font-size: 2.5em;
      }
    }
    &:nth-child(3) {
      font-family: ${CONSTANTS.styles.spaceMono};

      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
`;

export const WorkBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  font-family: "Raleway";
  padding: 0.75em;
  font-size: 0.9em;
  cursor: pointer;
  margin: auto;
  border: ${({ theme }) =>
    theme === "light"
      ? `2px solid ${CONSTANTS.colors.spaceGreen}`
      : `2px solid ${CONSTANTS.colors.gray_1}`};
  color: ${CONSTANTS.colors.offWhite};

  @media screen and (min-width: 768px) {
    padding: 1em;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  font-size: 1em;
  transition: transform 0.3s ease-in-out;
  ${({ $isHovered }) => ($isHovered ? "transform: rotate(90deg)" : "0deg")}
`;
