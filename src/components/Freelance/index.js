import Icon from "@mdi/react";

import { IconContainer, TitleWrapper, TextWrapper } from "./FreelanceElements";

import { freelance } from "../../utils/data";

export default function Freelance() {
  return (
    <>
      {freelance.map(({ id, path, size, title, text }) => (
        <IconContainer>
          <Icon key={id} path={path} size={size} style={{ color: "#5CDB95" }} />
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper>{text}</TextWrapper>
        </IconContainer>
      ))}
    </>
  );
}
