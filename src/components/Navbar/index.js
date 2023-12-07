import React, { useState, useEffect, useRef } from "react";

import { NavbarContainer, BurgerWrapper, LinksWrapper } from "./NavbarElements";

import Burger from "../Burger";
import Links from "../Links";
import Sidebar from "../Sidebar";
import Select from "../Select";
import HeroRef from "../Hero";

import { links } from "../../utils/data";
import { animateNavbar } from "../../utils/gsap";
import { useHandleResize } from "../../utils/helpers";
import { useScrollPosition } from "../../utils/hooks";
import Provider from "../Provider";
import Toggle from "../Toggle";

export default function Navbar({ isOpen, setIsOpen, theme, toggle }) {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollDirection, setScrollDireciton] = useState(null);

  const textRef = useRef([]);
  const heroRef = useRef(null);

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

  useScrollPosition(scrollDirection, setScrollDireciton);

  return (
    <>
      <NavbarContainer
        $isOpen={isOpen}
        theme={theme}
        scrollDirection={scrollDirection}
      >
        <HeroRef ref={heroRef} className="resume" theme={theme} />
        {/* <Select ref={resumeRef} className={"resume"} /> */}
        <BurgerWrapper className="burger">
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} />
        </BurgerWrapper>
        <LinksWrapper ref={textRef}>
          {links.map(({ id, name }, index) => (
            <Links
              sidebar="false"
              key={id}
              title={name}
              id={name}
              index={index}
              activeSection={activeSection}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              theme={theme}
            />
          ))}
        </LinksWrapper>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          theme={theme}
          toggle={toggle}
          scrollDirection={scrollDirection}
        />
        <Toggle theme={theme} toggle={toggle} />
      </NavbarContainer>
    </>
  );
}
