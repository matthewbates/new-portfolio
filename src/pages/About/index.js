import { useRef, useEffect } from "react";

import { AboutContainer, H2, AboutText } from "./AboutElements";

import CareerText from "../../components/CareerText";

import { aboutText } from "../../utils/data";
import Freelance from "../../components/Freelance";
import { animateTitle, animateIcons, animateText } from "../../utils/gsap";

import Scroll from "../../components/Scroll";

export default function About({ theme }) {
  const iconRef = useRef([]);
  const titleRef = useRef(null);
  const textRef = useRef("");

  useEffect(() => {
    animateTitle(titleRef, ".about-div");
    animateIcons(iconRef);
    aboutText.forEach((_, index) => {
      textRef.current = `.animate-text-${index}`;
      animateText(textRef);
    });
  }, []);

  return (
    <AboutContainer id="About">
      <AboutText theme={theme}>
        <H2 ref={titleRef}>
          About <div className="about-div"></div>
        </H2>
        {aboutText.map((item, index) => (
          <div className={`animate-text-${index}`} key={index}>
            <CareerText key={index} item={item} theme={theme} />
          </div>
        ))}
      </AboutText>
      <Scroll theme={theme} />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#f1f2f2",
          fontFamily: "Raleway",
          marginBottom: "1em",
        }}
      >
        Projects I build are...
      </h1>
      <Freelance theme={theme} />
    </AboutContainer>
  );
}
