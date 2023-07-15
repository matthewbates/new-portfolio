import { BtnContainer, Btn } from "./ResumeElements";

export default function Resume({ sidebar }) {
  return (
    <BtnContainer sidebar={sidebar}>
      <Btn>Resume</Btn>
    </BtnContainer>
  );
}
