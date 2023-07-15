import { useRef, useEffect } from "react";

import gsap from "gsap";

import {
  HomeContainer,
  HomeItems,
  HomeText,
  IconWrapper,
  ResumeBtn,
} from "./HomeElements";

import HomeIcon from "../../components/HomeIcon";

import { homeText } from "../../utils/data";
import { downloadResume, useIconStyles } from "../../utils/helpers";

export default function Home({ isOpen }) {
  const iconStyles = useIconStyles();
  const textRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: -20,
      delay: 1.25,
      stagger: 0.25,
    });
    tl.from(".icon", {
      opacity: 0,
      y: 20,
      stagger: 0.25,
      delay: 0.25,
    });
    // tl.from(".button", {
    //   opacity: 0,
    //   y: 20,
    //   delay: 0.25,
    // });
  }, []);

  return (
    <HomeContainer id="Home" isOpen={isOpen}>
      <HomeItems>
        <HomeText>
          {homeText.map(({ id, text }, index) => (
            <div key={id} ref={(element) => (textRef.current[index] = element)}>
              {text}
            </div>
          ))}
        </HomeText>
        <IconWrapper className="icon">
          {iconStyles.map(({ id, name, image, url, style }) => (
            <HomeIcon
              key={id}
              name={name}
              image={image}
              url={url}
              style={style}
            />
          ))}
        </IconWrapper>
        {/* <ResumeBtn className="button" onClick={downloadResume}>
          Resume
        </ResumeBtn> */}
      </HomeItems>
    </HomeContainer>
  );
}
