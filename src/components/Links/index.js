import { NavbarLinkContainer } from "./LinkElements";

export default function Links({ title, sidebar, closeDrawer }) {
  return (
    <NavbarLinkContainer
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={700}
      sidebar={sidebar}
      onClick={closeDrawer}
    >
      {title}
    </NavbarLinkContainer>
  );
}
