import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
import Title from "../../components/Title";

import { animateTitle } from "../../utils/gsap";
import Skills from "../../components/Freelance";

export default function About() {
  const iconRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(iconRef.current, {
      scrollTrigger: {
        trigger: iconRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
  }, []);

  useEffect(() => {
    animateTitle(titleRef, ".about-div");
  }, []);

  return (
    <AboutContainer id="About">
      <AboutText>
        <H2 ref={titleRef}>
          About <div className="about-div"></div>
        </H2>
        {aboutText.map((item, index) =>
          item.id === 1 ? (
            item.text
          ) : item.id === 2 ? (
            <CareerText key={index} item={item} />
          ) : (
            item.text
          )
        )}
        <AboutSkills>
          {skills.map(({ id, name, img, alt }) => (
            <div key={id}>
              <ToolTip title={name}>
                <Img
                  onClick={() => name}
                  className="skills-icon"
                  ref={(el) => (iconRef.current[id] = el)}
                  src={img}
                  alt={alt}
                />
              </ToolTip>
            </div>
          ))}
        </AboutSkills>
      </AboutText>
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
      <FreelanceWrapper>
        <Skills />
      </FreelanceWrapper>
    </AboutContainer>
  );
}
