import { useRef, useEffect } from "react";

import Icon from "@mdi/react";

import { IconContainer, TitleWrapper, TextWrapper } from "./FreelanceElements";

import { freelance } from "../../utils/data";
import { animateFreelance } from "../../utils/gsap";

export default function Freelance() {
  const logoRef = useRef(null);

  useEffect(() => {
    freelance.forEach(({ id }) => {
      animateFreelance(
        logoRef,
        `.title-container-${id}`,
        `.text-container-${id}`
      );
    });
  }, []);

  return (
    <>
      {freelance.map(({ id, path, size, title, text }, index) => (
        <IconContainer key={id}>
          <Icon
            ref={(el) => logoRef[index] === el}
            path={path}
            size={size}
            style={{ color: "#5CDB95" }}
          />
          <TitleWrapper className={`title-container-${id}`}>
            {title}
          </TitleWrapper>
          <TextWrapper className={`text-container-${id}`}>{text}</TextWrapper>
        </IconContainer>
      ))}
    </>
  );
}
