import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

import { toggleSidebar } from "../../utils/helpers";

export default function Burger({ isOpen, setIsOpen, theme }) {
  return (
    <BurgerContainer theme={theme}>
      <Hamburger
        toggled={isOpen}
        toggle={() => toggleSidebar(isOpen, setIsOpen)}
        size={22}
      />
    </BurgerContainer>
  );
}
