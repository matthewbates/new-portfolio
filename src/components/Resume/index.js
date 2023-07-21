import { downloadResume } from "../../utils/helpers";
import { Btn } from "./ResumeElements";

export default function Resume({ sidebar }) {
  return (
    <div>
      <Btn sidebar={sidebar} onClick={downloadResume}>
        Resume
      </Btn>
    </div>
  );
}
