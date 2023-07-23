import { NavbarLinkContainer } from "./LinkElements";

import { closeDrawer } from "../../utils/helpers";
import CONSTANTS from "../../utils/constants";

export default function Links({ title, sidebar, className, index, setIsOpen }) {
  const activeStyle = {
    color: `${CONSTANTS.colors.spaceGreen}`,
  };

  return (
    <NavbarLinkContainer
      to={title}
      spy={true}
      offset={-80}
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
