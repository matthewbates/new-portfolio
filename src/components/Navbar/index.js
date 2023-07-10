import { useState, useEffect } from "react";

import {
  NavbarContainer,
  LinksWrapper,
  SidebarWrapper,
} from "./NavbarElements";

import Burger from "../Burger";
import Links from "../Links";
import Sidebar from "../Sidebar";

import { links } from "../../utils/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = (e) => {
    if (e.target.innerWidth > 820) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     currentScrollPos <= prevScrollPos ? setVisible(true) : setVisible(false);
  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const closeDrawer = () => {
    setTimeout(() => setIsOpen(false), 800);
  };

  return (
    <NavbarContainer visible={visible} isOpen={isOpen}>
      <Burger toggle={toggleSidebar} isOpen={isOpen} />
      <LinksWrapper>
        {links.map(({ id, name }, index) => (
          <Links key={id} sidebar="false" title={name} id={name} />
        ))}
      </LinksWrapper>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeDrawer={closeDrawer}
      />
    </NavbarContainer>
  );
}
