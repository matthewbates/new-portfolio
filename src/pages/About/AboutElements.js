import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.royalBlue};
  border-top: 1px solid white;

  @media screen and (min-width: 820px) {
    height: 100vh;
  }
`;

export const AboutText = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  font-family: "Space Mono";
  gap: 1em;
  font-size: 1.5em;
  width: 100%;
  max-width: 90%;
  color: ${CONSTANTS.colors.offWhite};

  @media screen and (min-width: 820px) {
    max-width: 60%;
  }
`;

export const AboutSkills = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: 820px) {
  }
`;
