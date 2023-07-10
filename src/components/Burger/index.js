import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

export default function Burger({ toggle, isOpen }) {
  return (
    <BurgerContainer>
      <Hamburger toggled={isOpen} toggle={toggle} size={24} />
    </BurgerContainer>
  );
}
