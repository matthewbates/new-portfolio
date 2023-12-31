import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const TitleContainer = styled.h2`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: ${CONSTANTS.colors.offWhite};
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
