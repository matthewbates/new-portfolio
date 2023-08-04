import React, { useState } from "react";

import Select from "react-select";

import { SelectContainer } from "./SelectElements";

import CONSTANTS from "../../utils/constants";
import { downloadResume } from "../../utils/helpers";

const TARGET = "_blank";

const ResumeSelect = React.forwardRef((props) => {
  const { className } = props;
  const [resume, setResume] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
    <SelectContainer>
      <Select
        className={className}
        onChange={handleChange}
        options={CONSTANTS.resumeOptions}
        value={resume}
        placeholder="Resume"
        autoFocus={false}
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontFamily: "Raleway",
            border: `4px solid ${CONSTANTS.colors.spaceGreen}`,
            cursor: "pointer",
            width: "130px",
            state: state.isFocused,
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            fontFamily: "Raleway",
            cursor: "pointer",
          }),
        }}
      />
    </SelectContainer>
  );
});

export default ResumeSelect;
