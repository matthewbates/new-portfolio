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
  max-width: 100%;
  width: 400px;
  height: 100%;
  padding: 10px;

  @media screen and (min-width: 820px) {
  }
`;

export const LI = styled.li`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 820px) {
  }
`;

export const BlogTitle = styled.div`
  color: ${CONSTANTS.colors.offWhite};
  font-family: ${CONSTANTS.styles.arial};
  margin-bottom: 1em;
`;

export const BlogImg = styled.img`
  margin-bottom: 2em;
  height: 250px;
  filter: brightness(75%);
  -webkit-transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }
`;
