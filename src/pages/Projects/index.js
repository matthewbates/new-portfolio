import { useRef, useEffect } from "react";

import gsap from "gsap";

import { ProjectContainer, H2, ProjectItems } from "./ProjectElements";

import ProjectItem from "../../components/ProjectItem";

import { animateTitle } from "../../utils/gsap";
import { projectData } from "../../utils/data";

export default function Projects() {
  const titleRef = useRef(null);

  useEffect(() => {
    animateTitle(titleRef, ".projects-div");
  }, []);

  return (
    <ProjectContainer id="Projects">
      <H2 ref={titleRef}>
        Projects <div className="projects-div"></div>
      </H2>
      <ProjectItems>
        {projectData.map(
          ({
            id,
            name,
            image,
            techStack,
            github,
            link,
            tooltipGithub,
            tooltipLink,
          }) => (
            <ProjectItem
              key={id}
              id={id}
              name={name}
              image={image}
              techStack={techStack}
              github={github}
              link={link}
              tooltipGithub={tooltipGithub}
              tooltipLink={tooltipLink}
            />
          )
        )}
      </ProjectItems>
    </ProjectContainer>
  );
}
