import { NavbarLinkContainer } from "./LinkElements";

export default function Links({
  title,
  sidebar,
  className,
  index,
  activeIndex,
  toggle,
  setIsOpen,
  activeSection,
  activeStyle,
}) {
  // const handleClick = () => {
  //   if (sidebar === "false") {
  //     toggle(index);
  //   } else {
  //     toggle(index);
  //     setTimeout(() => setIsOpen(false), 750);
  //   }
  // };

  return (
    <NavbarLinkContainer
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={500}
      sidebar={sidebar}
      className={className}
      index={index}
      activeIndex={activeIndex}
      toggle={toggle}
      activeSection={activeSection}
      // onClick={handleClick}
      activeStyle={activeStyle}
    >
      {title}
    </NavbarLinkContainer>
  );
}
