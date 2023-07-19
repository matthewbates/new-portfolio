import { NavbarLinkContainer } from "./LinkElements";

export default function Links({
  title,
  sidebar,
  className,
  index,
  activeIndex,
  toggle,
  closeDrawer,
}) {
  const handleClick = () => {
    if (sidebar === "false") {
      toggle(index);
    } else {
      toggle(index);
      closeDrawer();
    }
  };

  return (
    <NavbarLinkContainer
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={750}
      sidebar={sidebar}
      className={className}
      index={index}
      activeIndex={activeIndex}
      toggle={toggle}
      onClick={handleClick}
    >
      {title}
    </NavbarLinkContainer>
  );
}
