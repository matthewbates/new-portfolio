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

import { avatar, links } from "../../utils/data";
import { animateNavbar } from "../../utils/gsap";
import { useHandleResize, scrollToTop } from "../../utils/helpers";
import Resume from "../Resume";

export default function Navbar({ isOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = useState(null);
  const textRef = useRef([]);
  useHandleResize(setIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;

      textRef.current.forEach((section) => {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          pageYOffset >= sectionOffsetTop &&
          pageYOffset < sectionOffsetTop + sectionHeight
        ) {
        }
      });
    };
    setActiveSection(activeSection);
  }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    animateNavbar(".logo", textRef, isDesktop);
  }, []);

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
            index={index}
            activeSection={activeSection}
            setIsOpen={setIsOpen}
          />
        ))}
        <Resume sidebar="false" />
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection={activeSection}
      />
    </NavbarContainer>
  );
}
