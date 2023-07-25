import styled from "styled-components";
import { Link } from "react-scroll";

import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CONSTANTS.styles.height};
  background: ${CONSTANTS.colors.royalBlue};
  border-bottom: 1px solid ${CONSTANTS.colors.offWhite};
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HomeText = styled.div`
  color: ${CONSTANTS.colors.offWhite};
  user-select: none;

  div {
    &:first-child {
      font-family: ${CONSTANTS.styles.spaceMono};

      @media screen and (min-width: 820px) {
        font-size: 22px;
      }
    }
    &:nth-child(2) {
      font-family: ${CONSTANTS.styles.raleway};
      font-size: 2em;
      font-weight: bold;
      color: ${CONSTANTS.colors.spaceGreen};

      &::after {
        content: ".";
        color: white;
      }

      @media screen and (min-width: 820px) {
        font-size: 3em;
      }
    }
    &:nth-child(3) {
      font-family: ${CONSTANTS.styles.spaceMono};

      @media screen and (min-width: 820px) {
        font-size: 22px;
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
  padding: 0.6em;
  font-size: 1em;
  cursor: pointer;
  margin: auto;
  background: ${CONSTANTS.colors.royalBlue};
  border: 2px solid ${CONSTANTS.colors.spaceGreen};
  color: ${CONSTANTS.colors.offWhite};

  @media screen and (min-width: 768px) {
    padding: 0.75em;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  font-size: 1em;
  transition: transform 0.3s ease-in-out;
  ${({ isHovered }) => (isHovered ? "transform: rotate(90deg)" : "0deg")}
`;
