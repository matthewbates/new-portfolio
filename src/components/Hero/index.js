import { forwardRef } from "react";

import { HeroContainer } from "./HeroElements";

export const HeroRef = forwardRef((props, ref) => {
  const { className } = props;

  return (
    <HeroContainer
      to="Home"
      spy={true}
      smooth={true}
      duration={500}
      className={className}
      ref={ref}
    >
      Matthew Bates
    </HeroContainer>
  );
});

export default HeroRef;
