import styled from "styled-components";

export const InfiniteLoopSliderContainer = styled.div``;

export const InfiniteLoopSliderItems = styled.div`
  display: flex;
  width: fit-content;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: var(--direction);
  animation-duration: var(--duration);
`;
