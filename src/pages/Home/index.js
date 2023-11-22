import { useState, useRef, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

import {
  HomeContainer,
  HomeItems,
  TextWrapper,
  HomeText,
  WorkBtn,
  ArrowIcon,
} from "./HomeElements";

import { homeText } from "../../utils/data";

export default function Home({ isOpen, theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef([]);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: -20,
      delay: 1.25,
      stagger: 0.15,
    });
    tl.from(".button", {
      opacity: 0,
      y: 20,
    });
  }, []);

  return (
    <HomeContainer id="Home" $isOpen={isOpen} theme={theme}>
      <HomeItems>
        <HomeText theme={theme}>
          <TextWrapper theme={theme}>
            {homeText.map(({ id, text }, index) => (
              <div key={id} ref={(el) => (textRef.current[index] = el)}>
                {text}
              </div>
            ))}
          </TextWrapper>
        </HomeText>
        <WorkBtn
          theme={theme}
          className="button"
          onMouseOver={toggleHover}
          onMouseLeave={toggleHover}
          to="Projects"
          spy={true}
          smooth={true}
          duration={750}
          offset={-80}
        >
          View my work
          <ArrowIcon $isHovered={isHovered}>{<FaArrowRight />}</ArrowIcon>
        </WorkBtn>
      </HomeItems>
    </HomeContainer>
  );
}
