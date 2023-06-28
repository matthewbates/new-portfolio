import { NavbarLinkContainer } from "./LinkElements";

export default function Links({ title, sidebar, closeDrawer }) {
  return (
    <NavbarLinkContainer
      sidebar={sidebar}
      to={title}
      spy={true}
      smooth={true}
      offset={0}
      duration={300}
      onClick={closeDrawer}
    >
      {title}
    </NavbarLinkContainer>
  );
}

