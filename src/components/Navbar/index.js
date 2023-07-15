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
import Resume from "../Resume";

export default function Navbar({ isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const textRef = useRef([]);

  //! refactor to helpers.js
  const handleResize = (e) => {
    if (e.target.innerWidth > 820) {
      setIsOpen(false);
    }
  };

  //! refactor to gsap.js
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".logo", {
      x: -200,
      opacity: 0,
      duration: 0.5,
    });
    window.innerWidth > 820
      ? tl.from(textRef.current, {
          x: 200,
          opacity: 0,
        })
      : tl.from(".burger", {
          x: 200,
          opacity: 0,
        });
  }, []);

  //! refactor to helpers.js file
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      currentScrollPos <= prevScrollPos ? setVisible(true) : setVisible(false);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => {
    setTimeout(() => setIsOpen(false), 800);
  };

  return (
    <NavbarContainer visible={visible} isOpen={isOpen}>
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
        {links.map(({ id, name }) => (
          <Links key={id} sidebar="false" title={name} id={name} />
        ))}
        <Resume sidebar="false" />
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeDrawer={closeDrawer}
      />
    </NavbarContainer>
  );
}
