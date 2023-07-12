import { NavbarLinkContainer } from "./LinkElements";

export default function Links({
  title,
  sidebar,
  closeDrawer,
  className,
  index,
}) {
  return (
    <NavbarLinkContainer
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={750}
      sidebar={sidebar}
      onClick={closeDrawer}
      className={className}
      index={index}
    >
      {title}
    </NavbarLinkContainer>
  );
}
