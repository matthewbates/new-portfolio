import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  AboutContainer,
  H2,
  AboutText,
  AboutSkills,
  Img,
} from "./AboutElements";

import CareerText from "../../components/CareerText";

import { aboutText, skills } from "../../utils/data";

export default function About() {
  const iconRef = useRef([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(iconRef.current, {
      scrollTrigger: {
        trigger: iconRef.current,
        // trigger when the viewport/scroller scrolls by exactly X pixels
        // start: 500,
        start: "top center",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -20,
      stagger: 0.25,
    });
  }, []);

  return (
    <AboutContainer id="About">
      <H2>About</H2>
      <AboutText>
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
          {skills.map(({ id, name, img, label, alt }) => (
            <div>
              <Img
                key={id}
                ref={(el) => (iconRef.current[id] = el)}
                src={img}
                alt={alt}
              />
            </div>
          ))}
        </AboutSkills>
      </AboutText>
    </AboutContainer>
  );
}
