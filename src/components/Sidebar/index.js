import { useRef, useEffect } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import gsap from "gsap";

import { SidebarContainer, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/hooks";
import { links } from "../../utils/data";
import Toggle from "../Toggle";
import { ModeNight } from "@mui/icons-material";

export default function Sidebar({
  isOpen,
  setIsOpen,
  activeStyle,
  theme,
  toggle,
}) {
  const sidebarRef = useRef(null);
  const linkRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  // useEffect(() => {
  //   if (isOpen) {
  //     gsap.timeline().from(linkRef.current, {
  //       opacity: 0,
  //       x: -25,
  //       delay: 0.25,
  //     });
  //   }
  // }, [isOpen]);

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
    <SidebarContainer $isOpen={isOpen} ref={sidebarRef} theme={theme}>
      <SidebarItems ref={linkRef} $isOpen={isOpen}>
        {links.map(({ id, name }, index) => (
          <Links
            key={id}
            sidebar="true"
            title={name}
            id={name}
            setIsOpen={setIsOpen}
            index={index}
            activeStyle={activeStyle}
            theme={theme}
          />
        ))}
        <div
          onClick={toggle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
            padding: "1em",
            cursor: "pointer",
            margin: "auto",
            marginBottom: "2em",
            border: "2px solid white",
            borderRadius: "6em",
            marginTop: "1.5em",
          }}
        >
          {theme === "light" ? (
            <>
              <LightModeIcon /> Switch to dark mode
            </>
          ) : (
            <>
              <ModeNightIcon /> Switch to light mode
            </>
          )}
        </div>
      </SidebarItems>
    </SidebarContainer>
  );
}
