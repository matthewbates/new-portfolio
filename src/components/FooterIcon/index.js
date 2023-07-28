import React from "react";

import { FooterIconContainer } from "./FooterIconElements";

import { TARGET, REL } from "../../utils/data";
import ToolTip from "../Tooltip";

export default function FooterIcon({ name, image, url, style }) {
  return (
    <ToolTip title={name} placement="top">
      <FooterIconContainer>
        <a href={url} target={TARGET} rel={REL}>
          <img src={image} style={style} alt={name} />
        </a>
      </FooterIconContainer>
    </ToolTip>
  );
}
