import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 100vh;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const SkillsItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1em;
  justify-content: center;
  height: 75px;
  width: 75px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
