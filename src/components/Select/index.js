import React, { useState } from "react";

import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import { downloadResume } from "../../utils/helpers";

const TARGET = "_blank";

const ResumeSelect = React.forwardRef((props, ref) => {
  const { className } = props;
  const [resume, setResume] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    value === "Digital"
      ? window.open(
          "https://main--fabulous-figolla-1c21fb.netlify.app/",
          `${TARGET}`
        )
      : downloadResume();
    setResume(value);
  };

  return (
    <FormControl
      ref={ref}
      className={className}
      sx={{
        marginLeft: "1.5em",
        outline: "1px solid white",
      }}
    >
      <InputLabel
        focused={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        Resume
      </InputLabel>
      <Select
        renderValue={(value) => (value ? value : "None")}
        sx={{
          minWidth: window.innerWidth > 768 ? 130 : 110,
          color: "white",
          "& svg": {
            color: "#5CDB95",
          },
        }}
        value={resume}
        onChange={handleChange}
      >
        <MenuItem value={"Digital"}>Digital</MenuItem>
        <MenuItem value={"Hardcopy"}>Hardcopy</MenuItem>
      </Select>
    </FormControl>
  );
});

export default ResumeSelect;
