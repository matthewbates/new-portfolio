import React from "react";

import { FooterIconContainer } from "./FooterIconElements";

import { TARGET, REL } from "../../utils/data";

export default function FooterIcon({ name, image, url, style }) {
  return (
    <FooterIconContainer>
      <a href={url} target={TARGET} rel={REL}>
        <img src={image} style={style} alt={name} />
      </a>
    </FooterIconContainer>
  );
}
