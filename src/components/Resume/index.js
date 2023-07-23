import { downloadResume } from "../../utils/helpers";
import { Btn } from "./ResumeElements";

export default function Resume({ sidebar, className }) {
  return (
    <div>
      <Btn className={className} sidebar={sidebar} onClick={downloadResume}>
        Resume
      </Btn>
    </div>
  );
}
