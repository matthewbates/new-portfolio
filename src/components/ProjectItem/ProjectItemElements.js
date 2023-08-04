import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  display: flex;
  position: relative;

  &:last-child {
    margin-bottom: 2em;
  }
`;

export const ProjectItems = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-transition: 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &:hover {
    opacity: 1;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;

  &:hover {
    border: 1px solid red;
  }
`;

export const Img = styled.img`
  display: flex;
  height: 240px;
  width: 500px;
  max-width: 100%;
  filter: brightness(75%);

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${CONSTANTS.colors.offWhite};
  max-width: 100%;
  align-self: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: "Space Mono";
  margin-bottom: 0.5em;
  font-size: 1.5em;
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: "Raleway";
  width: 100%;
`;
