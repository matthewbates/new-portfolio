import { useRef } from "react";

import { SidebarContainer, Img, SidebarItems } from "./SidebarElements";

import Links from "../Links";

import { useResize, useClickOutside } from "../../utils/helpers";
import { links } from "../../utils/data";

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
        <Img src={require("../../assets/avatar.png")} alt="avatar" />
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
