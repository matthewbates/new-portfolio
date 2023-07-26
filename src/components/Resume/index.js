import React from "react";

import { downloadResume } from "../../utils/helpers";
import { Btn } from "./ResumeElements";

const Resume = React.forwardRef((props, ref) => {
  const { className, sidebar } = props;
  return (
    <Btn
      ref={ref}
      className={className}
      sidebar={sidebar}
      // onClick={downloadResume}
      onClick={() =>
        window.open(
          "https://main--fabulous-figolla-1c21fb.netlify.app/",
          "_blank"
        )
      }
    >
      Resume
    </Btn>
  );
});

export default Resume;
