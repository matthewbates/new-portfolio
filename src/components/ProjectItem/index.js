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
  disabledGithub,
  disabledLink,
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
            disabledGithub={disabledGithub}
            disabledLink={disabledLink}
          />
        </TextWrapper>
      </ProjectItems>
    </ProjectContainer>
  );
}
