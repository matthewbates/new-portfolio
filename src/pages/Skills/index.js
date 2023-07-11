import { useRef, useEffect } from "react";

import gsap from "gsap";

import { SkillsContainer, SkillsWrapper, SkillsItems } from "./SkillsElements";

import Card from "../../components/Card";

import { skills } from "../../utils/data";

export default function Skills() {
  const uniqueGroups = Array.from(new Set(skills.map((skill) => skill.group)));
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
    <SkillsContainer id="Skills">
      <SkillsWrapper>
        <h2>Skills</h2>
        {skills.map((icon, index) => (
          // <Card>
          //   <img src={icon.img} style={{ height: "75px", width: "75px" }} />
          // </Card>
          <Card icon={icon} index={index} />
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
}
