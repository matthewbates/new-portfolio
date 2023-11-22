import { useRef, useEffect } from "react";

import { Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import gsap from "gsap";

import { SidebarContainer, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/hooks";
import { links } from "../../utils/data";
import Toggle from "../Toggle";

import CONSTANTS from "../../utils/constants";

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
    <SidebarContainer
      $isOpen={isOpen}
      ref={sidebarRef}
      theme={theme}
      sidebar="true"
    >
      <SidebarItems ref={linkRef} $isOpen={isOpen}>
        {links.map(({ id, name }, index) => (
          <Links
            sidebar="true"
            key={id}
            title={name}
            id={name}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            index={index}
            activeStyle={activeStyle}
            theme={theme}
          />
        ))}
        <Button
          variant="outlined"
          onClick={toggle}
          sx={{
            border: "1px solid #ffffff",
            padding: "1em",
            color: "#ffffff",
            gap: "0.5em",
            margin: "auto",
            marginTop: "2em",
            marginBottom: "2em",
            "&:hover": {
              color: theme === "light" && "#000000",
              backgroundColor: `${
                theme === "light" ? "#ffffff" : `${CONSTANTS.colors.gray_2}`
              }`,
              borderColor: "#ffffff",
            },
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
        </Button>
      </SidebarItems>
    </SidebarContainer>
  );
}
