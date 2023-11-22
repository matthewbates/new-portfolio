import { NavbarLinkContainer } from "./LinkElements";

import { closeDrawer } from "../../utils/helpers";
import CONSTANTS from "../../utils/constants";

export default function Links({
  title,
  sidebar,
  className,
  index,
  setIsOpen,
  theme,
}) {
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
      activeStyle={activeStyle}
    >
      {title}
    </NavbarLinkContainer>
  );
}
