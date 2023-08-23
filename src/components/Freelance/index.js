import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "@mdi/react";

import { IconContainer, TitleWrapper, TextWrapper } from "./FreelanceElements";

import { freelance } from "../../utils/data";
import { animateFreelance } from "../../utils/gsap";

export default function Freelance() {
  const iconRef = useRef(null);

  useEffect(() => {
    freelance.forEach((_, index) => {
      iconRef.current = `.animate-icon-${index}`;
      if (index % 2 !== 0) {
        gsap.from(iconRef.current, {
          opacity: 0,
          x: 50,
          ease: "power1.out",
          scrollTrigger: {
            duration: 5,
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
      } else {
        gsap.from(iconRef.current, {
          opacity: 0,
          x: -50,
          ease: "power1.out",
          scrollTrigger: {
            duration: 5,
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
      }
    });
  }, []);

  return (
    <>
      {freelance.map(({ id, path, size, title, text }, index) => (
        <IconContainer key={id} className={`animate-icon-${index}`}>
          <Icon path={path} size={size} style={{ color: "#5CDB95" }} />
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper>{text}</TextWrapper>
        </IconContainer>
      ))}
    </>
  );
}
