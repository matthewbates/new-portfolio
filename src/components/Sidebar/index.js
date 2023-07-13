import { useRef, useEffect } from "react";

import gsap from "gsap";

import { SidebarContainer, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/helpers";
import { links } from "../../utils/data";

export default function Sidebar({ isOpen, setIsOpen, closeDrawer }) {
  const sidebarRef = useRef(null);
  const linkRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  //! refactor to gsap.js
  useEffect(() => {
    if (isOpen) {
      gsap.timeline().from(linkRef.current, {
        opacity: 0,
        x: -25,
        delay: 0.5,
      });
    }
  }, [isOpen]);

  return (
    <SidebarContainer isOpen={isOpen} ref={sidebarRef}>
      <SidebarItems ref={linkRef}>
        {links.map(({ id, name }) => (
          <Links
            key={id}
            sidebar="true"
            title={name}
            id={name}
            setIsOpen={setIsOpen}
            closeDrawer={closeDrawer}
          />
        ))}
      </SidebarItems>
    </SidebarContainer>
  );
}
