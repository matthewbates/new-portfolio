import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const BlogContainer = styled.div`
  height: 100%;
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

export const BlogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  /* padding: 1em; */
`;

export const Img = styled.img`
  display: flex;
  max-width: 100%;
  width: 325px;
  height: 250px;
  cursor: pointer;
  filter: brightness(50%);
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(100%);
    backdrop-filter: blur(8px);
  }
`;
