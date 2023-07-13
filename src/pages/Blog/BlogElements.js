import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const BlogContainer = styled.div`
  height: 100vh;
  background: ${CONSTANTS.colors.royalBlue};
  border-top: 1px solid ${CONSTANTS.colors.offWhite};
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Arial";
  color: ${CONSTANTS.colors.offWhite};
  text-transform: uppercase;
  margin: 2em 0 2em 0;
  text-decoration: underline;
`;
