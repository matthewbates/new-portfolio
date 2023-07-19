import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
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
  gap: 1em;
  max-width: 1200px;
  margin: auto;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 400px;
  height: 200px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${CONSTANTS.styles.arial};
  color: ${CONSTANTS.colors.offWhite};
  font-family: "Raleway";
  font-size: 0.75em;
  margin: auto;
  margin-top: 1em;
  -webkit-transition: 0.3s ease-in-out;

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
