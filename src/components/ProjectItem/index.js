import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ProjectLink from "../ProjectLink";
import {
  Img,
  ProjectContainer,
  TextWrapper,
  ProjectItems,
  Title,
  TechStack,
} from "./ProjectItemElements";

export default function ProjectItem({
  id,
  name,
  image,
  techStack,
  github,
  link,
  tooltipGithub,
  tooltipLink,
}) {
  const imgRef = useRef([]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(imgRef.current, {
  //     scrollTrigger: {
  //       trigger: imgRef.current,
  //       start: "top center",
  //       toggleActions: "play none none none",
  //     },
  //     opacity: 0,
  //     y: -20,
  //     stagger: 0.15,
  //   });
  // }, []);

  return (
    <ProjectContainer>
      <Img src={image} />
      <ProjectItems>
        <TextWrapper>
          <Title>{name}</Title>
          <TechStack>{techStack}</TechStack>
          <ProjectLink
            github={github}
            link={link}
            tooltipGithub={tooltipGithub}
            tooltipLink={tooltipLink}
          />
        </TextWrapper>
      </ProjectItems>
    </ProjectContainer>
  );
}
