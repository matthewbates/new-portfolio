import { useRef, useEffect } from "react";

import gsap from "gsap";

import {
  HomeContainer,
  HomeItems,
  HomeText,
  IconWrapper,
  ResumeBtn,
} from "./HomeElements";

import { homeText } from "../../utils/data";
import { useIconStyles } from "../../utils/hooks";
import { downloadResume } from "../../utils/helpers";

export default function Home({ isOpen }) {
  const textRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: -20,
      delay: 1.25,
      stagger: 0.25,
    });
    // tl.from(".icon", {
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.25,
    //   delay: 0.25,
    // });
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
        {/* <IconWrapper className="icon">
          {iconStyles.map(({ id, name, image, url, style }) => (
            <HomeIcon
              key={id}
              name={name}
              image={image}
              url={url}
              style={style}
            />
          ))}
        </IconWrapper> */}
        <ResumeBtn className="button" onClick={downloadResume}>
          Resume
        </ResumeBtn>
      </HomeItems>
    </HomeContainer>
  );
}
