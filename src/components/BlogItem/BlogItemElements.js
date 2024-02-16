import { styled } from "styled-components";

import CONSTANTS from "../../utils/constants";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* gap: 1.5em; */
  margin: auto;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  pointer-events: none;
  gap: 1em;
  width: 100%;
  /* max-width: 1200px; */
  max-width: 600px;

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
  border: ${({ theme }) =>
    theme === "light"
      ? `1px solid ${CONSTANTS.colors.spaceGreen}`
      : `1px solid ${CONSTANTS.colors.offWhite}`};
  padding: 2em;
`;

export const Title = styled.div`
  font-family: ${CONSTANTS.styles.arial};
  color: ${({ $hovered }) =>
    $hovered === "true"
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
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.spaceGreen}`
      : `${CONSTANTS.colors.gray_1}`};
  margin: 10px 0;
`;
