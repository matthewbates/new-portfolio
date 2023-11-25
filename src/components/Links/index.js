import { useState } from "react";

import { NavbarLinkContainer } from "./LinkElements";

import { closeDrawer } from "../../utils/helpers";
import CONSTANTS from "../../utils/constants";
import { Arrow } from "../Arrow";

export default function Links({
  title,
  sidebar,
  className,
  index,
  setIsOpen,
  theme,
}) {
  const [isHovered, setIsHovered] = useState(null);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const activeStyle = {
    // color: `${CONSTANTS.colors.spaceGreen}`,
    color:
      theme === "light"
        ? `${CONSTANTS.colors.spaceGreen}`
        : `${CONSTANTS.colors.gray_1}`,
  };

  return (
    <NavbarLinkContainer
      theme={theme}
      to={title}
      spy={true}
      offset={-100}
      smooth={true}
      duration={500}
      sidebar={sidebar}
      className={className}
      index={index}
      onClick={() => closeDrawer(setIsOpen)}
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
      activeStyle={activeStyle}
    >
      {title}
      {sidebar === "true" && <Arrow isHovered={isHovered} />}
    </NavbarLinkContainer>
  );
}
