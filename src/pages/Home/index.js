import { useState, useRef, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

import {
  HomeContainer,
  HomeItems,
  HomeText,
  BtnWrapper,
  WorkBtn,
  ArrowIcon,
} from "./HomeElements";

import { homeText } from "../../utils/data";
import { useIconStyles } from "../../utils/hooks";
import { downloadResume } from "../../utils/helpers";
import Resume from "../../components/Resume";

export default function Home({ isOpen }) {
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
      stagger: 0.25,
    });
    tl.from(".button", {
      opacity: 0,
      y: 20,
    });
  }, []);

  return (
    <HomeContainer id="Home" isOpen={isOpen}>
      <HomeItems>
        <HomeText>
          {homeText.map(({ id, text }, index) => (
            <div key={id} ref={(el) => (textRef.current[index] = el)}>
              {text}
            </div>
          ))}
        </HomeText>
        <WorkBtn
          className="button"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="Projects"
          spy={true}
          smooth={true}
          duration={750}
          offset={-80}
        >
          View my work
          <ArrowIcon isHovered={isHovered}>{<FaArrowRight />}</ArrowIcon>
        </WorkBtn>
      </HomeItems>
    </HomeContainer>
  );
}
