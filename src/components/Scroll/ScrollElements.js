import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Raleway;
  background: #05386b;
  color: #f8fafc;

  @keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const ScrollItems = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
  margin-top: 2em;
  margin-bottom: 2em;

  @media screen and (min-width: 768px) {
    width: 75%;
  }

  @media screen and (min-width: 1100px) {
    width: 40%;
  }
`;

export const ScrollItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #f1f2f2;
  font-size: 0.9rem;
  background-color: #f1f2f2;
  border-radius: 0.4rem;
  padding: 1em;
  margin-right: 1rem;

  img {
    height: 70px;
    width: 70px;
    font-size: 1.2rem;
    color: #64748b;

    @media screen and (min-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
`;

export const Fade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #05386b,
    transparent 30%,
    transparent 70%,
    #05386b
  );
  position: absolute;
  inset: 0;
`;
