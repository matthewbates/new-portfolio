import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: ${CONSTANTS.colors.royalBlue};
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HomeText = styled.div`
  margin-left: 1em;
  color: ${CONSTANTS.colors.offWhite};

  div {
    &:first-child {
      font-family: "Space Mono";

      @media screen and (min-width: 820px) {
        font-size: 18px;
      }
    }
    &:nth-child(2) {
      font-family: "Arial";
      font-size: 2em;
      font-weight: bold;
      color: ${CONSTANTS.colors.spaceGreen};

      ::after {
        content: ".";
        color: ${CONSTANTS.colors.offWhite};
      }
      @media screen and (min-width: 820px) {
        font-size: 2.5em;
      }
    }
    &:nth-child(3) {
      font-family: "Space Mono";

      @media screen and (min-width: 820px) {
        font-size: 18px;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  margin-top: 1em;
  gap: 0.75em;
  border: 1px solid white;
  padding: 1em;
  background: ${CONSTANTS.colors.offWhite};
  border-radius: ${CONSTANTS.styles.borderRadius};
  border: ${CONSTANTS.styles.border};

  @media screen and (min-width: 820px) {
    display: flex;
    gap: 1em;
  }
`;

export const ResumeBtn = styled.button`
  margin: auto;
  margin-top: 1em;
  height: 42px;
  width: 144px;
  font-family: "Arial";
  border: ${CONSTANTS.styles.border};
  border-radius: ${CONSTANTS.styles.borderRadius};
  background: ${CONSTANTS.colors.offWhite};
  color: ${CONSTANTS.colors.offBlack};
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    transform: translate(2px, -2px);
    transition: ${CONSTANTS.styles.hover};
    box-shadow: ${CONSTANTS.styles.boxShadow};
  }

  @media screen and (min-width: 820px) {
    height: 60px;
    font-size: 1em;
  }
`;
