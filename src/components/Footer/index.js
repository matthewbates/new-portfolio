import { FooterContainer, FooterItems } from "./FooterElements";

import { icons } from "../../utils/data";
// import { useIconStyles } from "../../utils/hooks";

import FooterIcon from "../FooterIcon";

export default function Footer() {
  // const iconStyles = useIconStyles();

  return (
    <FooterContainer>
      <FooterItems>
        {icons.map(({ id, name, image, url, style }) => (
          <FooterIcon
            key={id}
            name={name}
            image={image}
            url={url}
            style={style}
          />
        ))}
      </FooterItems>
      <div>Designed & Built by Matthew Bates</div>
    </FooterContainer>
  );
}
