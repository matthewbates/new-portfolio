import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${CONSTANTS.styles.height};
  background: ${CONSTANTS.colors.royalBlue};
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HomeText = styled.div`
  margin-left: 1em;
  color: ${CONSTANTS.colors.offWhite};

  div {
    &:first-child {
      font-family: ${CONSTANTS.styles.spaceMono};

      @media screen and (min-width: 820px) {
        font-size: 22px;
      }
    }
    &:nth-child(2) {
      font-family: ${CONSTANTS.styles.arial};
      font-size: 2em;
      font-weight: bold;
      color: ${CONSTANTS.colors.spaceGreen};

      ::after {
        content: ".";
        color: ${CONSTANTS.colors.offWhite};
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

export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  align-items: center;
  margin: auto;
  margin-top: 1em;
  gap: 0.75em;
  border: 1px solid white;
  padding: 1em;
  background: white;
  border-radius: ${CONSTANTS.styles.borderRadius};
  border: ${CONSTANTS.styles.border};
  mixed-blend-mode: color-burn;

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
  border: 1px solid ${CONSTANTS.colors.spaceGreen};
  background: transparent;
  color: ${CONSTANTS.colors.offWhite};
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
