import { downloadResume } from "../../utils/helpers";
import { Btn } from "./ResumeElements";

export default function Resume({ sidebar }) {
  return (
    <Btn sidebar={sidebar} onClick={downloadResume}>
      Resume
    </Btn>
  );
}
