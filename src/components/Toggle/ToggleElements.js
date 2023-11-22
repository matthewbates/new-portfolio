import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const ToggleContainer = styled.div`
  margin-right: 2em;
  transition: 0.3s ease;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
