import { useState, useEffect, useRef } from "react";

import gsap from "gsap";

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
import { scrollToTop } from "../../utils/helpers";

const linkHighlightOnPageLoad = links.findIndex((link) => link.name === "Home");

export default function Navbar({ isOpen, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(
    linkHighlightOnPageLoad !== -1 ? linkHighlightOnPageLoad : 0
  );
  const textRef = useRef([]);

  const handleResize = (e) => {
    if (e.target.innerWidth > 820) {
      setIsOpen(false);
    }
  };

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".logo", {
      y: -100,
      opacity: 0,
      duration: 0.5,
    });
    window.innerWidth > 820
      ? tl.from(textRef.current, {
          y: -100,
          opacity: 0,
        })
      : tl.from(".burger", {
          y: -100,
          opacity: 0,
        });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeDrawer = () => {
    setTimeout(() => setIsOpen(false), 800);
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
          />
        ))}
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeDrawer={closeDrawer}
        toggle={toggleActiveIndex}
        activeIndex={activeIndex}
      />
    </NavbarContainer>
  );
}
