import { styled } from "styled-components";

import CONSTANTS from "../../utils/constants";

export const BlogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  max-width: 1200px;
  margin: auto;
  cursor: pointer;

  &:last-child {
    margin-bottom: 2em;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 200px;
`;

export const Title = styled.div`
  font-family: ${CONSTANTS.styles.arial};
  color: ${CONSTANTS.colors.offWhite};
  font-family: "Raleway";
  font-size: 1.2em;
  margin-top: 1em;
  -webkit-transition: 0.3s ease-in-out;
  max-width: 380px;

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
