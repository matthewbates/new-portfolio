import { useRef, useEffect } from "react";

import {
  AboutContainer,
  H2,
  AboutText,
  AboutSkills,
  Img,
  FreelanceWrapper,
} from "./AboutElements";

import CareerText from "../../components/CareerText";

import { aboutText, skills } from "../../utils/data";
import ToolTip from "../../components/Tooltip";

import { animateTitle, animateIcons, animateText } from "../../utils/gsap";
import Skills from "../../components/Freelance";
import InfiniteScroll from "../../components/InfiniteScroll";

export default function About() {
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
      <AboutText>
        <H2 ref={titleRef}>
          About <div className="about-div"></div>
        </H2>
        {aboutText.map((item, index) => (
          <div className={`animate-text-${index}`} key={index}>
            <CareerText key={index} item={item} />
          </div>
        ))}
        <AboutSkills>
          {skills.map(({ id, name, img, alt }) => (
            <div key={id}>
              <ToolTip title={name}>
                <Img
                  ref={(el) => (iconRef.current[id] = el)}
                  src={img}
                  alt={alt}
                />
              </ToolTip>
            </div>
          ))}
        </AboutSkills>
      </AboutText>
      <InfiniteScroll />
      {/* <h1
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
      <FreelanceWrapper>
        <Skills />
      </FreelanceWrapper> */}
    </AboutContainer>
  );
}
