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
  name,
  image,
  techStack,
  github,
  link,
  tooltipGithub,
  tooltipLink,
}) {
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
