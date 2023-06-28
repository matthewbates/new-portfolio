import { useState, useEffect } from "react";
import {
  NavbarContainer,
  BurgerWrapper,
  LinksWrapper,
  SidebarWrapper,
} from "./NavbarElements";

import Burger from "../Burger";
import Links from "../Links";
import Sidebar from "../Sidebar";

import { useScrollDirection } from "../../utils/helpers";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

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

  return (
    <NavbarContainer visible={visible}>
      <BurgerWrapper>
        <Burger toggle={toggleSidebar} isOpen={isOpen} />
      </BurgerWrapper>
      <LinksWrapper>
        <Links title="Home" header={true} />
        <Links title="About" header={true} />
      </LinksWrapper>
      <SidebarWrapper>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeDrawer={closeDrawer}
        />
      </SidebarWrapper>
    </NavbarContainer>
  );
}
