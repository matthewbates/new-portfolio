import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

export default function Burger({ toggle, isOpen }) {
  return (
    <BurgerContainer isOpen={isOpen}>
      <Hamburger
        toggled={isOpen}
        toggle={toggle}
        distance="sm"
        duration={0.3}
        direction="right"
        size={24}
      />
    </BurgerContainer>
  );
}
