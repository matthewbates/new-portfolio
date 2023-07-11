import { useRef, useEffect } from "react";

import gsap from "gsap";

import { AboutContainer, AboutText, AboutSkills } from "./AboutElements";

import Card from "../../components/Card";

import { aboutText, skills } from "../../utils/data";

export default function About() {
  const iconRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(iconRef.current, {
      opacity: 0,
      y: -20,
      delay: 1.25,
      stagger: 0.25,
    });
  }, []);

  return (
    <AboutContainer id="About">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Arial",
          color: "#f1f2f2",
          textTransform: "uppercase",
          padding: "1em",
          textDecoration: "underline",
        }}
      >
        About
      </h2>
      <AboutText>
        {aboutText.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
        <AboutSkills>
          {skills.map((skill, index) => (
            <img
              ref={(el) => (iconRef.current[index] = el)}
              src={skill.img}
              style={{
                height: "75px",
                width: "75px",
                background: "white",
                padding: "0.5em",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          ))}
        </AboutSkills>
      </AboutText>
    </AboutContainer>
  );
}
