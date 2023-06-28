import { useRef } from "react";

import { SidebarContainer, SidebarItems } from "./SidebarElements";

import { useResize, useClickOutside } from "../../utils/helpers";
import Links from "../Links";

export default function Sidebar({ isOpen, setIsOpen, closeDrawer }) {
  const rightNavRef = useRef(null);

  useResize(rightNavRef, () => {
    setIsOpen(false);
  });

  useClickOutside(rightNavRef, () => {
    setIsOpen(false);
  });

  return (
    <SidebarContainer isOpen={isOpen} ref={rightNavRef}>
      <SidebarItems>
        <Links title="Home" sidebar="true" closeDrawer={closeDrawer} />
        <Links title="About" sidebar="true" closeDrawer={closeDrawer} />
      </SidebarItems>
    </SidebarContainer>
  );
}
