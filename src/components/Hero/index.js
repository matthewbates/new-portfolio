import { forwardRef } from "react";

import { HeroContainer } from "./HeroElements";

export const HeroRef = forwardRef((props, ref) => {
  const { className, theme } = props;

  return (
    <HeroContainer
      theme={theme}
      to="Home"
      spy={true}
      smooth={true}
      duration={500}
      className={className}
      ref={ref}
    >
      MHCB
    </HeroContainer>
  );
});

export default HeroRef;
