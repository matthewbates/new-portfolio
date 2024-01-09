import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Raleway;
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

  @media screen and (min-width: 720px) {
    width: 70%;
  }

  @media screen and (min-width: 1100px) {
    width: 50%;
  }

  @media screen and (min-width: 1500px) {
    width: 40%;
  }

  @media screen and (min-width: 1900px) {
    width: 30%;
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
  transition: 3.3s ease;

  img {
    height: 75px;
    width: 75px;
    font-size: 1.2rem;
    color: #64748b;
    transition: 0.5s ease;

    @media screen and (min-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
`;

export const Fade = styled.div`
  pointer-events: none;
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(90deg, #05386b, transparent 30%, transparent 70%, #05386b)"
      : "linear-gradient(90deg, #22272e, transparent 30%, transparent 70%, #22272e)"};
  position: absolute;
  inset: 0;
`;
