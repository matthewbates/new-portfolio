import { ProjectContainer, H2, ProjectItems } from "./ProjectElements";

import ProjectItem from "../../components/ProjectItem";

import { projectData } from "../../utils/data";

export default function Projects() {
  return (
    <ProjectContainer id="Projects">
      <H2>
        Projects <div></div>
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
            disabledGithub,
            disabledLink,
          }) => (
            <ProjectItem
              key={id}
              name={name}
              image={image}
              techStack={techStack}
              github={github}
              link={link}
              disabledGithub={disabledGithub}
              disabledLink={disabledLink}
            />
          )
        )}
      </ProjectItems>
    </ProjectContainer>
  );
}
