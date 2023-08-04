import React, { useState } from "react";

import CONSTANTS from "../../utils/constants";
import { downloadResume } from "../../utils/helpers";
import Select from "react-select";

const TARGET = "_blank";

const ResumeSelect = React.forwardRef((props) => {
  const { className } = props;
  const [resume, setResume] = useState("");

  const handleChange = (selectedOption) => {
    selectedOption.value === "digital"
      ? window.open(
          "https://main--fabulous-figolla-1c21fb.netlify.app/",
          `${TARGET}`
        )
      : downloadResume();
    setResume(selectedOption.value);
  };

  return (
    <div style={{ marginLeft: "1em" }}>
      <Select
        className={className}
        onChange={handleChange}
        options={CONSTANTS.resumeOptions}
        value={resume}
        placeholder="Resume"
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            fontFamily: "Raleway",
            border: `4px solid ${CONSTANTS.colors.spaceGreen}`,
            cursor: "pointer",
            width: "130px",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            fontFamily: "Raleway",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
});

export default ResumeSelect;
