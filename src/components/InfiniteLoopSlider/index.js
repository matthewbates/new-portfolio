import {
  InfiniteLoopSliderContainer,
  InfiniteLoopSliderItems,
} from "./InfiniteLoopSliderElements";

export default function InfiniteLoopSlider({
  children,
  duration,
  reverse = false,
}) {
  return (
    <InfiniteLoopSliderContainer
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <InfiniteLoopSliderItems>
        {children}
        {children}
      </InfiniteLoopSliderItems>
    </InfiniteLoopSliderContainer>
  );
}
