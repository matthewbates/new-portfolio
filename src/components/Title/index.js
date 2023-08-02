import { useRef, useEffect } from "react";
import { TitleContainer } from "./TitleElements";
import { animateTitle } from "../../utils/gsap";

export default function Title({ children, className }) {
  const titleRef = useRef(null);

  useEffect(() => {
    animateTitle(titleRef, className);
  }, [className]);

  return <TitleContainer ref={titleRef}>{children}</TitleContainer>;
}
