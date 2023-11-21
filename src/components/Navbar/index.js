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

export default function Navbar({ isOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = useState(null);
  const textRef = useRef([]);

  useHandleResize(setIsOpen);
  const resumeRef = React.createRef();
  // const heroRef = React.createRef();
  const heroRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const pageYOffset = window.pageYOffset;

  //     textRef.current.forEach((section) => {
  //       const sectionOffsetTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;

  //       if (
  //         pageYOffset >= sectionOffsetTop &&
  //         pageYOffset < sectionOffsetTop + sectionHeight
  //       ) {
  //       }
  //     });
  //   };
  //   setActiveSection(activeSection);
  // }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    animateNavbar(".resume", textRef, isDesktop);
  }, []);

  return (
    <NavbarContainer $isOpen={isOpen}>
      <HeroRef ref={heroRef} className="resume" />
      {/* <Select ref={resumeRef} className={"resume"} /> */}
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
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection={activeSection}
      />
    </NavbarContainer>
  );
}
