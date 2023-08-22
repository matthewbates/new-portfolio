import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: ${CONSTANTS.styles.spaceMono};
  gap: 0.5em;
  height: 150px;
  background: lightgray;
`;

export const FooterItems = styled.div`
  display: flex;
  gap: 0.75em;
`;
