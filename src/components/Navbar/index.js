import { useState, useEffect, useRef } from "react";

import {
  NavbarContainer,
  Logo,
  BurgerWrapper,
  LinksWrapper,
} from "./NavbarElements";

import Burger from "../Burger";
import Links from "../Links";
import Sidebar from "../Sidebar";

import CONSTANTS from "../../utils/constants";
import { avatar, links } from "../../utils/data";
import { animateNavbar } from "../../utils/gsap";
import { useHandleResize, scrollToTop } from "../../utils/helpers";

const linkHighlightOnPageLoad = links.findIndex((link) => link.name === "Home");

export default function Navbar({ isOpen, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(
    linkHighlightOnPageLoad !== -1 ? linkHighlightOnPageLoad : 0
  );
  const [activeSection, setActiveSection] = useState(null);
  const textRef = useRef([]);
  useHandleResize(setIsOpen);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    textRef.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  // useEffect(() => {
  //   textRef.current = document.querySelectorAll("[data-section]");
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const activeStyle = {
    color: `${CONSTANTS.colors.spaceGreen}`,
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <Logo
        className="logo"
        onClick={scrollToTop}
        src={avatar.img}
        alt={avatar.alt}
      />
      <BurgerWrapper className="burger">
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </BurgerWrapper>
      <LinksWrapper ref={textRef}>
        {links.map(({ id, name }, index) => (
          <Links
            key={id}
            sidebar="false"
            title={name}
            id={name}
            toggle={toggleActiveIndex}
            index={index}
            activeIndex={activeIndex}
            activeStyle={activeStyle}
          />
        ))}
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggle={toggleActiveIndex}
        activeIndex={activeIndex}
        activeStyle={activeStyle}
      />
    </NavbarContainer>
  );
}
