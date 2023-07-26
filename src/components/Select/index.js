import { useState } from "react";

import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormLabel,
} from "@mui/material";

import { downloadResume } from "../../utils/helpers";

export default function ResumeSelect() {
  const [resume, setResume] = useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    value === "digital"
      ? window.open(
          "https://main--fabulous-figolla-1c21fb.netlify.app/",
          "_blank"
        )
      : downloadResume();
  };

  return (
    <FormControl sx={{ border: "1px solid white", marginLeft: "1em" }}>
      <InputLabel sx={{ color: "white" }}>Resume</InputLabel>
      <Select
        label="Age"
        sx={{
          minWidth: 120,
          color: "white",
          "& svg": {
            color: "white",
          },
        }}
        value={resume}
        onChange={(e) => {
          handleChange(e);
          setResume(e.target.value);
        }}
      >
        <MenuItem value={"digital"}>Digital</MenuItem>
        <MenuItem value={"hardcopy"}>Hardcopy</MenuItem>
      </Select>
    </FormControl>
  );
}
