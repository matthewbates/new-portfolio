import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  color: ${CONSTANTS.colors.offWhite};
  width: 100%;
  gap: 0.5em;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  font-family: "Raleway";
  text-decoration: underline;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 300px;
  font-family: "Open Sans";
`;
