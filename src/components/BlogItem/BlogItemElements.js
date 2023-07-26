import { styled } from "styled-components";

import CONSTANTS from "../../utils/constants";

export const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  //! adjust this to change how many columns on larger
  max-width: 1200px;
  margin: auto;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  pointer-events: none;
  /* margin-top: 2em; */

  &:last-child {
    margin-bottom: 2em;
  }

  > * {
    pointer-events: auto;
    transition: 0.3s ease-in-out;
  }

  &:hover > * {
    opacity: 35%;
  }

  &:hover > *:hover {
    opacity: 1;
  }
`;

export const BlogItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  max-width: 100%;
  width: 400px;
  height: 175px;
`;

export const Title = styled.div`
  font-family: ${CONSTANTS.styles.arial};
  color: ${({ hovered }) =>
    hovered === "true"
      ? `${CONSTANTS.colors.spaceGreen}`
      : `${CONSTANTS.colors.offWhite}`};
  font-family: "Raleway";
  font-size: 1em;
  margin-top: 0.5em;
  -webkit-transition: 0.3s ease-in-out;
  max-width: 400px;
  text-decoration: none;

  &:hover {
    color: ${CONSTANTS.colors.spaceGreen};
  }
`;

export const PubDate = styled.div`
  color: white;
  text-decoration: none;
  padding: 10px 0;
  font-family: "Open Sans";
  font-size: 10px;
`;

export const Line = styled.div`
  width: 25%;
  height: 3px;
  background: ${CONSTANTS.colors.spaceGreen};
  margin: 10px 0;
`;
