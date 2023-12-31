import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

import { toggleSidebar } from "../../utils/helpers";
import CONSTANTS from "../../utils/constants";

export default function Burger({ isOpen, setIsOpen, theme }) {
  return (
    <BurgerContainer theme={theme}>
      <Hamburger
        toggled={isOpen}
        toggle={() => toggleSidebar(isOpen, setIsOpen)}
        size={20}
      />
    </BurgerContainer>
  );
}
