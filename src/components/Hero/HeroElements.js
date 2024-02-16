import styled from "styled-components";
import { Link } from "react-scroll";

import CONSTANTS from "../../utils/constants";

export const HeroContainer = styled(Link)`
  margin-left: 1.5em;
  font-family: "Space Mono";
  font-size: 1.5em;
  cursor: pointer;
  font-weight: bold;
  color: ${CONSTANTS.colors.offWhite};
  transition: 0.3s ease;
  letter-spacing: 0.25em;

  &:hover {
    color: ${CONSTANTS.colors.spaceGreen};
  }
`;
