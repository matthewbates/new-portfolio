import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  height: 100%;
  border-bottom: 1px solid ${CONSTANTS.colors.offWhite};
`;

export const H2 = styled.h2`
  display: flex;
  color: #ffffff;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  text-transform: uppercase;
  font-family: "Open Sans";
  letter-spacing: 0.1em;
  margin-top: 1em;
  font-size: 40px;

  div {
    display: flex;
    margin: 0.5em auto;
    width: 70px;
    background: white;
    height: 4px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  font-family: "Space Mono";
  gap: 1.25em;
  font-size: 1.2em;
  width: 100%;
  max-width: 90%;
  /* color: ${CONSTANTS.colors.offWhite}; */
  color: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offWhite}`
      : `${CONSTANTS.colors.gray_1}`};

  user-select: none;

  @media screen and (min-width: 768px) {
    width: 75%;
    font-size: 1.5em;
  }

  @media screen and (min-width: 1100px) {
    width: 60%;
  }
`;

export const AboutSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 10%;

  div {
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const Img = styled.img`
  height: 70px;
  width: 70px;
  background: ${CONSTANTS.colors.offWhite};
  padding: 0.5em;
  border-radius: 8px;
  cursor: pointer;
`;
