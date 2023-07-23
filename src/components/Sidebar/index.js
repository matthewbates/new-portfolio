import { useRef, useEffect } from "react";

import gsap from "gsap";

import { SidebarContainer, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/hooks";
import { links } from "../../utils/data";
import Resume from "../Resume";
import { flexbox } from "@mui/system";

export default function Sidebar({ isOpen, setIsOpen, activeStyle }) {
  const sidebarRef = useRef(null);
  const linkRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      gsap.timeline().from(linkRef.current, {
        opacity: 0,
        x: -25,
        delay: 0.5,
      });
    }
  }, [isOpen]);

  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (
  //       currentScrollPos >= prevScrollPos ||
  //       currentScrollPos <= prevScrollPos
  //     )
  //       setIsOpen(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <SidebarContainer isOpen={isOpen} ref={sidebarRef}>
      <SidebarItems ref={linkRef} isOpen={isOpen}>
        {links.map(({ id, name }, index) => (
          <Links
            key={id}
            sidebar="true"
            title={name}
            id={name}
            setIsOpen={setIsOpen}
            index={index}
            activeStyle={activeStyle}
          />
        ))}
        {/* <Resume sidebar="true" /> */}
        {/* <button style={{ display: "flex", padding: "1em", margin: "auto" }}>
          Resume
        </button> */}
      </SidebarItems>
    </SidebarContainer>
  );
}
