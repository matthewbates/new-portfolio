import styled from "styled-components";
import { Link } from "react-scroll";

import CONSTANTS from "../../utils/constants";

export const HeroContainer = styled(Link)`
  margin-left: 1.5em;
  font-family: "Raleway";
  font-size: 1.5em;
  cursor: pointer;
  font-weight: bold;
  color: ${CONSTANTS.colors.offWhite};

  &:hover {
    color: ;
  }
`;
