import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "@mdi/react";

import {
  FreelanceContainer,
  IconContainer,
  TitleWrapper,
  TextWrapper,
} from "./FreelanceElements";

import { freelance } from "../../utils/data";
import CONSTANTS from "../../utils/constants";

export default function Freelance({ theme }) {
  const iconRef = useRef(null);

  useEffect(() => {
    freelance.forEach((_, index) => {
      iconRef.current = `.animate-icon-${index}`;
      index === 0 &&
        gsap.from(iconRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
      index === 1 &&
        gsap.from(iconRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
      index === 2 &&
        gsap.from(iconRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
      index === 3 &&
        gsap.from(iconRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 80%",
          },
        });
    });
  }, []);

  return (
    <FreelanceContainer>
      {freelance.map(({ id, path, size, title, text }, index) => (
        <IconContainer key={id} className={`animate-icon-${index}`}>
          <Icon
            path={path}
            size={size}
            style={{
              color:
                theme === "light"
                  ? `${CONSTANTS.colors.spaceGreen}`
                  : `${CONSTANTS.colors.offWhite}`,
            }}
          />
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper theme={theme}>{text}</TextWrapper>
        </IconContainer>
      ))}
    </FreelanceContainer>
  );
}
