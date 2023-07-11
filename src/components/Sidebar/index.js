import { useRef, useEffect } from "react";

import gsap from "gsap";

import { SidebarContainer, Img, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/helpers";
import { links } from "../../utils/data";

export default function Sidebar({ isOpen, setIsOpen, closeDrawer }) {
  const sidebarRef = useRef(null);
  const linkRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      gsap.timeline().from(".nav-text", {
        opacity: 0,
        x: 25,
        delay: 0.25,
        duration: 0.25,
      });
      gsap.timeline().from(".nav-links", {
        opacity: 0,
        x: -25,
        duration: 0.25,
        delay: 0.5,
      });
    }
  }, [isOpen]);

  return (
    <SidebarContainer isOpen={isOpen} ref={sidebarRef}>
      <div
        className="nav-text"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Img src={require("../../assets/avatar.png")} alt="avatar" />
        {/* <h3
          style={{
            fontFamily: "Arial",
            marginTop: "1em",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Matthew Bates
        </h3> */}
      </div>
      <SidebarItems className="nav-links">
        {links.map(({ id, name }) => (
          <Links
            key={id}
            sidebar="true"
            title={name}
            id={name}
            closeDrawer={closeDrawer}
          />
        ))}
      </SidebarItems>
    </SidebarContainer>
  );
}
