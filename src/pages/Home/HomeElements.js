import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: #f1f2f2;
  font-family: "Arial";
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  gap: 1em;

  div {
    &:first-child {
      font-family: "Space Mono";
    }

    &:nth-child(2) {
      font-family: "Arial";
      font-size: 2em;
    }

    &:nth-child(3) {
      font-family: "Space Mono";
    }

    &:last-child {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto;
      gap: 0.5em;

      .icon:hover {
        -webkit-transition: 0.3s ease-in-out;
        transform: scale(1.1);
      }

      @media screen and (min-width: 820px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
      }
    }
  }
`;
